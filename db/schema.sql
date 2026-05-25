-- Creator OS — PostgreSQL schema
-- Run order matters because of foreign keys. Run top to bottom.

CREATE EXTENSION IF NOT EXISTS "pgcrypto";        -- for gen_random_uuid()
-- CREATE EXTENSION IF NOT EXISTS "vector";       -- enable later for RAG (pgvector)

-- ---------------------------------------------------------------------------
-- Users & teams
-- ---------------------------------------------------------------------------
CREATE TABLE users (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email         VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name          VARCHAR(120) NOT NULL,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE team (
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name       VARCHAR(120) NOT NULL,
    owner_id   UUID NOT NULL REFERENCES users(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- A user can belong to many teams, each time with a role.
-- role drives RBAC: OWNER | EDITOR | REVIEWER
CREATE TABLE membership (
    id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id),
    team_id UUID NOT NULL REFERENCES team(id),
    role    VARCHAR(20) NOT NULL,
    UNIQUE (user_id, team_id)
);

-- ---------------------------------------------------------------------------
-- Content & drafts
-- ---------------------------------------------------------------------------
-- status: DRAFT | IN_REVIEW | APPROVED | SCHEDULED | PUBLISHED | REJECTED
CREATE TABLE content (
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    team_id    UUID NOT NULL REFERENCES team(id),
    author_id  UUID NOT NULL REFERENCES users(id),
    title      VARCHAR(255) NOT NULL,
    body       TEXT NOT NULL,
    status     VARCHAR(20) NOT NULL DEFAULT 'DRAFT',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Each save creates a new version row -> full edit history.
CREATE TABLE draft (
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content_id UUID NOT NULL REFERENCES content(id) ON DELETE CASCADE,
    version    INT NOT NULL,
    body       TEXT NOT NULL,
    edited_by  UUID NOT NULL REFERENCES users(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (content_id, version)
);

-- ---------------------------------------------------------------------------
-- AI repurposing output: one row per platform per content
-- ---------------------------------------------------------------------------
CREATE TABLE platform_variant (
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content_id UUID NOT NULL REFERENCES content(id) ON DELETE CASCADE,
    platform   VARCHAR(30) NOT NULL,          -- INSTAGRAM | LINKEDIN | X | ...
    caption    TEXT NOT NULL,
    hashtags   VARCHAR(500),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ---------------------------------------------------------------------------
-- Approval workflow
-- ---------------------------------------------------------------------------
-- decision: PENDING | APPROVED | REJECTED
CREATE TABLE approval (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content_id  UUID NOT NULL REFERENCES content(id) ON DELETE CASCADE,
    reviewer_id UUID NOT NULL REFERENCES users(id),
    decision    VARCHAR(20) NOT NULL DEFAULT 'PENDING',
    comment     TEXT,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ---------------------------------------------------------------------------
-- Scheduling & publishing
-- ---------------------------------------------------------------------------
-- state: QUEUED | PUBLISHING | PUBLISHED | FAILED  (retry_count powers fault tolerance)
CREATE TABLE schedule (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    variant_id  UUID NOT NULL REFERENCES platform_variant(id) ON DELETE CASCADE,
    publish_at  TIMESTAMPTZ NOT NULL,
    state       VARCHAR(20) NOT NULL DEFAULT 'QUEUED',
    retry_count INT NOT NULL DEFAULT 0,
    last_error  TEXT,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ---------------------------------------------------------------------------
-- Analytics (mock data for the demo, real ingestion is roadmap)
-- ---------------------------------------------------------------------------
CREATE TABLE analytics (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    schedule_id UUID NOT NULL REFERENCES schedule(id) ON DELETE CASCADE,
    views       INT NOT NULL DEFAULT 0,
    likes       INT NOT NULL DEFAULT 0,
    score       REAL NOT NULL DEFAULT 0,
    collected_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Helpful indexes for the queries actually run
CREATE INDEX idx_content_team    ON content(team_id);
CREATE INDEX idx_content_status  ON content(status);
CREATE INDEX idx_variant_content ON platform_variant(content_id);
CREATE INDEX idx_schedule_state  ON schedule(state, publish_at);
CREATE INDEX idx_membership_user ON membership(user_id);
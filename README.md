# Creator OS — the operating system for content creators

> One pipeline for a content's entire life: write → AI repurpose → team approval → schedule → publish → analytics → and back again. The last stage feeds the first — that loop is what makes this an OS, not another dashboard.

UIU Developers HUB Hackathon 2026 — Content Tools & Marketing Infrastructure.

---

## The problem

Modern creators juggle 10+ disconnected tools for posting, scheduling, AI generation, team approval, analytics, and monetization. Nothing talks to each other, so a creator's insights never improve their next post. Creator OS unifies the whole lifecycle into one event-driven backend.

## What it does (built & working)

- **Auth + teams (RBAC)** — JWT login; roles `OWNER` / `EDITOR` / `REVIEWER` gate every action.
- **Content + draft versioning** — every save is a new version; full edit history.
- **AI repurposing engine** — a multi-step pipeline turns one draft into per-platform variants (caption + hashtags + format), with a brand-voice check. Not a single LLM call — an orchestrated workflow.
- **Approval workflow + real-time** — editor submits → reviewer gets a live WebSocket update → decision propagates instantly. Approval emits an event onto a Redis Stream.
- **Scheduler + publisher** — approved variants are queued; a worker consumes the stream and publishes via platform adapters. On failure it retries without blocking the system (fault tolerant).
- **Analytics + AI media kit** — performance scoring with an AI-written insight, plus an auto-generated media kit creators can send to sponsors.

## Architecture

[ Insert system architecture diagram here ]

Layers: Next/React client → Spring Boot API (gateway + services) → Redis Streams event bus → worker pool + AI orchestrator → PostgreSQL + Redis.

Key decisions:
- **Event-driven** via Redis Streams so publishing is decoupled and fault tolerant.
- **Adapter pattern** for platforms — mock adapters today, real OAuth APIs are a drop-in swap (see roadmap).
- **WebSocket (STOMP)** for real-time approval status.

## Tech stack

| Layer | Tech |
|---|---|
| Frontend | React + Tailwind |
| Backend | Spring Boot, Spring Security (JWT) |
| Database | PostgreSQL |
| Cache + queue | Redis (cache + Redis Streams) |
| Real-time | Spring WebSocket (STOMP) |
| AI | Gemini API (orchestration logic is ours) |
| Deploy | Docker Compose |

## Run it

```bash
docker compose up -d          # Postgres + Redis (schema auto-loads)
cd backend && ./mvnw spring-boot:run
cd frontend && npm install && npm run dev
```

## Database design

8 entities — see `db/schema.sql` and the ERD in `/docs`. Highlights: `draft` stores versions, `platform_variant` stores AI output per platform, `schedule.retry_count` powers fault tolerance.

## Challenges faced

- _[fill in during the build]_

## Future improvements (roadmap)

- Real platform OAuth integrations (adapter swap — architecture already supports it)
- ML-based engagement & virality prediction (currently transparent rule-based scoring)
- Sponsor marketplace & brand–creator matching
- Video / reel auto-clipping
- Horizontal scale-out: Kafka + Kubernetes

## Why choose us

We didn't build 5 separate tools — we built one coherent lifecycle where analytics feeds back into creation. Real event-driven architecture, real RBAC, real fault tolerance, and an AI pipeline that's orchestrated rather than wrapped. The hard parts are engineered, not faked, and the parts we didn't build are honestly scoped as roadmap.
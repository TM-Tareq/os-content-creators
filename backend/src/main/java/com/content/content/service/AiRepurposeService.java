package com.content.content.service;

import com.content.content.entity.Content;
import com.content.content.entity.PlatformVariant;
import com.content.content.repository.ContentRepository;
import com.content.content.repository.PlatformVariantRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class AiRepurposeService {
    private final ContentRepository contentRepository;
    private final PlatformVariantRepository variantRepository;

    public AiRepurposeService(ContentRepository contentRepository, PlatformVariantRepository variantRepository) {
        this.contentRepository = contentRepository;
        this.variantRepository = variantRepository;
    }

    @Transactional
    public List<PlatformVariant> repurposeByContent(UUID contentId) {
        Content content = contentRepository.findById(contentId).orElseThrow(() -> new RuntimeException("Content not found"));

        List<PlatformVariant>  generatedVariants = new ArrayList<>();
        String originalBody = content.getBody();

        PlatformVariant xVariant =  new PlatformVariant();
        xVariant.setContent(content);
        xVariant.setPlatform("X");
        xVariant.setCaption(originalBody.length() > 200 ? originalBody.substring(0, 200) + "..." : originalBody);
        xVariant.setHashtags("#buildinpublic #creators");
        generatedVariants.add(variantRepository.save(xVariant));

        PlatformVariant linkedinVariant = new PlatformVariant();
        linkedinVariant.setContent(content);
        linkedinVariant.setPlatform("LINKEDIN");
        linkedinVariant.setCaption("Insights from our latest workspace production:\n\n" + originalBody + "\n\nAgree? Let me know in the comments!");
        linkedinVariant.setHashtags("#networking #productivity #creatorOS");
        generatedVariants.add(variantRepository.save(linkedinVariant));

        PlatformVariant instagramVariant = new PlatformVariant();
        instagramVariant.setContent(content);
        instagramVariant.setPlatform("INSTAGRAM");
        instagramVariant.setCaption("Behind the scenes logic \n\n" + originalBody);
        instagramVariant.setHashtags("#instagram #contentcreator #marketing #reels");
        generatedVariants.add(variantRepository.save(instagramVariant));

        return generatedVariants;
    }
}

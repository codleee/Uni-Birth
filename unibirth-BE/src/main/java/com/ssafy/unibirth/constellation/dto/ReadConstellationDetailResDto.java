package com.ssafy.unibirth.constellation.dto;

import com.ssafy.unibirth.constellation.domain.Constellation;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReadConstellationDetailResDto {
    private Long constellationId;
    private String constellationTitle;
    private String introduction;
    private String imageUrl;
    private int totalBrightness;
    private int pointCount;
    private int starCount;
    private LocalDateTime createdAt;

    public ReadConstellationDetailResDto(Constellation constellation) {
        this.constellationId = constellation.getId();
        this.constellationTitle = constellation.getTitle();
        this.introduction = constellation.getMember().getIntroduction();
        this.imageUrl = constellation.getImageUrl();
        this.totalBrightness = constellation.getTotalBrightness();
        this.pointCount = constellation.getPointCount();
        this.starCount = constellation.getStarCount();
        this.createdAt = constellation.getCreatedAt();
    }
}


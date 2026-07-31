"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

export default function ProjectImageLightbox() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrevious = useCallback(() => {
    setActiveIndex((current) => current === null ? null : (current - 1 + images.length) % images.length);
  }, [images.length]);
  const showNext = useCallback(() => {
    setActiveIndex((current) => current === null ? null : (current + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const projectImages = Array.from(document.querySelectorAll<HTMLImageElement>(".case-images img"));
    setImages(projectImages.map((image) => ({ src: image.currentSrc || image.src, alt: image.alt })));

    const handleClick = (event: MouseEvent) => {
      const image = (event.target as HTMLElement).closest<HTMLImageElement>(".case-images img");
      if (!image) return;
      const index = projectImages.indexOf(image);
      if (index < 0) return;
      event.preventDefault();
      setActiveIndex(index);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, close, showNext, showPrevious]);

  if (activeIndex === null || !images[activeIndex]) return null;
  const activeImage = images[activeIndex];

  return (
    <div
      className="project-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="作品图片查看器"
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;
        const distance = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
        if (Math.abs(distance) > 50) distance > 0 ? showPrevious() : showNext();
        touchStartX.current = null;
      }}
    >
      <div className="project-lightbox-bar">
        <span>{String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
        <button type="button" onClick={close} aria-label="关闭图片查看器">关闭 ×</button>
      </div>

      <button className="project-lightbox-nav is-previous" type="button" onClick={showPrevious} aria-label="查看上一张图片">←</button>
      <figure>
        <img src={activeImage.src} alt={activeImage.alt} />
        {activeImage.alt && <figcaption>{activeImage.alt}</figcaption>}
      </figure>
      <button className="project-lightbox-nav is-next" type="button" onClick={showNext} aria-label="查看下一张图片">→</button>
    </div>
  );
}

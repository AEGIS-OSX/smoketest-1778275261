"use client";

import assets from "../../public/assets.json";

type AssetKey = keyof typeof assets;

export function ProjectImage({ id, className }: { id: AssetKey; className?: string }) {
  const asset = assets[id];

  if (!asset?.url) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`Missing asset for ProjectImage id: ${id}`);
    }

    return (
      <div className={className ? `${className} image-placeholder` : "image-placeholder"} role="img" aria-label={`${id} placeholder`}>
        Image coming soon.
      </div>
    );
  }

  return (
    <img
      src={asset.url}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      className={className}
      loading={id === "hero" ? "eager" : "lazy"}
    />
  );
}
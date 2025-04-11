import { getCloudinaryImageData } from "@/lib/api/cloudinary";
import Image from "next/image";
import React from "react";

interface CustomImageProp {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default async function CustomImage({
  src,
  alt,
  width,
  height,
}: Readonly<CustomImageProp>) {
  const imageUrl = await getCloudinaryImageData(src);

  return (
    <Image
      src={imageUrl.src}
      alt={alt}
      width={width}
      height={height}
    />
  );
}

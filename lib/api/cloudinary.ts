// import { CloudinaryImage, CloudinaryImageData } from "@/types";
// import { v2 as cloudinary } from "cloudinary";
// import { cache } from "react";

// // Configuration
// cloudinary.config({
//   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
//   api_secret: process.env.SERVER_CLOUDINARY_API_SECRET,
//   secure: true,
// });

// /**
//  * Fetches images from Cloudinary by tag, sorted by creation date (newest first)
//  * @param {string} tag - The tag to search for in Cloudinary (e.g., 'nature', 'portrait')
//  * @returns {Promise<CloudinaryImage[]>} Array of image objects with public_id, dimensions, and alt text
//  * @throws {Error} If Cloudinary API request fails (caught internally, returns empty array)
//  * @example
//  * // Get all images tagged with 'landscape'
//  * const landscapeImages = await getImageByTag('landscape')
//  */
// export async function getImageByTag(tag: string): Promise<CloudinaryImage[]> {
//   try {
//     const result = await cloudinary.search
//       .expression(`tags:${tag}`)
//       .sort_by("created_at", "desc")
//       .max_results(30)
//       .with_field("context")
//       .execute();

//     return result.resources.map((resource: CloudinaryImage) => ({
//       public_id: resource.public_id,
//       width: resource.width,
//       height: resource.height,
//       alt: resource?.alt ?? resource.public_id.split("/").pop() ?? "",
//     }));
//   } catch (error) {
//     console.error("Error fetching Cloudinary images: ", error);
//     return [];
//   }
// }

// /**
//  * Generate an optimized Cloudinary URL for an image with automatic format/quality
//  * @param {string} publicId - The Cloudinary public ID of the image
//  * @param {number} [width] - Optional target width for responsive images (maintains aspect ratio)
//  * @returns {string} Optimized Cloudinary URL with auto-format, quality, and DPR settings
//  *
//  * @example
//  * // Get URL for full-size image with auto optimization
//  * const url = getOptimizedUrl('sample.jpg');
//  *
//  * @example
//  * // Get URL resized to 800px width
//  * const url = getOptimizedUrl('sample.jpg', 800);
//  */
// export function getOptimizedUrl(publicId: string, width?: number): string {
//   return cloudinary.url(publicId, {
//     quality: "auto",
//     format: "auto",
//     fetch_format: "auto",
//     ...(width && { width }),
//     dpr: "auto",
//   });
// }

import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { services } from "../data";
import {
  CloudinaryApiResponse,
  CloudinaryImageData,
  CloudinaryReource,
  Service,
  ServiceBase,
} from "@/types";
import { cache } from "react";

const cldCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const cldApiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
const cldApiSecret = process.env.SERVER_CLOUDINARY_API_SECRET;

if (!cldCloudName || !cldApiKey || !cldApiSecret) {
  console.error("Cloudinary API credentials not found");
  throw new Error("Missing Cloudinary environment variables.");
}

// Init Cloudinary instance
const cld = new Cloudinary({
  cloud: {
    cloudName: cldCloudName,
    apiKey: cldApiKey,
    apiSecret: cldApiSecret,
  },
});

export const getServiceByID = (id: string): ServiceBase | undefined => {
  return services.find((service: any) => service.id === id);
};

// Get cldnry img URL data for specific path
export const getCloudinaryImageData = cache(
  (
    public_id: string,
    width: number = 1800,
    height: number = 1200,
    alt?: string
  ): CloudinaryImageData => {
    const img = cld.image(public_id);
    img.resize(fill().width(width).height(height));

    if (!img)
      throw new Error(`Image data not found for public_id: ${public_id}`);

    return {
      src: img.toURL(),
      width,
      height,
      alt: alt ?? public_id,
    };
  }
);

export const getImagesByTag = async (
  tag: string
): Promise<CloudinaryImageData[]> => {
  try {
    const cloudinaryURL = `https://api.cloudinary.com/v1_1/${
      cld.getConfig().cloud?.cloudName
    }/resources/search`;

    const response = await fetch(cloudinaryURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(
          cldApiKey + ":" + cldApiSecret
        ).toString("base64")}`,
      },

      body: JSON.stringify({
        expression: `tags:${tag}`,
        max_results: 30,
      }),
    });

    const data = (await response.json()) as CloudinaryApiResponse;

    if (data.resources) {
      return data.resources.map((resource: CloudinaryReource) => {
        return getCloudinaryImageData(
          resource.public_id,
          resource.width,
          resource.height
        );
      });
    }

    return [];
  } catch (error) {
    console.error("Error fetching images by tag from Cloudinary:", error);
    return [];
  }
};

export const processServiceData = (
  service: ServiceBase,
  galleryImages?: CloudinaryImageData[]
): Service => {
  const { src } = getCloudinaryImageData(service.mainImageId, 800, 600);

  if (!galleryImages) galleryImages = [];

  return {
    ...service,
    src,
    gallery: galleryImages,
  };
};

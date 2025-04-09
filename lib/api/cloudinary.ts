import { CloudinaryImage } from "@/types";
import { v2 as cloudinary } from "cloudinary";

// Configuration
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.SERVER_CLOUDINARY_API_SECRET,
  secure: true,
});

/**
 * Fetches images from Cloudinary by tag, sorted by creation date (newest first)
 * @param {string} tag - The tag to search for in Cloudinary (e.g., 'nature', 'portrait')
 * @returns {Promise<CloudinaryImage[]>} Array of image objects with public_id, dimensions, and alt text
 * @throws {Error} If Cloudinary API request fails (caught internally, returns empty array)
 * @example
 * // Get all images tagged with 'landscape'
 * const landscapeImages = await getImageByTag('landscape')
 */
export async function getImageByTag(tag: string): Promise<CloudinaryImage[]> {
  try {
    const result = await cloudinary.search
      .expression(`tags:${tag}`)
      .sort_by("created_at", "desc")
      .max_results(30)
      .with_field("context")
      .execute();

    return result.resources.map((resource: CloudinaryImage) => ({
      public_id: resource.public_id,
      width: resource.width,
      height: resource.height,
      alt: resource?.alt ?? resource.public_id.split("/").pop() ?? "",
    }));
  } catch (error) {
    console.error("Error fetching Cloudinary images: ", error);
    return [];
  }
}

/**
 * Generate an optimized Cloudinary URL for an image with automatic format/quality
 * @param {string} publicId - The Cloudinary public ID of the image
 * @param {number} [width] - Optional target width for responsive images (maintains aspect ratio)
 * @returns {string} Optimized Cloudinary URL with auto-format, quality, and DPR settings
 *
 * @example
 * // Get URL for full-size image with auto optimization
 * const url = getOptimizedUrl('sample.jpg');
 *
 * @example
 * // Get URL resized to 800px width
 * const url = getOptimizedUrl('sample.jpg', 800);
 */
export function getOptimizedUrl(publicId: string, width?: number): string {
  return cloudinary.url(publicId, {
    quality: "auto",
    format: "auto",
    fetch_format: "auto",
    ...(width && { width }),
    dpr: "auto",
  });
}

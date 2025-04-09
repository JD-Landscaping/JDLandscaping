/**
 * Represents an image resource from Cloudinary
 * @interface CloudinaryImage
 */
export interface CloudinaryImage {
  /**
   * The public identifier of the image in Cloudinary
   * @example 'samples/animals/kitten-playing'
   */
  public_id: string;
  /**
   * Original width of the image in pixels
   */
  width: number;
  /**
   * Original height of the image in pixels
   */
  height: number;
  /**
   * Alt text for accessibility - either from context or derived from public_id
   * @example 'A playful kitten'
   */
  alt?: string;
}

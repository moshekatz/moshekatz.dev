import { size, contentType, generateHomeImage } from "../og/generateImage";

export const dynamic = "force-static";
export const alt = "moshekatz.dev";
export { size, contentType };

export default async function Image() {
  return generateHomeImage();
}

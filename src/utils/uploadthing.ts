import { generateComponents } from "@uploadthing/react";

import type { OurFileRouter } from "../app/api/uploadthing/cors";

export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();

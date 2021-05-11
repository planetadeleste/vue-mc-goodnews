import { FileData } from "@planetadeleste/vue-mc";

export interface CategoryData {
  id: number;
  name: string;
  code: string;
  slug: string;
  preview_image: string;
  images: FileData[];
  preview_text: string;
  description: string;
  active: string;
  external_id: string;
  children: CategoryData[];
}

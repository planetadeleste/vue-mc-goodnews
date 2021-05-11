import { FileData } from "@planetadeleste/vue-mc";

export interface ArticleData {
  id: number;
  category_id: number;
  status_id: number;
  title: string;
  slug: string;
  content: string;
  preview_text: string;
  preview_image: string;
  images: FileData[];
  published_start: string;
  published_stop: string;
  view_count: string;
}

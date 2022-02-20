import "@planetadeleste/vue-mc";
import { ArticleData, CategoryData } from "./types";

declare module "@planetadeleste/vue-mc-goodnews" {
  import { Model, Collection } from "@planetadeleste/vue-mc";
  import { Response } from "vue-mc";

  interface Article extends Model, ArticleData {}
  class Article extends Model {}
  class ArticleCollection extends Collection<Article> {
    list(): Promise<Response<ArticleData[]>>;
    byCategory<T extends ArticleCollection>(
      this: T,
      iCategoryId: number | number[]
    ): T;
    byPublished<T extends ArticleCollection>(this: T): T;
  }

  interface Category extends Model, CategoryData {}
  class Category extends Model {}
  class CategoryCollection extends Collection<Category> {
    list(): Promise<Response<CategoryData[]>>;
    byActive<T extends CategoryCollection>(this: T): T;
  }

  export {
    Article,
    ArticleCollection,
    ArticleData,
    Category,
    CategoryCollection,
    CategoryData,
  };
}

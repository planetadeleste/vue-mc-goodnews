import "@planetadeleste/vue-mc";
import { ArticleData, CategoryData } from "./types";

declare module "@planetadeleste/vue-mc-goodnews" {
  import { Model, Collection } from "@planetadeleste/vue-mc";

  class Article extends Model {}
  interface Article extends Model, ArticleData {}

  class Category extends Model {}
  interface Category extends Model, CategoryData {}

  export { ArticleData, Article, CategoryData, Category };
  export class Articles extends Collection<Article> {}
  export class Categories extends Collection<Category> {}
}

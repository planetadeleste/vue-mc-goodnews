import { Collection } from "@planetadeleste/vue-mc";
import { Response } from "vue-mc";
import Article from "../models/Article";
import { ArticleData } from "@/types";

export default class ArticleCollection extends Collection<Article> {
  model(): typeof Article {
    return Article;
  }

  routes(): Record<string, any> {
    return {
      fetch: "blog.articles.index",
      list: "blog.articles.list",
    };
  }

  async list(): Promise<Response<ArticleData[]>> {
    return await this.createCustomRequest("list");
  }

  byCategory<T extends ArticleCollection>(
    this: T,
    iCategoryId: number | number[]
  ): T {
    return this.filterBy({ category: iCategoryId });
  }

  byPublished<T extends ArticleCollection>(this: T): T {
    return this.filterBy({ published: 1 });
  }
}

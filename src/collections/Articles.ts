import { Collection } from "@planetadeleste/vue-mc";
import Article from "../models/Article";

export default class Articles extends Collection<Article> {
  model(): typeof Article {
    return Article;
  }

  routes(): Record<string, any> {
    return {
      fetch: "blog.articles.index",
    };
  }
}

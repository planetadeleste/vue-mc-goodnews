import { Collection } from "@planetadeleste/vue-mc";
import Category from "../models/Category";

export default class Categories extends Collection<Category> {
  model(): typeof Category {
    return Category;
  }

  routes(): Record<string, any> {
    return {
      fetch: "blog.categories.index",
    };
  }
}

import { CategoryData } from "@/types";
import { Collection } from "@planetadeleste/vue-mc";
import { Response } from "vue-mc";
import Category from "../models/Category";

export default class CategoryCollection extends Collection<Category> {
  model(): typeof Category {
    return Category;
  }

  routes(): Record<string, any> {
    return {
      fetch: "blog.categories.index",
      list: "blog.categories.list",
    };
  }

  async list(): Promise<Response<CategoryData[]>> {
    return await this.createCustomRequest("list");
  }

  byActive<T extends CategoryCollection>(this: T): T {
    return this.filterBy({ active: 1 });
  }
}

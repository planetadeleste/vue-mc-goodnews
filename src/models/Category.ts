import { Model, cleanStr } from "@planetadeleste/vue-mc";
import { required, string } from "vue-mc/validation";
import { toNumber } from "lodash";

/**
 * Lovata.GoodNew Category model
 *
 * @author Alvaro Canepa <bfpdevel@gmail.com>
 * @export
 * @class Category
 * @extends {Model}
 */
export default class Category extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      name: null,
      code: null,
      slug: null,
      preview_image: null,
      images: [],
      preview_text: null,
      description: null,
      active: false,
      external_id: null,
      children: [],
    };
  }

  mutations(): Record<string, any> {
    return {
      id: (id: string) => toNumber(id) || null,
      name: [cleanStr],
      slug: [cleanStr],
      description: [cleanStr],
      preview_text: [cleanStr],
      preview_image: [cleanStr],
    };
  }

  validation(): Record<string, any> {
    return {
      name: required.and(string),
    };
  }

  routes(): Record<string, any> {
    return {
      fetch: "blog.categories.show",
      save: "blog.categories.store",
      create: "blog.categories.store",
      update: "blog.categories.update",
      delete: "blog.categories.destroy",
    };
  }
}

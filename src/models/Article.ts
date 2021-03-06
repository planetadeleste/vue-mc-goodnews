import { Model, cleanStr } from "@planetadeleste/vue-mc";
import { integer, min, string, required } from "vue-mc/validation";
import { toNumber } from "lodash";
import MarkdownIt from "markdown-it";

/**
 * Lovata.GoodNew Article model
 *
 * @author Alvaro Canepa <bfpdevel@gmail.com>
 * @export
 * @class Article
 * @extends {Model}
 */
export default class Article extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      category_id: null,
      status_id: 1,
      title: "",
      slug: "",
      content: "",
      preview_text: null,
      preview_image: null,
      images: [],
      published_start: null,
      published_stop: null,
      view_count: 0,
    };
  }

  mutations(): Record<string, any> {
    return {
      id: (id: string) => toNumber(id) || null,
      category_id: (id: string) => Number(id) || null,
      title: (sValue: string) => new MarkdownIt().renderInline(sValue) || null,
      slug: [cleanStr],
      content: [cleanStr],
      preview_text: [cleanStr],
      preview_image: [cleanStr],
      published_start: [cleanStr],
      published_stop: [cleanStr],
    };
  }

  validation(): Record<string, any> {
    return {
      category_id: required.and(integer).and(min(1)),
      title: required.and(string),
    };
  }

  routes(): Record<string, any> {
    return {
      fetch: "blog.articles.show",
      create: "blog.articles.store",
      update: "blog.articles.update",
      delete: "blog.articles.destroy",
    };
  }
}

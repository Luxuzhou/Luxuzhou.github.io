import type { ArticleEntry } from "@/data/site";
import { articleContentBySlug } from "@/generated/articleContent";

export function loadArticleContent(article: ArticleEntry) {
  return articleContentBySlug[article.slug] ?? "";
}

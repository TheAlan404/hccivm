import { marked } from "marked";

export const markdownToHTML = (md: string) => {
    return marked.parse(md);
}

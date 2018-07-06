/* ============
 * MarkdownIt
 * ============
 *
 * Markdown parser done right. Fast and easy to extend.
 *
 * https://markdown-it.github.io
 */
import MarkdownIt from 'markdown-it';
import MarkdownItPrism from 'markdown-it-prism';
import MarkdownItEmoji from 'markdown-it-emoji';
import Vue from 'vue';

const options = {
  html: true,
  linkify: true,
  typographer: true,
};

const md = new MarkdownIt(options)
  .use(MarkdownItPrism)
  .use(MarkdownItEmoji);

// Bind MarkdownIt to Vue.
Vue.md = md;
Object.defineProperty(Vue.prototype, '$md', {
  get() {
    return md;
  },
});

import 'highlight.js/styles/github.css';
import 'github-markdown-css/github-markdown.css';
import marked, { Renderer } from 'marked';
import highlight from 'highlight.js';
import './markdown.scss';

function toMarkdown(source, options = {}) {
  const markedOptions = {
    langPrefix: 'hljs language-',
    renderer: new Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: code => highlight.highlightAuto(code).value,
  };

  return marked(source, Object.assign({}, markedOptions, options));
}

export default {
  name: 'Markdown',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    source: {
      type: String,
      default: '',
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  render(h) {
    const options = {
      class: {
        'markdown-body': true,
      },
      domProps: {
        innerHTML: toMarkdown(this.source, this.options),
      },
    };
    return h(this.tag, options);
  },
};

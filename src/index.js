import Markdown from './Markdown';

export default {
  install(Vue) {
    Vue.component(Markdown.name, Markdown);
  },
};

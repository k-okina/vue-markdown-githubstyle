# vue-markdown-githubstyle
## What is this
```
<Markdown :source="markdown記法で書かれたファイル"/>
```

このようにマークダウン記法で書かれたソースを渡すと、Githubのマークダウンのデザインでプレビューされる

## インストール方法
npm

```
$ npm install vue-markdown-githubstyle
```

yarn

```
$ yarn add vue-markdown-githubstyle
```

```
import Markdown from 'vue-markdown-githubstyle';

Vue.use(Markdown);
```

or

```
import Markdown from 'vue-markdown-githubstyle/Markdown';

const customName = 'GithubMarkdown';
Vue.component(customName, Markdown);
```

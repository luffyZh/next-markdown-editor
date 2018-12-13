import { Component } from 'react';
import SimpleMDE from 'simplemde';
import marked from 'marked';
import hljs from 'highlight.js';
import 'simplemde/dist/simplemde.min.css';
import 'highlight.js/styles/github.css';

class SimpleMDEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.smde = null;
  }

  componentDidMount() {
    // 编辑器内容点击不弹文字
    document.getElementById('markdownEditor')
      .parentNode // 获取编辑器container
      .addEventListener('click', e => e.stopPropagation());
    this.smde = new SimpleMDE({
      element: document.getElementById('markdownEditor').childElementCount,
      autofocus: true,
      autosave: true,
      initialValue: '',
      indentWithTabs: false,
      placeholder: '## 输入试题内容...',
      renderingConfig: {
        singleLineBreaks: false,
        codeSyntaxHighlighting: true,
      },
      insertTexts: {
        horizontalRule: ["", "\n\n-----\n\n"],
        image: ["![](http://", ")"],
        link: ["[", "](http://)"],
        table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
      },
      previewRender: function(plainText) {
        return marked(plainText, {
          renderer: new marked.Renderer(),
          gfm: true,
          pedantic: false,
          sanitize: false,
          tables: true,
          breaks: true,
          smartLists: true,
          smartypants: true,
          highlight: function (code) {
            return hljs.highlightAuto(code).value;
          }
        });
      },
      spellChecker: false
    });
    SimpleMDE.toggleSideBySide(this.smde);
  }

  render() {
    return (
      <div id='editorContaienr'>
        <textarea id='markdownEditor'></textarea>
      </div>
    );
  }
}

export default SimpleMDEditor;
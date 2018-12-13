import { Component } from 'react';
import PropTypes from 'prop-types';
import MarkDown from 'react-markdown';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const initialValue = `
  ## Next-Markdown-Editor  
  \`\`\`
    let a;
    a = 1;
  \`\`\`
  这是一个预览页的Demo  
  > var a = 1;
`;
class Markdown extends Component {
  static propTypes = {
    markdownValue: PropTypes.string
  }
  static defaultProps = {
    markdownValue: initialValue
  }
  constructor(props) {
    super(props);
    const { markdownValue } = props;
    this.state = { markdownValue }; 
  }

  render() {
    return (
      <div className='markdown-container'>
        <style jsx>{`
          .markdown-container {
            position: absolute;
            top: 0;
            width: 100%;
            padding: 10px;
            background: #fff;
            min-height: 100%;
            height: auto;
            max-width: 960px;
          }
        `}</style>
        <MarkDown 
          source={
            marked(this.state.markdownValue, {
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
            })
          }
          escapeHtml={false}
        />
      </div>
    );
  }
}

export default Markdown;
import { Fragment } from 'react';
import dynamic from 'next/dynamic';

const SimpleMDEditor = dynamic(import('./SimpleMde'), {
  ssr: false
});

const NormalEditor = () => (
  <Fragment>
    <style jsx>{`
      .editor-container {
        background-color: #fff;
        padding: 10px 20px;
      }
      h1 {
        text-align: center;
        color: #fff;
      }
    `}</style>
    <h1>普通Markdown编辑器</h1>
    <div className='editor-container'>
      <SimpleMDEditor />
    </div>
  </Fragment>
);

export default NormalEditor;
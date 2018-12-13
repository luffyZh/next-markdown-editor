import { Component } from 'react';
import dynamic from 'next/dynamic';
import { Input } from 'antd';

const SimpleMDEditor = dynamic(import('./SimpleMde'), {
  ssr: false
});

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className='edit-container'>
        <style jsx>{`
          .edit-container {
            position: absolute;
            display: flex:
            flex-direction: column;
            width: 100%;
            height: 100%;
            background-color: #fff;
          }
          .content-container {
            position: absolute;
            display: flex;
            width: 100%;
            top: 50px;
            bottom: 40px;
          }
          .editor-container {
            position: relative;
            width: 50%;
          }
          .markdown-container {
            box-sizing: content-box;
            width: 50%;
            background-color: #fff;
            padding: 10px;
            border: 1px solid #ddd;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
          }
          .foot-container {
            position: absolute;
            width: 100%;
            height: 40px;
            bottom: 0;
            display: flex;
            padding: 10px;
            background-color: #fff;
          }
        `}</style>
        <Input
          style={{ height: '50px', fontSize: '20px' }}
          placeholder='请输入试题标题...'
        />
        <div className='content-container'>
          <div className='editor-container'>
            <SimpleMDEditor />
          </div>
        </div>
        <div className='foot-container'>
          编辑页面底部内容
        </div>
      </div>
    );
  }
}

export default Edit;
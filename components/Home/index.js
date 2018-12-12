import { Button } from 'antd';
import Link from 'next/link';

const Home = () => (
  <div className='container'>
    <style>{`
      h1 {
        color: #fff;
        margin-bottom: 100px;
      }
      .container {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      .link-content {
        display: flex;
        justify-content: center;
      }
      .link-container {
        width: 30%;
      }
    `}</style>
    <h1>Next-Markdown-Editor</h1>
    <div className='link-content'>
      <div className='link-container'>
        <Link href='/normal'>
          <Button size='large' type='default'>普通编辑器</Button>
        </Link>
      </div>
      <div className='link-container'>
        <Link href='/edit'>
          <Button size='large' type='default'>全屏编辑器</Button>
        </Link>
      </div>
      <div className='link-container'>
        <Link href='/preview'>
          <Button size='large' type='default'>预览Markdown</Button>
        </Link>
      </div>
    </div>
  </div>
);
export default Home;

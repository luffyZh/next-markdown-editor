import { Fragment } from 'react';
import PropTypes from 'prop-types';
import IfComp from 'if-comp';
import _ from 'lodash';
import Header from './Header';

const Layout = ({ pathname, children }) => (
  <Fragment>
    <style jsx>{`
      .content-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 70px 20px 20px 20px;
        padding: 10px 20px;
        color: #fff;
        min-height: 600px;
      }
    `}</style>
    <IfComp
      expression={_.includes(pathname, 'preview')}
      trueComp={
        <Fragment>
          <Header title='Next-Markdown-Editor' />
          <div className='content-container'>
            {children}
          </div>
        </Fragment>
      }
      falseComp={
        <div className='content-container'>
          {children}
        </div>
      }
    />
  </Fragment>
);

export default Layout;

Layout.propTypes = {
  pathname: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};



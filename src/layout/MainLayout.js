import React from 'react';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import {Link} from 'react-router-dom';
import 'prop-types';
import './style.less';

const MainLayout = ({ children }) => {

  return (
    <div className="pageWrap">
      <header className="header ant-row clearfix" id="header">
        <div className="pull-right mr10">
        </div>
      </header>
      <div className="ant-row mainWrapper">
        <div className="ant-col-xs-4 ant-col-sm-4 ant-col-md-4 ant-col-lg-3">
          <div className="logoArea">
            <Link id="logo" to="/">
              <img alt="logo" src="../static/images/logo.png" />
            </Link>
          </div>

        </div>
        <div className="mainContainer ant-col-xs-20 ant-col-sm-20 ant-col-md-20 ant-col-lg-21">
          {children}
        </div>
      </div>
    </div>
  )
}

export default MainLayout;

import React from 'react';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import { Link } from 'react-router';

import './style.less';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MainMenu extends React.Component{
  handleClick (e) {
    console.log('click ', e);
  }
  render(){
    return(
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="clock-circle-o" /><span>实时监控</span></span>}>
          <Menu.Item key="1">气象信息</Menu.Item>
          <Menu.Item key="2">点雨量</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="cloud-o" /><span>预警服务</span></span>}>
          <Menu.Item key="1">水库水位</Menu.Item>
          <Menu.Item key="2">水库泄洪</Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}

const App = ({ children }) => {

  return (
    <div className="pageWrap">
      <header className="header ant-row clearfix" id="header">
        <div className="logoArea">
          <Link id="logo" to="/">
            宁波市防汛防旱指挥平台
            <img alt="logo" src="../static/images/logo.png" />
          </Link>
        </div>
        <div className="fr headerRight">

        </div>

      </header>
      <div className="ant-row mainWrapper">
        <aside className="mainMenu">
          <MainMenu />
        </aside>
        <div className="mainContainer ant-col-xs-20 ant-col-sm-20 ant-col-md-20 ant-col-lg-21">
          {children}
        </div>
      </div>
    </div>
  )
}

export default App;

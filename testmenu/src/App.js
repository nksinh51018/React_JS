import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import {
  MenuFoldOutlined,
  PieChartOutlined, DesktopOutlined, ContainerOutlined, MailOutlined, AppstoreOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout; const { SubMenu } = Menu;
class App extends React.Component {
  state = {
    collapsed: false,
  };

  height = window.innerHeight;

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout >
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{height: this.height}}>
          <div className="logo" style={{ margin: 10 }} >
            <img src="https://www.sapo.vn/Themes/Portal/Default/StylesV2/images/logo/Sapo-logo.svg?v=202009161225" alt='sapo' style={{ width: 50, backgroundSize: 'cover' }} />
          </div>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
          </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
          </Menu.Item>
            <Menu.Item key="3" icon={<ContainerOutlined />}>
              Option 3
          </Menu.Item>
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, backgroundColor: '#fff' }}>
            {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })} */}
            <MenuFoldOutlined className='trigger' onClick={this.toggle} style={{ margin: 10 }} />
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
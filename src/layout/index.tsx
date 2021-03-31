import { Menu, Layout } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import React from 'react';
import { menuConfig, getSubMenuOnlyKeyByPath } from '@/router/index';

import styles from './index.module.scss';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const RecursiveMenu = (menuConfig: any, navigate: any) => {
  return (
    <>
      {menuConfig.map((item: any) => {
        if (item.routes) {
          return (
            <SubMenu key={item.subMenuOnlyKey} icon={<VideoCameraOutlined />} title={item.name}>
              {RecursiveMenu(item.routes, navigate)}
            </SubMenu>
          );
        }
        return (
          <Menu.Item
            key={item.path}
            icon={<UserOutlined />}
            onClick={() => {
              navigate(item.path);
            }}
          >
            {item.name}
          </Menu.Item>
        );
      })}
    </>
  );
};

const PageLayout: React.FC<{}> = (props) => {
  let navigate = useNavigate();
  let { pathname } = useLocation();

  // console.log(pathname, menuConfig, getSubMenuOnlyKeyByPath(pathname));

  return (
    <>
      <Layout className={styles.container}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className={styles['logo']} />
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[pathname]}
            // openKeys={getSubMenuOnlyKeyByPath(pathname)}
            defaultSelectedKeys={[pathname]}
            defaultOpenKeys={getSubMenuOnlyKeyByPath(pathname)}
          >
            {RecursiveMenu(menuConfig, navigate)}
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles['site-layout-sub-header-background']} style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div className={styles['site-layout-background']} style={{ padding: 24, minHeight: 360 }}>
              {props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default PageLayout;

export const withPageLayout = (WrapComponent: any) => (props: any) => {
  return (
    <PageLayout>
      <WrapComponent {...props} />
    </PageLayout>
  );
};

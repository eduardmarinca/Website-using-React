import React from "react";
import "./App.css";
import MainSider from './components/MainSider'
import HeaderTabs from './components/HeaderTabs'
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

import { Layout, Menu} from "antd";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const App = () => {
  // const [collapsed, setCollapsed] = useState(false);

  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };

  return (
    <div className="App">
      <Layout style={{ height: "100vh" }}>
        <Layout>
          <MainSider />
          <Layout style={{ backgroundColor: "#323232" }}>
            <Header style={{ backgroundColor: "#323232" }}>
              <div><HeaderTabs /><div style={{color:'white'}}>hello</div></div>
            </Header>
            <Content
              style={{
                minHeight: 280,
                border: "solid white 5px",
                borderTopLeftRadius: "25px",
                padding: "10px",
                backgroundColor:'white'
              }}
            >
              <Layout>
                <Sider>
                  <Layout style={{ backgroundColor: 'white' }}>
                    Development
                  </Layout>
                  <Menu
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    mode="inline"
                    theme="dark"
                    // inlineCollapsed={collapsed}
                  >
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                      Betty Ice
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                      Hotelurile Rin
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ContainerOutlined />}>
                      Food Panda
                    </Menu.Item>
                    <SubMenu
                      key="sub1"
                      icon={<MailOutlined />}
                      title="Pepsi Cola"
                    >
                      <Menu.Item key="5">Campanie Paste</Menu.Item>
                      <Menu.Item key="6">Website concert Andra</Menu.Item>
                      <Menu.Item key="7">Newslettere castigatori</Menu.Item>
                    </SubMenu>
                  </Menu>
                  <Layout style={{ backgroundColor: 'white' }}>
                  Design team
                </Layout>
                </Sider>
                <Layout style={{ backgroundColor: 'white' }}>
                Website Concert Andra
              </Layout>
              </Layout>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;

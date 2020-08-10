import React from 'react'

const Header = () => {
    return (
        <div>
        <Layout style={{ height: "100vh" }}>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <div className="logo">
              <img
                src={logo1}
                alt="poza"
                style={{
                  height: "60px",
                }}
              />
              <img
                src={logo2}
                alt="poza"
                style={{
                  height: "15px",
                  marginTop: "10px",
                }}
              />
            </div>
            <Menu mode="inline" defaultOpenKeys={["sub1", "sub2"]}>
              <Menu.Item key="1">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "86px",
                  }}
                >
                  <img src={icon0} alt="" style={{ height: "14px" }} />
                  Dashboard
                </div>
              </Menu.Item>
              <Menu.Item key="2">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "72px",
                  }}
                >
                  <img src={icon1} alt="" style={{ height: "14px" }} />
                  Projects
                </div>
              </Menu.Item>
              <Menu.Item key="3">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "58px",
                  }}
                >
                  <img
                    src={icon2}
                    alt=""
                    style={{ height: "14px", width: "14px" }}
                  />
                  Tasks
                </div>
              </Menu.Item>
              <Menu.Item key="4">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "65px",
                  }}
                >
                  <img
                    src={icon3}
                    alt=""
                    style={{ height: "14px", width: "14px" }}
                  />
                  People
                </div>
              </Menu.Item>
              <Menu.Item key="5">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "55px",
                  }}
                >
                  <img
                    src={icon4}
                    alt=""
                    style={{ height: "12px", width: "16px" }}
                  />
                  Drive
                </div>
              </Menu.Item>
              <SubMenu key="sub1" style={{ marginTop: "15px" }} title="Tools">
                <Menu.Item key="6">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "55px",
                    }}
                  >
                    <img
                      src={icon5}
                      alt=""
                      style={{ height: "12px", width: "16px" }}
                    />
                    CRM
                  </div>
                </Menu.Item>
                <Menu.Item key="7">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "80px",
                    }}
                  >
                    <img
                      src={icon6}
                      alt=""
                      style={{ height: "12px", width: "16px" }}
                    />
                    Feedback
                  </div>
                </Menu.Item>
                <Menu.Item key="8">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "72px",
                    }}
                  >
                    <img
                      src={icon7}
                      alt=""
                      style={{ height: "12px", width: "16px" }}
                    />
                    Invoices
                  </div>
                </Menu.Item>
                <Menu.Item key="9">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "80px",
                    }}
                  >
                    <img
                      src={icon8}
                      alt=""
                      style={{ height: "12px", width: "16px" }}
                    />
                    Raporting
                  </div>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" style={{ marginTop: "15px" }} title="Apps">
                <Menu.Item key="10">
                  <div className="app1">
                    <img src={app1} alt="" />
                    Start Zoom Call
                  </div>
                </Menu.Item>
                <Menu.Item key="11">
                  <div className="app2">
                    <img src={app2} alt="" />
                    Request to pay
                  </div>
                </Menu.Item>
                <Menu.Item key="12">
                  <div className="app3">
                    <img src={app3} alt="" className="app3-img" />
                    Wetransfer
                  </div>
                </Menu.Item>
              </SubMenu>
            </Menu>
            <img
              src={logo3}
              alt="poza"
              style={{
                height: "50px",
                display: "flex",
                alignItems: "start",
                marginLeft: "20px",
                padding: "15px 0",
                marginTop: "20px",
              }}
            />
          </Sider>
          <Layout style={{ backgroundColor: "#323232" }}>
            <Header style={{ backgroundColor: "#323232" }}>hello</Header>
            <Content
              style={{
                minHeight: 280,
                backgroundColor: "gray",
                border: "solid white 5px",
                borderTopLeftRadius: "25px",
                padding: "10px",
              }}
            >
              <Layout>
                <Sider>
                  <Layout>hey</Layout>
                  <Menu
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
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
                    <SubMenu
                      key="sub1"
                      icon={<MailOutlined />}
                      title="Navigation One"
                    >
                      <Menu.Item key="5">Option 5</Menu.Item>
                      <Menu.Item key="6">Option 6</Menu.Item>
                      <Menu.Item key="7">Option 7</Menu.Item>
                      <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="sub2"
                      icon={<AppstoreOutlined />}
                      title="Navigation Two"
                    >
                      <Menu.Item key="9">Option 9</Menu.Item>
                      <Menu.Item key="10">Option 10</Menu.Item>
                      <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                      </SubMenu>
                    </SubMenu>
                  </Menu>
                </Sider>
                Content
              </Layout>
            </Content>
          </Layout>
        </Layout>
      </Layout>
        </div>
    )
}

export default Header

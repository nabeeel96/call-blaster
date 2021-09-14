import { Layout, Menu, Row, Col } from "antd";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { logoutUser } from "../Actions/UserAction";
import { Link } from "react-router-dom";
// import logo from "../Assets/LOGO.png"
import React from "react";

const { Header } = Layout;
const { SubMenu } = Menu;
const HeaderComponent = ({ setToggled, User, isToggled }) => {
  const dispatch = useDispatch();

  return (
    <Header
      className="site-layout-sub-header-background"
      style={{ padding: 0 }}
    >
      <Menu selectable={false} mode="horizontal" >
        {!User.loggedIn && (
          <Menu.Item key="logoMenu">
            <Link to="/">
              {/* <img src={logo}  alt="App logo" /> */}
              <h1 style={{ textAlign: "center" }}>Call-Blaster</h1>
            </Link>
          </Menu.Item>
        )}
        {User.loggedIn && (
          <Row>
            <Col span={4}>
              <Menu.Item
                key="toggleMenu"
                icon={isToggled ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() =>
                  isToggled ? setToggled(false) : setToggled(true)
                }
              />
            </Col>
            <Col span={20} style={{display:'flex',justifyContent:'flex-end'}}>
              <SubMenu
                
                title={localStorage.getItem("username")}
                icon={<UserSwitchOutlined />}
              >
                <Menu.Item
                  onClick={() => dispatch(logoutUser())}
                  icon={<LogoutOutlined />}
                  key="logoutMenu"
                >
                  Logout
                </Menu.Item>
              </SubMenu>
            </Col>
          </Row>
        )}
      </Menu>
    </Header>
  );
};

export default HeaderComponent;

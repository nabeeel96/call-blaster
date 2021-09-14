import {
    AuditOutlined,
    BarChartOutlined,
    BoxPlotOutlined, CalendarOutlined,
    CodepenCircleOutlined, CodeSandboxSquareFilled,
    DashboardOutlined, DiffOutlined,
    FileTextOutlined, FormatPainterOutlined, FundOutlined,
    GoldOutlined, HddOutlined, Html5Outlined, LayoutOutlined, LockOutlined,
    LoginOutlined, PauseCircleOutlined,
    SettingOutlined, SnippetsOutlined,
    SoundOutlined, StockOutlined,
    UnlockOutlined,
    UserAddOutlined,
    UsergroupAddOutlined,
} from "@ant-design/icons";
import {Link, useLocation} from "react-router-dom";
import { Menu} from "antd"
import { useEffect, useState } from "react"
import Sider from "antd/es/layout/Sider";
import logo from "../Assets/LOGO.png";
import small from "../Assets/favicon.png";

const { SubMenu } = Menu
const rootSubmenuKeys = ['sub1', 'sub2'];

const MenuComponent = ({isToggled}) => {

    const [openKeys, setOpenKeys] = useState([]);
    const [selectedKey, setSelectedKey] = useState("/")
    let location = useLocation()

    useEffect(() => {
        setSelectedKey(location.pathname)
    }, [location])

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <Sider collapsed={isToggled} width={320} style={{overflow: 'hidden'}} >
            
            <Menu style={{height:'100%' }} mode="vertical"  defaultSelectedKeys={[selectedKey] }
            
                  openKeys={openKeys} onOpenChange={onOpenChange}
            >
                <div className="logo" style={{ textAlign: 'center', height:'45px', marginBottom:'40px' }}>
                    <Link to="/">
                        {/* style={{width: isToggled ? "" : "110px"}} */}
                        <img src={isToggled ? small : logo} alt="App logo" style={{width:'auto', height:'60px'}} />
                    </Link>
            </div>
                <Menu.Item key="/" icon={<DashboardOutlined />}>
                    <Link to="/">
                        Dashboard
                    </Link>
                </Menu.Item>
                <Menu.Item key="/LC" icon={<UserAddOutlined/>}>
                    <Link to="/launch-campaign">Launch Campaign</Link>
                </Menu.Item>
                <Menu.Item key="/RDCL" icon={<LockOutlined />}>
                    <Link to={"/reject-delivery-campaign"}>Rejected Delivery Campaign List</Link>
                </Menu.Item>
                <Menu.Item key="/RD1CL" icon={<UsergroupAddOutlined/>}>
                    <Link to="/Menu3">Rejected Delivery 01 Campaign List</Link>
                </Menu.Item>
                <Menu.Item key="/RD2CL" icon={<GoldOutlined />}>
                    <Link to="/Menu4">Rejected Delivery 02 Campaign List</Link>
                </Menu.Item>
                <Menu.Item key="/RPDL" icon={<BoxPlotOutlined />}>
                    <Link to="/Menu5">Repeat Delivery Campaign List</Link>
                </Menu.Item>
            
                <Menu.Item key="/EPCL" icon={<CodepenCircleOutlined />}>
                    <Link to={"/Menu6"}>Easy Paisa Campaign List</Link>
                </Menu.Item>
                <Menu.Item key="/Menu61" icon={<CodepenCircleOutlined />}>
                    <Link to={"/Menu7"}>Units</Link>
                </Menu.Item>
                <Menu.Item key="/Menu8" icon={<CodepenCircleOutlined />}>
                    <Link to={"/Menu8"}>Menu6</Link>
                </Menu.Item>
                <Menu.Item key="/Menu6" icon={<CodepenCircleOutlined />}>
                    <Link to={"/Menu6"}>Menu6</Link>
                </Menu.Item>
                <SubMenu title="Menu7" key="sub2" icon={<FileTextOutlined />}>
                   
                    <Menu.Item key="/Menu9" icon={<DiffOutlined/>}>
                        <Link to={"/Menu9"}>Menu9</Link>
                    </Menu.Item>
                    <Menu.Item key="/Menu10" icon={<FormatPainterOutlined />}>
                        <Link to="/Menu10">Menu10</Link>
                    </Menu.Item>
                    </SubMenu>
            </Menu>
        </Sider>
    )
}

export default MenuComponent
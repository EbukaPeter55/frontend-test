import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";

const { Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

export const items = [
    getItem('Dashboard', '1', <PieChartOutlined />),
    getItem('System users', '2', <DesktopOutlined />),
    getItem('Institutions', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Approvals', 'sub2', <TeamOutlined />,
        [getItem('Team 1', '6'),
            getItem('Team 2', '7')]),
    getItem('Audit Trails', '9', <FileOutlined />),
    getItem('Logout', '8', <FileOutlined />),

];

const SideNavComponent = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
    )
}

export default SideNavComponent;

import React from 'react';
import {
    Breadcrumb,
    Layout,
    Space,
    Button,
    Badge,
    Dropdown,
    Avatar,
    type MenuProps,
} from 'antd';
import "../index.css"
import { BellOutlined, UserOutlined, RobotOutlined } from '@ant-design/icons';
import "../styles/header.css";

const { Header } = Layout;

const userMenu: MenuProps['items'] = [
    { key: 'profile', label: 'Profile' },
    { key: 'settings', label: 'Settings' },
    { type: 'divider' },
    { key: 'logout', label: 'Log out' },
];

export default function HeaderBar() {
    return (
        <Header className='headerOutlineSection'>
            <Breadcrumb
                items={[
                    { title: <span className='clickableCursor'>Dashboard</span> },
                    { title: <span className='clickableCursor'>Dashboard</span> },
                    { title: <span className='clickableCursor managementBreadCrumb' >Management system</span> },
                ]}
            />

            <Space size="middle" align="center">
                <Button type='link' className='whatsNewContainer'>
                    <span className='clickableCursor whatsNew'>What's new?</span>
                </Button>
                <Avatar size="small" className='robotOutlined' icon={<RobotOutlined />} />
                <Badge dot className='bellIcon'>
                    <BellOutlined className="bellIconSubSection" />
                </Badge>
                <Dropdown menu={{ items: userMenu }} trigger={['click']}>
                    <Space className='clickableCursor'>
                        <span>John Doe</span>
                        <Avatar size="small" icon={<UserOutlined />} />
                    </Space>
                </Dropdown>
            </Space>
        </Header>
    );
}

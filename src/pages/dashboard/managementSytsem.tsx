import React from 'react';
import { Input, Row, Col, Button, Typography, Tooltip, Segmented, Space } from 'antd';
import QuickApps from '../../components/quickApps';
import ModulesGrid from '../../components/modulesGrid';
import "../../styles/managementSystem.css";
import { QuestionCircleOutlined, SearchOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import "../../index.css"

const { Text } = Typography;

export default function ManagementSystem() {
    return (
        <div className='managementOuterContainer'>
            <div className='appLinksAndQuickAppsContainer'>
                <div className='appLinks'>
                    <div className="appLinksBarMainContainer">
                        <Row align="middle" justify={"start"}  >
                            {/* Left side */}
                            <Col>
                                <Text strong className="appLinksLabel">
                                    App links{" "}
                                    <Tooltip title="Quick access to apps">
                                        <QuestionCircleOutlined className='questionCircleOutlined' />
                                    </Tooltip>
                                </Text>
                            </Col>

                            {/* Right side */}
                            <Col>
                                <Segmented size="middle" options={["All", "Favorites", "Recently accessed"]} defaultValue="All" className="appLinksSegmented" />
                            </Col>
                        </Row>
                        <Space>
                            <Input placeholder="Search" allowClear prefix={<SearchOutlined style={{ color: "rgba(255,255,255,0.65)" }} />} className="searchInput" />
                            <LeftOutlined className='leftIcon' />
                            <RightOutlined className='clickableCursor' />
                        </Space>
                    </div>
                </div>
                <QuickApps />
            </div>
            <ModulesGrid />
        </div>
    );
}

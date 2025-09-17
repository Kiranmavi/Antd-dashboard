import React from "react";
import { Col, Card, Avatar } from "antd";
import {
    WindowsOutlined,
    TeamOutlined,
    FileExcelOutlined,
    SlackOutlined,
    AppstoreOutlined,
} from "@ant-design/icons";
import "../styles/quickApps.css"


const APPS = [
    { label: "Terra", icon: <WindowsOutlined /> },
    { label: "IHS Markit", icon: <TeamOutlined /> },
    { label: "ProActSafety", icon: <FileExcelOutlined /> },
    { label: "Synergi Life", icon: <SlackOutlined /> },
    { label: "Copilot", icon: <AppstoreOutlined /> },
    { label: "Teams", icon: <WindowsOutlined /> },
    { label: "Excel", icon: <FileExcelOutlined /> },
    { label: "Slack", icon: <SlackOutlined /> },
    { label: "Notion", icon: <AppstoreOutlined /> },
    { label: "Asana", icon: <TeamOutlined /> },
    { label: "Sphera", icon: <SlackOutlined /> },
    { label: "SAP Analytics", icon: <AppstoreOutlined /> },
    { label: "Qlik Sense", icon: <AppstoreOutlined /> },
    { label: "Domo", icon: <TeamOutlined /> },
    { label: "Sisense", icon: <SlackOutlined /> },
    { label: "EHS Insight", icon: <AppstoreOutlined /> },

];

export default function QuickApps() {
    return (
        <div className="quickAppsMainContainer">
            <div className="quickAppsInnerContainer">
                {APPS.map((app) => (
                    <Col key={app.label}>
                        <Card key={app.label} hoverable size="small" className="quickappsCard">
                            <Avatar shape="square" size="large" className="quickappsAvatar" >{app.label[0]}</Avatar>
                            <div className="quickappsLabel">{app.label}</div>
                        </Card>
                    </Col>
                ))}
            </div>
        </div>
    );
}

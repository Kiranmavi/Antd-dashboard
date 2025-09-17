import React from "react";
import { Row, Col, Card, Input, Space, Button } from "antd";
import { SearchOutlined, FilterOutlined, SortAscendingOutlined } from "@ant-design/icons";
import "../styles/modulesGrid.css";
import LogoIcon from "./logoIcon";

const MODULES = [
    {
        title: "Leadership and Commitment",
        files: 45,
        updated: "23 Dec 2024 12:32:00 PM",
        by: "John Doe",
    },
    {
        title: "Organisational Controls",
        files: 30,
        updated: "20 Dec 2024 09:15:00 AM",
        by: "Jane Smith",
    },
    {
        title: "Performance Improvement",
        files: 50,
        updated: "18 Dec 2024 02:45:00 PM",
        by: "Alice Johnson",
    },
    {
        title: "Assurance and Compliance",
        files: 25,
        updated: "22 Dec 2024 03:00:00 PM",
        by: "Bob Brown",
    },
    {
        title: "Health, Safety and Environment",
        files: 18,
        updated: "21 Dec 2024 11:10:00 AM",
        by: "Emma Wilson",
    },
    {
        title: "Emergency Response and Security",
        files: 40,
        updated: "19 Dec 2024 08:20:00 AM",
        by: "Michael Lee",
    },
    {
        title: "Marketing",
        files: 22,
        updated: "17 Dec 2024 04:50:00 PM",
        by: "Sophia Martinez",
    },
    {
        title: "Supply Chain and Procurement",
        files: 22,
        updated: "17 Dec 2024 04:50:00 PM",
        by: "Sophia Martinez",
    },
    {
        title: "Finance",
        files: 22,
        updated: "17 Dec 2024 04:50:00 PM",
        by: "Sophia Martinez",
    },
    {
        title: "IT",
        files: 22,
        updated: "17 Dec 2024 04:50:00 PM",
        by: "Sophia Martinez",
    },
];

export default function ModulesGrid() {
    return (
        <div className="modulesGridOuterContainer">
            <div className="modulesHeaderSection">
                <div className="managementHeaderContent">Management System</div>
                <div className="searchbarAndSortingSection">
                    <Space>
                        <Input placeholder="Search" allowClear prefix={<SearchOutlined />} className="searchInput"
                        />

                        <Button
                            icon={<FilterOutlined />}
                            className="searchbar-btn"
                        />
                        <Button
                            icon={<SortAscendingOutlined />}
                            className="searchbar-btn"
                        />
                    </Space>
                </div>
            </div>
            <Row gutter={[16, 16]}>
                {MODULES.map((m) => (
                    <Col key={m.title} xs={24} sm={12} md={12} lg={8} xl={8}>
                        <Card
                            hoverable
                            className="moduleCard"
                            title={
                                <div className="moduleCardHeader">
                                    {/* <LogoIcon className="module-card-icon" /> */}
                                    <LogoIcon size={30} />
                                    <span>{m.title}</span>
                                </div>
                            }
                        >
                            <div className="moduleRow">
                                <span className="moduleLabel">No. of files</span>
                                <span className="moduleValue">{m.files} files</span>
                            </div>
                            <div className="moduleRow">
                                <span className="moduleLabel">Last updated</span>
                                <span className="moduleValue">{m.updated}</span>
                            </div>
                            <div className="moduleRow">
                                <span className="moduleLabel">Updated by</span>
                                <span className="moduleValue">{m.by}</span>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    );
}

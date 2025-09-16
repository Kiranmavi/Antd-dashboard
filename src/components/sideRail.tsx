import React from 'react';
import { Layout, Tooltip } from 'antd';
import {
  AppstoreFilled,
  HomeOutlined,
  FolderOpenOutlined,
  BarChartOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  ArrowLeftOutlined,
} from '@ant-design/icons';
import "../styles/sideRail.css"

const { Sider } = Layout;

export default function SideRail() {
  return (
    <Sider
      className='slider'
    >
      <div className='sliderIconsSection'>
        <div className='topIconsSection'>
          <div className='appIcon'>
            <AppstoreFilled className='appIconSubPart' />
          </div>
          <Tooltip title="Files" placement="right">
            <FolderOpenOutlined className='folderIcon' />
          </Tooltip>
        </div>

        <div className='bottomIconsSection'>
          <Tooltip title="Help" placement="right">
            <QuestionCircleOutlined className='bottomSubIconSection' />
          </Tooltip>
          <Tooltip title="Settings" placement="right">
            <SettingOutlined className='bottomSubIconSection' />
          </Tooltip>
          <Tooltip title="Back" placement="right">
            <ArrowLeftOutlined className='bottomSubIconSection bottomBackIcon' />
          </Tooltip>
        </div>
      </div>
    </Sider>
  );
}

import React from 'react';
import { Layout } from 'antd';
import SideRail from "./components/sideRail";
import Header from "../src/components/header";
import ManagementSystem from "../src/pages/dashboard/managementSytsem";
import Footer from "../src/components/footer"
import './App.css';

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideRail />
      <Layout className='contentLayout'>
        <Header />
        <Content>
          <ManagementSystem />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
}

export default App;

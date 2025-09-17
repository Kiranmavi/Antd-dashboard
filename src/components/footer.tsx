import React from 'react';
import { Layout } from 'antd';
import "../styles/footer.css";

const { Footer } = Layout;

export default function AppFooter() {
    return (
        <Footer className='footerMainContainer'>
            <div className='footerContent'>
                <span>Version 0.1.0</span>
                <span>© 2025 Powered by Radax &nbsp; <strong>dax group</strong></span>
            </div>
        </Footer>
    );
}

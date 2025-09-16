import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export default function AppFooter() {
    return (
        <Footer
            style={{
                background: 'transparent',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                padding: '10px 24px',
                color: 'rgba(255,255,255,0.75)',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: 12,
                }}
            >
                <span>Version 0.1.0</span>
                <span>© 2025 Powered by Radax &nbsp; <strong>dax group</strong></span>
            </div>
        </Footer>
    );
}

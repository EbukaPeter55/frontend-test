import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNavComponent from './components/SideNav.component.jsx';
import CardContent from './components/CardContent';
import { DashboardProvider } from './context/DashboardContext';

const { Header, Content, Footer } = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <DashboardProvider>
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <SideNavComponent />
                    <Layout>
                        <Header style={{ padding: 0, background: colorBgContainer }} />
                        <Content style={{ margin: '0 16px' }}>
                            <div
                                style={{
                                    padding: 24,
                                    minHeight: 360,
                                    background: colorBgContainer,
                                    borderRadius: borderRadiusLG,
                                }}
                            >
                                <Routes>
                                    <Route path="/" element={<CardContent />} />
                                </Routes>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            CAMP © {new Date().getFullYear()}
                        </Footer>
                    </Layout>
                </Layout>
            </Router>
        </DashboardProvider>
    );
};

export default App;


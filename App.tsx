
import React, { useState, useCallback } from 'react';
import Login from './pages/Login';
import Overview from './pages/Overview';
import Pathera from './pages/Pathera';
import Khadai from './pages/Khadai';
import { Tab } from './types';
import Layout from './components/layout/Layout';

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeTab, setActiveTab] = useState<Tab>(Tab.Overview);

    const handleLogin = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const handleLogout = useCallback(() => {
        setIsLoggedIn(false);
        setActiveTab(Tab.Overview);
    }, []);

    if (!isLoggedIn) {
        return <Login onLogin={handleLogin} />;
    }

    const renderContent = () => {
        switch (activeTab) {
            case Tab.Overview:
                return <Overview />;
            case Tab.Pathera:
                return <Pathera />;
            case Tab.Khadai:
                return <Khadai />;
            default:
                return <Overview />;
        }
    };

    return (
        <Layout
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onLogout={handleLogout}
        >
            {renderContent()}
        </Layout>
    );
};

export default App;

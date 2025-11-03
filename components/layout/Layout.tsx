
import React from 'react';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import Header from './Header';
import { Tab } from '../../types';

interface LayoutProps {
    children: React.ReactNode;
    activeTab: Tab;
    setActiveTab: (tab: Tab) => void;
    onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab, onLogout }) => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 text-gray-800">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="flex-1 flex flex-col md:ml-64 pb-16 md:pb-0">
                <Header onLogout={onLogout} />
                <main className="flex-1 p-4 sm:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;

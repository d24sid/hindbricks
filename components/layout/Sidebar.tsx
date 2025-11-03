
import React from 'react';
import { Tab } from '../../types';
import { BrickIcon, OverviewIcon, PatheraIcon, KhadaiIcon } from '../ui/Icons';

interface SidebarProps {
    activeTab: Tab;
    setActiveTab: (tab: Tab) => void;
}

const navItems = [
    { tab: Tab.Overview, icon: OverviewIcon, label: 'Overview' },
    { tab: Tab.Pathera, icon: PatheraIcon, label: 'Pathera' },
    { tab: Tab.Khadai, icon: KhadaiIcon, label: 'Khadai' },
];

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
    return (
        <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 fixed h-full z-40">
            <div className="flex items-center justify-center h-16 border-b border-gray-200">
                 <BrickIcon className="h-8 w-8 text-blue-600" />
                <h1 className="ml-2 text-2xl font-bold text-gray-800">BrickWorks</h1>
            </div>
            <nav className="flex-1 px-4 py-4 space-y-2">
                {navItems.map((item) => {
                    const isActive = activeTab === item.tab;
                    const Icon = item.icon;
                    return (
                        <button
                            key={item.tab}
                            onClick={() => setActiveTab(item.tab)}
                            className={`flex items-center w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                                isActive
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                        >
                            <Icon className="h-5 w-5 mr-3" />
                            <span>{item.label}</span>
                        </button>
                    );
                })}
            </nav>
        </aside>
    );
};

export default Sidebar;

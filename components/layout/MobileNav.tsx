
import React from 'react';
import { Tab } from '../../types';
import { OverviewIcon, PatheraIcon, KhadaiIcon } from '../ui/Icons';

interface MobileNavProps {
    activeTab: Tab;
    setActiveTab: (tab: Tab) => void;
}

const navItems = [
    { tab: Tab.Overview, icon: OverviewIcon, label: 'Overview' },
    { tab: Tab.Pathera, icon: PatheraIcon, label: 'Pathera' },
    { tab: Tab.Khadai, icon: KhadaiIcon, label: 'Khadai' },
];

const MobileNav: React.FC<MobileNavProps> = ({ activeTab, setActiveTab }) => {
    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 flex justify-around">
            {navItems.map((item) => {
                const isActive = activeTab === item.tab;
                const Icon = item.icon;
                return (
                    <button
                        key={item.tab}
                        onClick={() => setActiveTab(item.tab)}
                        className={`flex flex-col items-center justify-center w-full pt-2 pb-1 text-sm font-medium transition-colors ${
                            isActive ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'
                        }`}
                    >
                        <Icon className="h-6 w-6 mb-1" />
                        <span>{item.label}</span>
                         {isActive && <div className="w-8 h-0.5 bg-blue-600 mt-1 rounded-full"></div>}
                    </button>
                );
            })}
        </nav>
    );
};

export default MobileNav;

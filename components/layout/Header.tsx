
import React from 'react';
import { LogoutIcon } from '../ui/Icons';
import Button from '../ui/Button';

interface HeaderProps {
    onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-end h-16">
                    <div className="flex items-center space-x-4">
                         <div>
                            <label htmlFor="season" className="sr-only">Select Season</label>
                            <select
                                id="season"
                                name="season"
                                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                defaultValue="2024-2025"
                            >
                                <option>Jul 2024 – Jun 2025</option>
                                <option>Jul 2023 – Jun 2024</option>
                                <option>Jul 2022 – Jun 2023</option>
                            </select>
                        </div>

                        <div className="flex items-center">
                            <img
                                className="h-8 w-8 rounded-full"
                                src="https://picsum.photos/100/100"
                                alt="User avatar"
                            />
                            <span className="ml-3 text-sm font-medium text-gray-700 hidden sm:block">Admin User</span>
                        </div>

                        <Button variant="ghost" size="sm" onClick={onLogout} aria-label="Logout">
                            <LogoutIcon className="h-5 w-5 text-gray-500" />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

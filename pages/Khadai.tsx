import React from 'react';
import { khadaiData } from '../constants';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Khadai: React.FC = () => {
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Total'];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <h2 className="text-2xl font-bold text-gray-800">Khadai Management</h2>
                <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium p-3 bg-white border border-gray-200 rounded-lg shadow-sm">Khadai/Brick: <strong>₹200</strong></span>
                </div>
            </div>
            
            {/* Filters */}
            <Card>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center">
                     <div className="relative">
                        <input
                            type="text"
                            placeholder="Search by Name/ID..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                         <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <input
                        type="date"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <Button>Apply Filters</Button>
                </div>
            </Card>

            {/* Khadai Table */}
            <Card className="overflow-x-auto">
                 <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-50">
                        <tr>
                            <th rowSpan={2} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider align-bottom">
                                <div>Name</div>
                                <div className="font-normal">(ID / Total Bricks)</div>
                            </th>
                             <th colSpan={8} className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-l border-r">Current Week Bricks</th>
                            <th rowSpan={2} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider align-bottom">Khadai Amt.</th>
                            <th rowSpan={2} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider align-bottom">Deposit</th>
                            <th rowSpan={2} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider align-bottom">Total Pay</th>
                            <th rowSpan={2} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider align-bottom">Actions</th>
                        </tr>
                        <tr>
                            {weekDays.map(day => <th key={day} className="px-2 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-l">{day}</th>)}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {khadaiData.map((k) => {
                            const totalPayment = k.khadaiAmount - k.deposit;
                            return (
                                <tr key={k.id}>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <div className="font-medium text-gray-900">{k.name}</div>
                                        <div className="text-gray-500">{k.id} ({k.totalBricks.toLocaleString()})</div>
                                    </td>
                                    {k.weeklyBricks.map((bricks, i) => (
                                        <td key={i} className={`px-2 py-4 whitespace-nowrap text-center ${i === 7 ? 'font-bold bg-gray-50' : 'text-gray-500'}`}>
                                            {bricks.toLocaleString()}
                                        </td>
                                    ))}
                                    <td className="px-4 py-4 whitespace-nowrap text-gray-500">₹{k.khadaiAmount.toLocaleString()}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-gray-500">₹{k.deposit.toLocaleString()}</td>
                                    <td className="px-4 py-4 whitespace-nowrap font-bold text-green-600">₹{totalPayment.toLocaleString()}</td>
                                    <td className="px-4 py-4 whitespace-nowrap font-medium">
                                        <div className="flex items-center space-x-1">
                                            <Button variant="ghost" size="sm">View</Button>
                                            <Button variant="secondary" size="sm">Deposit</Button>
                                            <Button variant="primary" size="sm">Paid</Button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </div>
    );
};

export default Khadai;

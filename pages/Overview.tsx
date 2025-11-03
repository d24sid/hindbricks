import React from 'react';
import KpiCard from '../components/ui/KpiCard';
import { patheraData, khadaiPieChartData, monthlyProductionData } from '../constants';
import KhadaiPieChart from '../components/charts/KhadaiPieChart';
import MonthlyProductionChart from '../components/charts/MonthlyProductionChart';
import Card from '../components/ui/Card';
import SparkLine from '../components/charts/SparkLine';
import { BrickIcon, PatheraIcon, KhadaiIcon } from '../components/ui/Icons';

const Overview: React.FC = () => {
    const topPatheras = [...patheraData].sort((a, b) => b.totalBricks - a.totalBricks).slice(0, 10);

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Overview</h2>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <KpiCard title="Total Bricks" value="2.1M" icon={<BrickIcon className="h-6 w-6" />} />
                <KpiCard title="Pathai Due" value="₹1,25,000" icon={<PatheraIcon className="h-6 w-6" />} />
                <KpiCard title="Khadai Due" value="₹88,000" icon={<KhadaiIcon className="h-6 w-6" />} />
                 <KpiCard
                    title="Total Paid"
                    value="₹12,45,000"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <MonthlyProductionChart data={monthlyProductionData} />
                </div>
                <div className="lg:col-span-2">
                    <KhadaiPieChart data={khadaiPieChartData} />
                </div>
            </div>

            {/* Top Patheras Table */}
            <Card>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top 10 Patheras by Production</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Bricks</th>
                                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {topPatheras.map((pathera) => (
                                <tr key={pathera.id}>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{pathera.name}</div>
                                        <div className="text-xs text-gray-500">{pathera.id}</div>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{pathera.totalBricks.toLocaleString()}</td>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <SparkLine data={pathera.trend.map(v => ({ value: v }))} color="#3b82f6" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default Overview;


import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../ui/Card';

interface MonthlyProductionChartProps {
  data: { name: string; thisSeason: number; lastSeason: number }[];
}

const MonthlyProductionChart: React.FC<MonthlyProductionChartProps> = ({ data }) => {
    return (
        <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Production</h3>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${Number(value) / 1000}k`} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                border: '1px solid #ccc',
                                borderRadius: '0.5rem'
                            }}
                        />
                        <Legend wrapperStyle={{fontSize: "14px"}}/>
                        <Bar dataKey="thisSeason" fill="#3b82f6" name="This Season" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="lastSeason" fill="#9ca3af" name="Last Season" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default MonthlyProductionChart;

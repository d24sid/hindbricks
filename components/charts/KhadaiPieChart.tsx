
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../ui/Card';

interface KhadaiPieChartProps {
  data: { name: string; value: number }[];
}

const COLORS = ['#3b82f6', '#60a5fa', '#93c5fd'];

const KhadaiPieChart: React.FC<KhadaiPieChartProps> = ({ data }) => {
    return (
        <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Pathera Khadai Distribution</h3>
             <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                            nameKey="name"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend wrapperStyle={{fontSize: "14px"}}/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default KhadaiPieChart;

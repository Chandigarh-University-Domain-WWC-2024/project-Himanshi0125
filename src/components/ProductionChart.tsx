import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { ProductionData } from '../types';

interface Props {
  data: ProductionData[];
}

export const ProductionChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="timestamp"
            tickFormatter={(value) => new Date(value).toLocaleTimeString()}
          />
          <YAxis />
          <Tooltip
            labelFormatter={(value) => new Date(value).toLocaleString()}
            formatter={(value: number) => [`${value} kWh`, 'Energy Production']}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="energy"
            stroke="#4F46E5"
            strokeWidth={2}
            dot={false}
            name="Energy Production"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
import React from 'react';
import { Battery, Sun, Zap } from 'lucide-react';

export const PerformanceMetrics: React.FC = () => {
  const metrics = [
    {
      icon: <Battery className="h-6 w-6 text-green-500" />,
      label: 'Total Production',
      value: '245.8 kWh',
      change: '+12%',
      period: 'vs. last month',
    },
    {
      icon: <Sun className="h-6 w-6 text-yellow-500" />,
      label: 'Peak Production',
      value: '12.4 kWh',
      change: '+8%',
      period: 'vs. yesterday',
    },
    {
      icon: <Zap className="h-6 w-6 text-purple-500" />,
      label: 'Efficiency Rate',
      value: '92%',
      change: '+2%',
      period: 'vs. last week',
    },
  ];

  return (
    <div className="space-y-6">
      {metrics.map((metric, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {metric.icon}
            <div>
              <p className="text-sm text-gray-600">{metric.label}</p>
              <p className="text-xl font-semibold">{metric.value}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-green-600">{metric.change}</p>
            <p className="text-xs text-gray-500">{metric.period}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
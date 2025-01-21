import React from 'react';
import { Sun, Cloud, Droplets, Thermometer, Battery, TrendingUp } from 'lucide-react';
import { ProductionChart } from './ProductionChart';
import { WeatherPanel } from './WeatherPanel';
import { PerformanceMetrics } from './PerformanceMetrics';
import { mockProductionData, mockWeatherData } from '../mockData';

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <header className="mb-8">
        <div className="flex items-center gap-3">
          <Sun className="h-8 w-8 text-yellow-500" />
          <h1 className="text-3xl font-bold text-gray-800">Solar Energy Dashboard</h1>
        </div>
        <p className="mt-2 text-gray-600">Real-time monitoring and forecasting of your solar energy production</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Quick Stats */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Battery className="h-6 w-6 text-green-500" />
            <h2 className="text-xl font-semibold">Current Production</h2>
          </div>
          <p className="text-3xl font-bold text-green-600">4.2 kWh</p>
          <p className="text-sm text-gray-500 mt-1">+12% from yesterday</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="h-6 w-6 text-blue-500" />
            <h2 className="text-xl font-semibold">Efficiency Rate</h2>
          </div>
          <p className="text-3xl font-bold text-blue-600">92%</p>
          <p className="text-sm text-gray-500 mt-1">Optimal performance</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <Thermometer className="h-6 w-6 text-red-500" />
            <h2 className="text-xl font-semibold">Temperature</h2>
          </div>
          <p className="text-3xl font-bold text-red-600">27°C</p>
          <p className="text-sm text-gray-500 mt-1">Ideal for production</p>
        </div>
      </div>

      {/* Main Chart */}
      <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">Energy Production Overview</h2>
        <ProductionChart data={mockProductionData} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Weather Forecast */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <Cloud className="h-6 w-6 text-blue-500" />
            <h2 className="text-xl font-semibold">Weather Forecast</h2>
          </div>
          <WeatherPanel data={mockWeatherData} />
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="h-6 w-6 text-purple-500" />
            <h2 className="text-xl font-semibold">Performance Metrics</h2>
          </div>
          <PerformanceMetrics />
        </div>
      </div>
    </div>
  );
};
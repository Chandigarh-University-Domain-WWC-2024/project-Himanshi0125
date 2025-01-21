import React from 'react';
import { Sun, Cloud, CloudRain } from 'lucide-react';
import { WeatherForecast } from '../types';

interface Props {
  data: WeatherForecast[];
}

const getWeatherIcon = (condition: string) => {
  switch (condition.toLowerCase()) {
    case 'sunny':
      return <Sun className="h-8 w-8 text-yellow-500" />;
    case 'cloudy':
      return <Cloud className="h-8 w-8 text-gray-500" />;
    case 'rainy':
      return <CloudRain className="h-8 w-8 text-blue-500" />;
    default:
      return <Sun className="h-8 w-8 text-yellow-500" />;
  }
};

export const WeatherPanel: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.map((forecast, index) => (
        <div
          key={index}
          className="bg-gray-50 rounded-lg p-4 flex flex-col items-center"
        >
          <p className="text-sm text-gray-600 mb-2">
            {new Date(forecast.date).toLocaleDateString()}
          </p>
          {getWeatherIcon(forecast.condition)}
          <p className="text-lg font-semibold mt-2">{forecast.temperature}°C</p>
          <p className="text-sm text-gray-600 mt-1">
            {forecast.predictedProduction.toFixed(1)} kWh
          </p>
        </div>
      ))}
    </div>
  );
};
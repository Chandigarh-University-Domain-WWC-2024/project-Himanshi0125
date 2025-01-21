import { ProductionData, WeatherForecast } from './types';

export const mockProductionData: ProductionData[] = Array.from({ length: 24 }, (_, i) => ({
  timestamp: new Date(2024, 2, 1, i).toISOString(),
  energy: 2 + Math.random() * 4 + Math.sin(i * Math.PI / 12) * 2,
  weather: i < 6 || i > 18 ? 'Clear' : 'Sunny',
  temperature: 20 + Math.sin(i * Math.PI / 12) * 5,
  solarIrradiance: Math.max(0, 600 + Math.sin(i * Math.PI / 12) * 400),
}));

export const mockWeatherData: WeatherForecast[] = [
  {
    date: new Date(2024, 2, 1).toISOString(),
    condition: 'Sunny',
    temperature: 28,
    solarIrradiance: 850,
    predictedProduction: 42.5,
  },
  {
    date: new Date(2024, 2, 2).toISOString(),
    condition: 'Cloudy',
    temperature: 24,
    solarIrradiance: 450,
    predictedProduction: 28.3,
  },
  {
    date: new Date(2024, 2, 3).toISOString(),
    condition: 'Rainy',
    temperature: 22,
    solarIrradiance: 200,
    predictedProduction: 15.7,
  },
];
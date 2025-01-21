export interface SolarPanel {
  id: string;
  location: string;
  capacity: number;
  efficiency: number;
  installationDate: string;
}

export interface ProductionData {
  timestamp: string;
  energy: number;
  weather: string;
  temperature: number;
  solarIrradiance: number;
}

export interface WeatherForecast {
  date: string;
  condition: string;
  temperature: number;
  solarIrradiance: number;
  predictedProduction: number;
}
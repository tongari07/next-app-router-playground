export interface WeatherData {
  temperature: number;
  condition: string;
  fetchedAt: string;
}

/**
 * Mock function to simulate fetching weather data
 * This helps visualize when data is actually fetched vs retrieved from cache
 */
export async function getWeatherData(): Promise<WeatherData> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    temperature: Math.round(Math.random() * 15 + 10), // Random temperature between 10-25°C
    condition: ["Sunny", "Cloudy", "Rainy", "Windy"][
      Math.floor(Math.random() * 4)
    ],
    fetchedAt: new Date().toISOString(),
  };
}

import { getWeatherData } from "@/lib/data";

async function getCachedWeatherData() {
  // Using revalidate: 60 means this data will be cached for 60 seconds
  // Even though the parent layout forces dynamic rendering with revalidate: 0
  const res = await fetch("http://localhost:3000/api/weather", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    // Fallback to our direct implementation if the API route fails
    return getWeatherData();
  }

  return res.json();
}

export default async function CacheDemoPage() {
  // Page render timestamp
  const pageRenderTime = new Date().toISOString();

  // Get weather data (this fetch should be cached for 60 seconds)
  const weatherData = await getCachedWeatherData();

  return (
    <div className="p-8 max-w-2xl mx-auto bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">
        Data Cache Demonstration
      </h1>

      <div className="grid gap-6">
        <div className="border border-gray-300 rounded-lg p-4 bg-white shadow">
          <h2 className="font-semibold mb-2 text-gray-900">Page Information</h2>
          <p className="text-gray-800">
            Page rendered at:{" "}
            <span className="font-mono text-gray-900">{pageRenderTime}</span>
          </p>
          <p className="mt-2 text-sm text-gray-700">
            This timestamp changes on every request because the root layout has
            revalidate=0
          </p>
        </div>

        <div className="border border-gray-300 rounded-lg p-4 bg-white shadow">
          <h2 className="font-semibold mb-2 text-gray-900">
            Weather Data (Cached for 60 seconds)
          </h2>
          <div className="space-y-2">
            <p className="text-gray-800">
              Temperature:{" "}
              <span className="font-bold text-gray-900">
                {weatherData.temperature}°C
              </span>
            </p>
            <p className="text-gray-800">
              Condition:{" "}
              <span className="font-bold text-gray-900">
                {weatherData.condition}
              </span>
            </p>
            <p className="text-gray-800">
              Data fetched at:{" "}
              <span className="font-mono text-gray-900">
                {weatherData.fetchedAt}
              </span>
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-700">
            This timestamp will only change every 60 seconds because the fetch
            uses revalidate=60, even though the page is dynamically rendered.
          </p>
        </div>

        <div className="border border-blue-600 rounded-lg p-4 bg-blue-100 shadow">
          <h2 className="font-semibold mb-2 text-gray-900">How This Works</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
            <li>
              The root layout has{" "}
              <code className="bg-gray-200 px-1 text-gray-900">
                revalidate=0
              </code>
              , forcing dynamic rendering for all routes
            </li>
            <li>
              This page uses{" "}
              <code className="bg-gray-200 px-1 text-gray-900">fetch()</code>{" "}
              with{" "}
              <code className="bg-gray-200 px-1 text-gray-900">
                revalidate=60
              </code>
            </li>
            <li>
              The page is server-rendered on each request (check the page
              timestamp)
            </li>
            <li>
              But the data fetch is cached for 60 seconds (check the data
              timestamp)
            </li>
            <li>
              Refresh the page multiple times to see the behavior in action
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

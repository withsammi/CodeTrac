
import { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    document.title = "Codetrac | Dashboard";
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome back, coder 👋</h1>
          <p className="text-gray-600 mt-1">Here’s your coding performance overview.</p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-2xl p-6">
            <h2 className="text-sm text-gray-500 mb-1">LeetCode</h2>
            <p className="text-2xl font-semibold text-gray-800">🔢 123 problems solved</p>
          </div>

          <div className="bg-white shadow rounded-2xl p-6">
            <h2 className="text-sm text-gray-500 mb-1">Codeforces</h2>
            <p className="text-2xl font-semibold text-gray-800">📈 Rating: 1470</p>
          </div>

          <div className="bg-white shadow rounded-2xl p-6">
            <h2 className="text-sm text-gray-500 mb-1">Streak</h2>
            <p className="text-2xl font-semibold text-gray-800">🔥 12-day streak</p>
          </div>
        </div>

        {/* Placeholder for future charts */}
        <div className="mt-10">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Performance Graph</h2>
            <p className="text-gray-500">Charts coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

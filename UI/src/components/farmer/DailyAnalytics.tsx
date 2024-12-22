import React, { useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Bar } from 'react-chartjs-2';
import { MilkEntry } from '@/types/milk';
import { formatDate } from '@/lib/utils';

interface DailyAnalyticsProps {
  entries: MilkEntry[];
}

export function DailyAnalytics({ entries }: DailyAnalyticsProps) {
  const today = new Date().toLocaleDateString();

  const dailyStats = useMemo(() => {
    const todayEntries = entries.filter(
      entry => new Date(entry.date).toLocaleDateString() === today
    );

    const totalQuantity = todayEntries.reduce((sum, entry) => sum + entry.quantity, 0);
    const avgFatContent = todayEntries.reduce((sum, entry) => sum + entry.fatContent, 0) / (todayEntries.length || 1);
    const avgSnf = todayEntries.reduce((sum, entry) => sum + entry.snf, 0) / (todayEntries.length || 1);

    // Get hourly data for the chart
    const hourlyData = Array.from({ length: 24 }, (_, hour) => {
      const hourEntries = todayEntries.filter(entry => {
        const entryHour = new Date(entry.date).getHours();
        return entryHour === hour;
      });
      return {
        hour,
        quantity: hourEntries.reduce((sum, entry) => sum + entry.quantity, 0),
      };
    });

    return {
      totalQuantity,
      avgFatContent,
      avgSnf,
      entryCount: todayEntries.length,
      hourlyData,
    };
  }, [entries, today]);

  const chartData = {
    labels: dailyStats.hourlyData.map(data => `${data.hour}:00`),
    datasets: [
      {
        label: 'Milk Collection (L)',
        data: dailyStats.hourlyData.map(data => data.quantity),
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Today\'s Hourly Collection',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Liters',
        },
      },
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: 'Hour',
        },
      },
    },
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Today's Collection Analytics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card title="Total Collection">
          <div className="text-3xl font-bold text-blue-600">
            {dailyStats.totalQuantity.toFixed(1)}L
          </div>
          <div className="text-sm text-gray-500">
            From {dailyStats.entryCount} entries
          </div>
        </Card>

        <Card title="Average Fat Content">
          <div className="text-3xl font-bold text-green-600">
            {dailyStats.avgFatContent.toFixed(1)}%
          </div>
          <div className="text-sm text-gray-500">
            Daily average
          </div>
        </Card>

        <Card title="Average SNF">
          <div className="text-3xl font-bold text-orange-600">
            {dailyStats.avgSnf.toFixed(1)}%
          </div>
          <div className="text-sm text-gray-500">
            Daily average
          </div>
        </Card>

        <Card title="Last Entry">
          <div className="text-xl font-bold text-purple-600">
            {entries.length > 0 ? formatDate(entries[0].date) : 'No entries yet'}
          </div>
          <div className="text-sm text-gray-500">
            Most recent collection
          </div>
        </Card>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
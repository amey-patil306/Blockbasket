import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, Truck, Store, Activity } from 'lucide-react';
import { useMilkStore } from '@/store/milkStore';

export function AdminOverview() {
  const { entries, payments } = useMilkStore();

  const stats = [
    {
      label: 'Total Farmers',
      value: entries.length,
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      label: 'Active Distributors',
      value: 12, // Replace with actual data
      icon: Truck,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      label: 'Retail Partners',
      value: 45, // Replace with actual data
      icon: Store,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      label: 'Daily Transactions',
      value: payments.length,
      icon: Activity,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} title={stat.label}>
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Add charts and other overview components here */}
    </div>
  );
}
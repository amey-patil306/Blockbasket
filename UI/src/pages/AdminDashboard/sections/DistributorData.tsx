import React from 'react';
import { Table } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Truck, Package, Clock } from 'lucide-react';

export function DistributorData() {
  const distributors = [
    {
      id: 'D001',
      name: 'Express Logistics',
      activeRoutes: 5,
      deliveries: 128,
      rating: 4.8,
      status: 'active',
    },
    // Add more sample data
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Active Routes">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Truck className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">24</div>
              <div className="text-sm text-gray-500">Current Routes</div>
            </div>
          </div>
        </Card>

        <Card title="Daily Deliveries">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Package className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">156</div>
              <div className="text-sm text-gray-500">Completed Today</div>
            </div>
          </div>
        </Card>

        <Card title="Average Time">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">2.5h</div>
              <div className="text-sm text-gray-500">Per Delivery</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head>ID</Table.Head>
              <Table.Head>Name</Table.Head>
              <Table.Head>Active Routes</Table.Head>
              <Table.Head>Deliveries</Table.Head>
              <Table.Head>Rating</Table.Head>
              <Table.Head>Status</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {distributors.map((distributor) => (
              <Table.Row key={distributor.id}>
                <Table.Cell>{distributor.id}</Table.Cell>
                <Table.Cell>{distributor.name}</Table.Cell>
                <Table.Cell>{distributor.activeRoutes}</Table.Cell>
                <Table.Cell>{distributor.deliveries}</Table.Cell>
                <Table.Cell>{distributor.rating}/5.0</Table.Cell>
                <Table.Cell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {distributor.status}
                  </span>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
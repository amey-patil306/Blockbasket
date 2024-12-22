import React from 'react';
import { Table } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Store, ShoppingCart, TrendingUp } from 'lucide-react';

export function PartnerData() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Total Partners">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Store className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">124</div>
              <div className="text-sm text-gray-500">Active Retailers</div>
            </div>
          </div>
        </Card>

        <Card title="Daily Orders">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <ShoppingCart className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">1,234</div>
              <div className="text-sm text-gray-500">Orders Today</div>
            </div>
          </div>
        </Card>

        <Card title="Growth Rate">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">+15%</div>
              <div className="text-sm text-gray-500">This Month</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head>Partner ID</Table.Head>
              <Table.Head>Business Name</Table.Head>
              <Table.Head>Location</Table.Head>
              <Table.Head>Daily Volume</Table.Head>
              <Table.Head>Partnership Level</Table.Head>
              <Table.Head>Status</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {/* Add partner data rows */}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
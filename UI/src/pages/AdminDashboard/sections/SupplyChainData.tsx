import React from 'react';
import { Table } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Activity, AlertTriangle, CheckCircle } from 'lucide-react';

export function SupplyChainData() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Active Shipments">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Activity className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">45</div>
              <div className="text-sm text-gray-500">In Transit</div>
            </div>
          </div>
        </Card>

        <Card title="Delayed Shipments">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">3</div>
              <div className="text-sm text-gray-500">Need Attention</div>
            </div>
          </div>
        </Card>

        <Card title="Completed Today">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">28</div>
              <div className="text-sm text-gray-500">Deliveries</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head>Shipment ID</Table.Head>
              <Table.Head>Origin</Table.Head>
              <Table.Head>Destination</Table.Head>
              <Table.Head>Status</Table.Head>
              <Table.Head>ETA</Table.Head>
              <Table.Head>Quality Check</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {/* Add shipment data rows */}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
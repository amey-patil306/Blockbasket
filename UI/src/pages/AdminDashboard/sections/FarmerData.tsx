import React from 'react';
import { Table } from '@/components/ui/table';
import { useMilkStore } from '@/store/milkStore';
import { formatDate } from '@/lib/utils';

export function FarmerData() {
  const { entries } = useMilkStore();

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Head>Farmer ID</Table.Head>
              <Table.Head>Name</Table.Head>
              <Table.Head>Total Quantity</Table.Head>
              <Table.Head>Last Entry</Table.Head>
              <Table.Head>Quality Score</Table.Head>
              <Table.Head>Status</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {entries.map((entry) => (
              <Table.Row key={entry.id}>
                <Table.Cell>{entry.farmerId}</Table.Cell>
                <Table.Cell>{entry.farmerName}</Table.Cell>
                <Table.Cell>{entry.quantity}L</Table.Cell>
                <Table.Cell>{formatDate(entry.date)}</Table.Cell>
                <Table.Cell>
                  {((entry.fatContent + entry.snf) / 2).toFixed(1)}%
                </Table.Cell>
                <Table.Cell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Active
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
import React from 'react';
import { formatDate } from '@/lib/utils';
import { Table } from '@/components/ui/table';
import type { BatchData } from '../types';

interface BatchTableProps {
  batches: BatchData[];
  onSelectBatch: (batch: BatchData) => void;
}

export function BatchTable({ batches, onSelectBatch }: BatchTableProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Batch ID</Table.Head>
            <Table.Head>Farmer Name</Table.Head>
            <Table.Head>Quantity (L)</Table.Head>
            <Table.Head>Fat Content (%)</Table.Head>
            <Table.Head>SNF (%)</Table.Head>
            <Table.Head>Collection Date</Table.Head>
            <Table.Head>Status</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {batches.map((batch) => (
            <Table.Row 
              key={batch.id}
              className="cursor-pointer hover:bg-gray-50"
              onClick={() => onSelectBatch(batch)}
            >
              <Table.Cell className="font-medium">{batch.id}</Table.Cell>
              <Table.Cell>{batch.farmerName}</Table.Cell>
              <Table.Cell>{batch.quantity}</Table.Cell>
              <Table.Cell>{batch.fatContent}</Table.Cell>
              <Table.Cell>{batch.snf}</Table.Cell>
              <Table.Cell>{formatDate(batch.collectionDate)}</Table.Cell>
              <Table.Cell>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${batch.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                    batch.status === 'approved' ? 'bg-green-100 text-green-800' : 
                    'bg-red-100 text-red-800'}`}
                >
                  {batch.status.charAt(0).toUpperCase() + batch.status.slice(1)}
                </span>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
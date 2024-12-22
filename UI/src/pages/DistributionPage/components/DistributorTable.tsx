import React from 'react';
import { Table } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';
import { useDummyData } from '../hooks/useDummyData';

interface DistributorTableProps {
  onSelectBatch: (batch: any) => void;
}

export function DistributorTable({ onSelectBatch }: DistributorTableProps) {
  const { batches } = useDummyData();

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Batch ID</Table.Head>
            <Table.Head>Farmer</Table.Head>
            <Table.Head>Product Type</Table.Head>
            <Table.Head>Quantity</Table.Head>
            <Table.Head>Collection Date</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Action</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {batches.map((batch) => (
            <Table.Row key={batch.id}>
              <Table.Cell className="font-medium">{batch.id}</Table.Cell>
              <Table.Cell>{batch.farmerName}</Table.Cell>
              <Table.Cell>{batch.productType}</Table.Cell>
              <Table.Cell>{batch.quantity} L</Table.Cell>
              <Table.Cell>{formatDate(batch.collectionDate)}</Table.Cell>
              <Table.Cell>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${batch.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                    batch.status === 'processing' ? 'bg-blue-100 text-blue-800' : 
                    'bg-green-100 text-green-800'}`}
                >
                  {batch.status.charAt(0).toUpperCase() + batch.status.slice(1)}
                </span>
              </Table.Cell>
              <Table.Cell>
                <Button 
                  size="sm"
                  onClick={() => onSelectBatch(batch)}
                >
                  Process
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
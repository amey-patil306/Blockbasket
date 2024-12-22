import { useMemo } from 'react';
import type { BatchData } from '../types';

export function useDummyData() {
  const batches = useMemo<BatchData[]>(() => [
    {
      id: 'BATCH-001',
      farmerName: 'John Smith',
      farmerId: 'F001',
      productType: 'Milk',
      quantity: 500,
      collectionDate: '2024-02-20T08:00:00Z',
      status: 'pending',
    },
    {
      id: 'BATCH-002',
      farmerName: 'Mary Johnson',
      farmerId: 'F002',
      productType: 'Milk',
      quantity: 750,
      collectionDate: '2024-02-20T09:30:00Z',
      status: 'processing',
    },
    {
      id: 'BATCH-003',
      farmerName: 'Robert Davis',
      farmerId: 'F003',
      productType: 'Milk',
      quantity: 600,
      collectionDate: '2024-02-20T10:15:00Z',
      status: 'completed',
    },
    {
      id: 'BATCH-004',
      farmerName: 'Sarah Wilson',
      farmerId: 'F004',
      productType: 'Milk',
      quantity: 850,
      collectionDate: '2024-02-20T11:45:00Z',
      status: 'pending',
    },
    {
      id: 'BATCH-005',
      farmerName: 'Michael Brown',
      farmerId: 'F005',
      productType: 'Milk',
      quantity: 450,
      collectionDate: '2024-02-20T13:20:00Z',
      status: 'processing',
    },
  ], []);

  return { batches };
}
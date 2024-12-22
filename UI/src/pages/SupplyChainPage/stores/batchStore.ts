import { create } from 'zustand';
import type { Batch } from '../types';

interface BatchState {
  batches: Batch[];
  addBatch: (batch: Batch) => void;
  updateBatchStatus: (batchId: string, status: Batch['status']) => void;
  getFilteredBatches: (filters: any) => Batch[];
}

export const useBatchStore = create<BatchState>((set, get) => ({
  batches: [],
  addBatch: (batch) => set((state) => ({ batches: [batch, ...state.batches] })),
  updateBatchStatus: (batchId, status) =>
    set((state) => ({
      batches: state.batches.map((batch) =>
        batch.id === batchId ? { ...batch, status } : batch
      ),
    })),
  getFilteredBatches: (filters) => {
    const { batches } = get();
    return batches.filter((batch) => {
      if (filters.status !== 'all' && batch.status !== filters.status) return false;
      if (filters.region !== 'all' && batch.region !== filters.region) return false;
      if (filters.farmer && !batch.farmerName.toLowerCase().includes(filters.farmer.toLowerCase())) return false;
      // Add date range filtering logic here
      return true;
    });
  },
}));
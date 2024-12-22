import React, { useState } from 'react';
import { BatchList } from './BatchList';
import { BatchFilters } from './BatchFilters';
import { useBatchStore } from '../stores/batchStore';

export function BatchOverview() {
  const [filters, setFilters] = useState({
    status: 'all',
    region: 'all',
    farmer: '',
    dateRange: 'week',
  });

  const batches = useBatchStore((state) => state.batches);
  const filteredBatches = useBatchStore((state) => state.getFilteredBatches(filters));

  return (
    <div className="space-y-6">
      <BatchFilters filters={filters} onFilterChange={setFilters} />
      <BatchList batches={filteredBatches} />
    </div>
  );
}
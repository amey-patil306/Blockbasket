import React from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface BatchFiltersProps {
  filters: {
    status: string;
    region: string;
    farmer: string;
    dateRange: string;
  };
  onFilterChange: (filters: any) => void;
}

export function BatchFilters({ filters, onFilterChange }: BatchFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            value={filters.status}
            onChange={(e) => onFilterChange({ ...filters, status: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Region</label>
          <select
            value={filters.region}
            onChange={(e) => onFilterChange({ ...filters, region: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="all">All Regions</option>
            <option value="north">North</option>
            <option value="south">South</option>
            <option value="east">East</option>
            <option value="west">West</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Farmer</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              value={filters.farmer}
              onChange={(e) => onFilterChange({ ...filters, farmer: e.target.value })}
              className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Search farmer..."
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date Range</label>
          <select
            value={filters.dateRange}
            onChange={(e) => onFilterChange({ ...filters, dateRange: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="custom">Custom Range</option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex justify-end space-x-2">
        <Button
          variant="outline"
          onClick={() => onFilterChange({
            status: 'all',
            region: 'all',
            farmer: '',
            dateRange: 'week',
          })}
        >
          Reset Filters
        </Button>
        <Button>Apply Filters</Button>
      </div>
    </div>
  );
}
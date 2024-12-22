import React from 'react';

interface SearchFormProps {
  batchNo: string;
  loading: boolean;
  onBatchNoChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function SearchForm({ batchNo, loading, onBatchNoChange, onSubmit }: SearchFormProps) {
  return (
    <form onSubmit={onSubmit} className="mb-6">
      <div className="flex gap-4">
        <input
          type="text"
          value={batchNo}
          onChange={(e) => onBatchNoChange(e.target.value)}
          placeholder="Enter Batch Number"
          className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Track'}
        </button>
      </div>
    </form>
  );
}
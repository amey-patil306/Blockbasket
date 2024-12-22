import React, { useState } from 'react';
import { useBlockchain } from '../lib/blockchain/BlockchainContext';
import { formatTimestamp } from '../utils/formatters';

export default function TrackSupplyChain() {
  const { contract } = useBlockchain();
  const [batchNo, setBatchNo] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{
    collection?: any;
    logistics?: any;
    distributor?: any;
    shop?: any;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contract) {
      setError('Please connect your wallet first');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      // Fetch all data for the batch number
      const [collection, logistics, distributor, shop] = await Promise.all([
        contract.getCollectionCenterData(batchNo),
        contract.getLogisticsData(batchNo),
        contract.getDistributorData(batchNo),
        contract.getShopData(batchNo)
      ]);

      setData({
        collection: collection.batchNo.toString() !== '0' ? collection : null,
        logistics: logistics.batchNo.toString() !== '0' ? logistics : null,
        distributor: distributor.batchNo.toString() !== '0' ? distributor : null,
        shop: shop.batchNo.toString() !== '0' ? shop : null
      });
    } catch (err) {
      console.error('Error:', err);
      setError('Error fetching data from blockchain');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6">Track Supply Chain</h2>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-4">
          <input
            type="text"
            value={batchNo}
            onChange={(e) => setBatchNo(e.target.value)}
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

      {error && (
        <div className="text-red-500 mb-4">{error}</div>
      )}

      {data && (
        <div className="space-y-6">
          {data.collection && (
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">Collection Centre Data</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Farmer ID</p>
                  <p className="font-medium">{data.collection.farmerID}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Quantity</p>
                  <p className="font-medium">{data.collection.quantity.toString()} L</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Breed of Cow</p>
                  <p className="font-medium">{data.collection.cowBreed}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium">{data.collection.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Timestamp</p>
                  <p className="font-medium">{formatTimestamp(data.collection.timestamp)}</p>
                </div>
              </div>
            </div>
          )}

          {data.logistics && (
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">Logistics Data</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Distance Travelled</p>
                  <p className="font-medium">{data.logistics.distanceTravelled.toString()} km</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Temperature</p>
                  <p className="font-medium">{data.logistics.temperature.toString()}°C</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Receiving Location</p>
                  <p className="font-medium">{data.logistics.receivingLocation}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Environment Conditions</p>
                  <p className="font-medium">{data.logistics.environmentConditions}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Timestamp</p>
                  <p className="font-medium">{formatTimestamp(data.logistics.timestamp)}</p>
                </div>
              </div>
            </div>
          )}

          {data.distributor && (
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">Distributor Data</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Distributor ID</p>
                  <p className="font-medium">{data.distributor.distributorID}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Quantity</p>
                  <p className="font-medium">{data.distributor.quantity.toString()} L</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Storage Conditions</p>
                  <p className="font-medium">{data.distributor.storageConditions}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium">{data.distributor.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Timestamp</p>
                  <p className="font-medium">{formatTimestamp(data.distributor.timestamp)}</p>
                </div>
              </div>
            </div>
          )}

          {data.shop && (
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3">Shop Data</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Storage Conditions</p>
                  <p className="font-medium">{data.shop.storageConditions}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Packets Received</p>
                  <p className="font-medium">{data.shop.noOfPacketsReceived.toString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Timestamp</p>
                  <p className="font-medium">{formatTimestamp(data.shop.timestamp)}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
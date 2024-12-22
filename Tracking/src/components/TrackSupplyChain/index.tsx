import React, { useState } from 'react';
import { useBlockchain } from '../../lib/blockchain/BlockchainContext';
import { formatTimestamp } from '../../utils/formatters';
import SearchForm from './SearchForm';
import SupplyChainStage from './SupplyChainStage';

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
      
      const [collection, logistics, distributor, shop] = await Promise.all([
        contract.getCollectionCenterData(batchNo),
        contract.getLogisticsData(batchNo),
        contract.getDistributorData(batchNo),
        contract.getShopData(batchNo)
      ]);

      setData({
        collection,
        logistics,
        distributor,
        shop
      });
    } catch (err) {
      console.error('Error:', err);
      setError('Error fetching data from blockchain');
    } finally {
      setLoading(false);
    }
  };

  const renderStageData = (stage: string, data: any) => {
    const hasData = data && data.batchNo.toString() !== '0';
    
    const stageConfigs = {
      collection: {
        title: "Collection Centre Data",
        fields: hasData ? [
          { label: 'Farmer ID', value: data.farmerID },
          { label: 'Quantity', value: data.quantity.toString(), unit: 'L' },
          { label: 'Breed of Cow', value: data.cowBreed },
          { label: 'Location', value: data.location },
          { label: 'Timestamp', value: formatTimestamp(data.timestamp) }
        ] : []
      },
      logistics: {
        title: "Logistics Data",
        fields: hasData ? [
          { label: 'Distance Travelled', value: data.distanceTravelled.toString(), unit: 'km' },
          { label: 'Temperature', value: data.temperature.toString(), unit: '°C' },
          { label: 'Receiving Location', value: data.receivingLocation },
          { label: 'Environment Conditions', value: data.environmentConditions },
          { label: 'Timestamp', value: formatTimestamp(data.timestamp) }
        ] : []
      },
      distributor: {
        title: "Distributor Data",
        fields: hasData ? [
          { label: 'Distributor ID', value: data.distributorID },
          { label: 'Quantity', value: data.quantity.toString(), unit: 'L' },
          { label: 'Storage Conditions', value: data.storageConditions },
          { label: 'Location', value: data.location },
          { label: 'Timestamp', value: formatTimestamp(data.timestamp) }
        ] : []
      },
      shop: {
        title: "Shop Data",
        fields: hasData ? [
          { label: 'Storage Conditions', value: data.storageConditions },
          { label: 'Packets Received', value: data.noOfPacketsReceived.toString() },
          { label: 'Timestamp', value: formatTimestamp(data.timestamp) }
        ] : []
      }
    };

    return (
      <SupplyChainStage
        title={stageConfigs[stage as keyof typeof stageConfigs].title}
        fields={stageConfigs[stage as keyof typeof stageConfigs].fields}
        status={hasData ? 'completed' : 'pending'}
      />
    );
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6">Track Supply Chain</h2>
      
      <SearchForm
        batchNo={batchNo}
        loading={loading}
        onBatchNoChange={setBatchNo}
        onSubmit={handleSubmit}
      />

      {error && (
        <div className="text-red-500 mb-4">{error}</div>
      )}

      {data && (
        <div className="space-y-6">
          {renderStageData('collection', data.collection)}
          {renderStageData('logistics', data.logistics)}
          {renderStageData('distributor', data.distributor)}
          {renderStageData('shop', data.shop)}
        </div>
      )}
    </div>
  );
}
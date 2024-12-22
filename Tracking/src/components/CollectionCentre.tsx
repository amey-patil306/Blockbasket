import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useBlockchain } from '../lib/blockchain/BlockchainContext';

export default function CollectionCentre() {
  const { contract } = useBlockchain();
  const [formData, setFormData] = useState({
    batchNo: '',
    farmerId: '',
    quantityOfMilk: '',
    breedOfCow: '',
    location: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // First, log to blockchain
      if (!contract) {
        throw new Error('Please connect your wallet first');
      }

      const timestamp = Math.floor(Date.now() / 1000);
      const tx = await contract.logCollectionCenter(
        formData.batchNo,
        formData.farmerId,
        formData.quantityOfMilk,
        formData.breedOfCow,
        timestamp,
        formData.location
      );

      // Wait for transaction to be mined
      await tx.wait();

      // Then, save to Supabase
      const { error } = await supabase
        .from('collection_centre')
        .insert([{
          batch_no: formData.batchNo,
          farmer_id: formData.farmerId,
          quantity_of_milk: parseFloat(formData.quantityOfMilk),
          breed_of_cow: formData.breedOfCow,
          location: formData.location
        }]);

      if (error) throw error;
      
      // Reset form
      setFormData({
        batchNo: '',
        farmerId: '',
        quantityOfMilk: '',
        breedOfCow: '',
        location: ''
      });
      
      alert('Data saved successfully to blockchain and database!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving data');
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6">Collection Centre Data Entry</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Batch Number
          </label>
          <input
            type="text"
            value={formData.batchNo}
            onChange={(e) => setFormData({ ...formData, batchNo: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Farmer ID
          </label>
          <input
            type="text"
            value={formData.farmerId}
            onChange={(e) => setFormData({ ...formData, farmerId: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Quantity of Milk (L)
          </label>
          <input
            type="number"
            value={formData.quantityOfMilk}
            onChange={(e) => setFormData({ ...formData, quantityOfMilk: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            min="0"
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Breed of Cow
          </label>
          <input
            type="text"
            value={formData.breedOfCow}
            onChange={(e) => setFormData({ ...formData, breedOfCow: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Location
          </label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
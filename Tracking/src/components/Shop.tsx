import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Shop() {
  const [formData, setFormData] = useState({
    batchNo: '',
    storageConditions: '',
    numberOfPacketsReceived: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('shop')
        .insert([{
          batch_no: formData.batchNo,
          storage_conditions: formData.storageConditions,
          number_of_packets_received: parseInt(formData.numberOfPacketsReceived)
        }]);

      if (error) throw error;
      
      setFormData({
        batchNo: '',
        storageConditions: '',
        numberOfPacketsReceived: ''
      });
      
      alert('Shop data saved successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving shop data');
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6">Shop Data Entry</h2>
      
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
            Storage Conditions
          </label>
          <select
            value={formData.storageConditions}
            onChange={(e) => setFormData({ ...formData, storageConditions: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select condition</option>
            <option value="Refrigerated">Refrigerated</option>
            <option value="Display Case">Display Case</option>
            <option value="Storage Room">Storage Room</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Number of Packets Received
          </label>
          <input
            type="number"
            value={formData.numberOfPacketsReceived}
            onChange={(e) => setFormData({ ...formData, numberOfPacketsReceived: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            min="1"
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
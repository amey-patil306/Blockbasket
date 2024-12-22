import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Distributor() {
  const [formData, setFormData] = useState({
    batchNo: '',
    distributorId: '',
    quantity: '',
    storageConditions: '',
    location: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('distributor')
        .insert([{
          batch_no: formData.batchNo,
          distributor_id: formData.distributorId,
          quantity: parseFloat(formData.quantity),
          storage_conditions: formData.storageConditions,
          location: formData.location
        }]);

      if (error) throw error;
      
      setFormData({
        batchNo: '',
        distributorId: '',
        quantity: '',
        storageConditions: '',
        location: ''
      });
      
      alert('Distributor data saved successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving distributor data');
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6">Distributor Data Entry</h2>
      
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
            Distributor ID
          </label>
          <input
            type="text"
            value={formData.distributorId}
            onChange={(e) => setFormData({ ...formData, distributorId: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Quantity (L)
          </label>
          <input
            type="number"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            min="0"
            step="0.1"
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
            <option value="Room Temperature">Room Temperature</option>
            <option value="Cold Storage">Cold Storage</option>
          </select>
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
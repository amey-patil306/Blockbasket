import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Logistics() {
  const [formData, setFormData] = useState({
    batchNo: '',
    distanceTravelled: '',
    temperature: '',
    receivingLocation: '',
    environmentConditions: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from('logistics')
        .insert([{
          batch_no: formData.batchNo,
          distance_travelled: parseFloat(formData.distanceTravelled),
          temperature: parseFloat(formData.temperature),
          receiving_location: formData.receivingLocation,
          environment_conditions: formData.environmentConditions
        }]);

      if (error) throw error;
      
      setFormData({
        batchNo: '',
        distanceTravelled: '',
        temperature: '',
        receivingLocation: '',
        environmentConditions: ''
      });
      
      alert('Logistics data saved successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving logistics data');
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6">Logistics Data Entry</h2>
      
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
            Distance Travelled (km)
          </label>
          <input
            type="number"
            value={formData.distanceTravelled}
            onChange={(e) => setFormData({ ...formData, distanceTravelled: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            min="0"
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Temperature (°C)
          </label>
          <input
            type="number"
            value={formData.temperature}
            onChange={(e) => setFormData({ ...formData, temperature: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Receiving Location
          </label>
          <input
            type="text"
            value={formData.receivingLocation}
            onChange={(e) => setFormData({ ...formData, receivingLocation: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Environment Conditions
          </label>
          <select
            value={formData.environmentConditions}
            onChange={(e) => setFormData({ ...formData, environmentConditions: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select condition</option>
            <option value="Normal">Normal</option>
            <option value="Humid">Humid</option>
            <option value="Dry">Dry</option>
            <option value="Hot">Hot</option>
            <option value="Cold">Cold</option>
          </select>
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
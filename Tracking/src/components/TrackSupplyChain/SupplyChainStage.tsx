import React from 'react';
import { Check, Clock } from 'lucide-react';

interface DataField {
  label: string;
  value: string;
  unit?: string;
}

interface SupplyChainStageProps {
  title: string;
  fields: DataField[];
  status: 'completed' | 'pending';
}

export default function SupplyChainStage({ title, fields, status }: SupplyChainStageProps) {
  return (
    <div className={`border rounded-lg p-4 ${status === 'completed' ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        {status === 'completed' ? (
          <div className="flex items-center text-green-600">
            <Check className="w-5 h-5 mr-1" />
            <span className="text-sm">Completed</span>
          </div>
        ) : (
          <div className="flex items-center text-gray-500">
            <Clock className="w-5 h-5 mr-1" />
            <span className="text-sm">Pending</span>
          </div>
        )}
      </div>
      
      {fields.length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {fields.map((field, index) => (
            <div key={index}>
              <p className="text-sm text-gray-600">{field.label}</p>
              <p className="font-medium">
                {field.value}
                {field.unit && ` ${field.unit}`}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-sm">No data available yet</p>
      )}
    </div>
  );
}
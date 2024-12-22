import React, { useState } from 'react';
import { BatchOverview } from './BatchOverview';
import { SupplyChainFlow } from './SupplyChainFlow';
import { Analytics } from './Analytics';
import { MessageBoard } from './MessageBoard';
import { Notifications } from './Notifications';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export function SupplyChainDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Supply Chain Management</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="batches">Batches</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="communication">Communication</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="space-y-6">
            <SupplyChainFlow />
            <Notifications />
          </div>
        </TabsContent>

        <TabsContent value="batches">
          <BatchOverview />
        </TabsContent>

        <TabsContent value="analytics">
          <Analytics />
        </TabsContent>

        <TabsContent value="communication">
          <MessageBoard />
        </TabsContent>
      </Tabs>
    </div>
  );
}
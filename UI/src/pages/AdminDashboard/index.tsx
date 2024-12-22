import React from 'react';
import { useAuthStore } from '@/store/authStore';
import { Navigate } from 'react-router-dom';
import { AdminOverview } from './sections/AdminOverview';
import { FarmerData } from './sections/FarmerData';
import { DistributorData } from './sections/DistributorData';
import { SupplyChainData } from './sections/SupplyChainData';
import { PartnerData } from './sections/PartnerData';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export function AdminDashboard() {
  const user = useAuthStore((state) => state.user);

  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
      
      <Tabs defaultValue="overview">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="farmers">Farmers</TabsTrigger>
          <TabsTrigger value="distributors">Distributors</TabsTrigger>
          <TabsTrigger value="supply-chain">Supply Chain</TabsTrigger>
          <TabsTrigger value="partners">Partners</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <AdminOverview />
        </TabsContent>

        <TabsContent value="farmers">
          <FarmerData />
        </TabsContent>

        <TabsContent value="distributors">
          <DistributorData />
        </TabsContent>

        <TabsContent value="supply-chain">
          <SupplyChainData />
        </TabsContent>

        <TabsContent value="partners">
          <PartnerData />
        </TabsContent>
      </Tabs>
    </div>
  );
}
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Milk, Truck, Building2, Store, BarChart3, LogOut, Search } from 'lucide-react';
import CollectionCentre from './components/CollectionCentre';
import Logistics from './components/Logistics';
import Distributor from './components/Distributor';
import Shop from './components/Shop';
import Analytics from './components/Analytics';
import TrackSupplyChain from './components/TrackSupplyChain';
import Auth from './components/Auth';
import WalletConnect from './components/WalletConnect';
import { AuthProvider, useAuth } from './lib/AuthContext';
import { BlockchainProvider } from './lib/blockchain/BlockchainContext';

function Navigation() {
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <Milk className="h-5 w-5" />
              <span>Collection Centre</span>
            </Link>
            <Link to="/logistics" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <Truck className="h-5 w-5" />
              <span>Logistics</span>
            </Link>
            <Link to="/distributor" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <Building2 className="h-5 w-5" />
              <span>Distributor</span>
            </Link>
            <Link to="/shop" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <Store className="h-5 w-5" />
              <span>Shop</span>
            </Link>
            <Link to="/analytics" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <BarChart3 className="h-5 w-5" />
              <span>Analytics</span>
            </Link>
            <Link to="/track" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <Search className="h-5 w-5" />
              <span>Track</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <WalletConnect />
            {user && (
              <button
                onClick={() => signOut()}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
              >
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  const { user } = useAuth();

  if (!user) {
    return <Auth />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<CollectionCentre />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/distributor" element={<Distributor />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/track" element={<TrackSupplyChain />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BlockchainProvider>
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </BlockchainProvider>
  );
}
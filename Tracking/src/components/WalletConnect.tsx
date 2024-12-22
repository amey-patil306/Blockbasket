import React from 'react';
import { useBlockchain } from '../lib/blockchain/BlockchainContext';

export default function WalletConnect() {
  const { account, connecting, error, connectWallet } = useBlockchain();

  return (
    <div className="flex items-center space-x-4">
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
      
      {account ? (
        <p className="text-sm text-gray-600">
          Connected: {account.slice(0, 6)}...{account.slice(-4)}
        </p>
      ) : (
        <button
          onClick={connectWallet}
          disabled={connecting}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
        >
          {connecting ? 'Connecting...' : 'Connect Wallet'}
        </button>
      )}
    </div>
  );
}
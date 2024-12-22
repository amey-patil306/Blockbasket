import { ethers } from 'ethers';

export const contractAddress = '0x5Ceb73263D634068cc42D085FF0F10FfFD5dC0Fd'; // Replace with your deployed contract address

export const abi = [
  {
    "inputs": [
      { "internalType": "uint256", "name": "_batchNo", "type": "uint256" },
      { "internalType": "string", "name": "_farmerID", "type": "string" },
      { "internalType": "uint256", "name": "_quantity", "type": "uint256" },
      { "internalType": "string", "name": "_cowBreed", "type": "string" },
      { "internalType": "uint256", "name": "_timestamp", "type": "uint256" },
      { "internalType": "string", "name": "_location", "type": "string" }
    ],
    "name": "logCollectionCenter",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_batchNo", "type": "uint256" },
      { "internalType": "uint256", "name": "_distanceTravelled", "type": "uint256" },
      { "internalType": "int256", "name": "_temperature", "type": "int256" },
      { "internalType": "uint256", "name": "_timestamp", "type": "uint256" },
      { "internalType": "string", "name": "_receivingLocation", "type": "string" },
      { "internalType": "string", "name": "_environmentConditions", "type": "string" }
    ],
    "name": "logLogistics",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_batchNo", "type": "uint256" },
      { "internalType": "string", "name": "_distributorID", "type": "string" },
      { "internalType": "uint256", "name": "_timestamp", "type": "uint256" },
      { "internalType": "uint256", "name": "_quantity", "type": "uint256" },
      { "internalType": "string", "name": "_storageConditions", "type": "string" },
      { "internalType": "string", "name": "_location", "type": "string" }
    ],
    "name": "logDistributor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_batchNo", "type": "uint256" },
      { "internalType": "uint256", "name": "_timestamp", "type": "uint256" },
      { "internalType": "string", "name": "_storageConditions", "type": "string" },
      { "internalType": "uint256", "name": "_noOfPacketsReceived", "type": "uint256" }
    ],
    "name": "logShop",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_batchNo", "type": "uint256" }],
    "name": "getCollectionCenterData",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "batchNo", "type": "uint256" },
          { "internalType": "string", "name": "farmerID", "type": "string" },
          { "internalType": "uint256", "name": "quantity", "type": "uint256" },
          { "internalType": "string", "name": "cowBreed", "type": "string" },
          { "internalType": "uint256", "name": "timestamp", "type": "uint256" },
          { "internalType": "string", "name": "location", "type": "string" }
        ],
        "internalType": "struct DairySupplyChain.CollectionCenter",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_batchNo", "type": "uint256" }],
    "name": "getLogisticsData",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "batchNo", "type": "uint256" },
          { "internalType": "uint256", "name": "distanceTravelled", "type": "uint256" },
          { "internalType": "int256", "name": "temperature", "type": "int256" },
          { "internalType": "uint256", "name": "timestamp", "type": "uint256" },
          { "internalType": "string", "name": "receivingLocation", "type": "string" },
          { "internalType": "string", "name": "environmentConditions", "type": "string" }
        ],
        "internalType": "struct DairySupplyChain.Logistics",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_batchNo", "type": "uint256" }],
    "name": "getDistributorData",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "batchNo", "type": "uint256" },
          { "internalType": "string", "name": "distributorID", "type": "string" },
          { "internalType": "uint256", "name": "timestamp", "type": "uint256" },
          { "internalType": "uint256", "name": "quantity", "type": "uint256" },
          { "internalType": "string", "name": "storageConditions", "type": "string" },
          { "internalType": "string", "name": "location", "type": "string" }
        ],
        "internalType": "struct DairySupplyChain.Distributor",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_batchNo", "type": "uint256" }],
    "name": "getShopData",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "batchNo", "type": "uint256" },
          { "internalType": "uint256", "name": "timestamp", "type": "uint256" },
          { "internalType": "string", "name": "storageConditions", "type": "string" },
          { "internalType": "uint256", "name": "noOfPacketsReceived", "type": "uint256" }
        ],
        "internalType": "struct DairySupplyChain.Shop",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": true,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "batchNo", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "farmerID", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "quantity", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "cowBreed", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "location", "type": "string" }
    ],
    "name": "CollectionCenterLogged",
    "type": "event"
  },
  {
    "anonymous": true,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "batchNo", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "distanceTravelled", "type": "uint256" },
      { "indexed": false, "internalType": "int256", "name": "temperature", "type": "int256" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "receivingLocation", "type": "string" },
      { "indexed": false, "internalType": "string", "name": "environmentConditions", "type": "string" }
    ],
    "name": "LogisticsLogged",
    "type": "event"
  },
  {
    "anonymous": true,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "batchNo", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "distributorID", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "quantity", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "storageConditions", "type": "string" },
      { "indexed": false, "internalType": "string", "name": "location", "type": "string" }
    ],
    "name": "DistributorLogged",
    "type": "event"
  },
  {
    "anonymous": true,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "batchNo", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "storageConditions", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "noOfPacketsReceived", "type": "uint256" }
    ],
    "name": "ShopLogged",
    "type": "event"
  }
];


export async function getContract() {
  if (!window.ethereum) {
    throw new Error('MetaMask is not installed');
  }

  await window.ethereum.request({ method: 'eth_requestAccounts' });
  
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);
  
  return contract;
}

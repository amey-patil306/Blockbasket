
# Dairy Supply Chain Tracking System - BlockBasket

A blockchain-based supply chain tracking system for dairy products using Ethereum smart contracts and React. The system ensures transparency, traceability, and trust throughout the supply chain.

## Features

### Core Features
- Blockchain Integration: Secure and immutable record-keeping using Ethereum (Sepolia testnet).
- MetaMask Integration: Secure wallet connection for blockchain transactions.
- Real-time Tracking: Monitor product journey and conditions with batch numbers.
- QR Code Integration: Instant access to product information.
- Multi-Stage Recording: Track data at every stage:
  - Collection Center: Farmer and milk collection details.
  - Logistics: Transportation and temperature tracking.
  - Distributor: Inventory and distribution management.
  - Shop: Retail inventory tracking.
- Real-time Analytics: Milk collection trends, temperature monitoring, and supply chain efficiency analysis.
- User Roles:
  - Farmers: Record milk collection and track payments.
  - Distributors: Manage transportation and quality verification.
  - Retailers: Verify authenticity and track inventory.
  - Administrators: Oversee entire supply chain operations.

### Tech Stack
- Frontend: React (TypeScript, Vite)
- Styling: Tailwind CSS, Lucide React Icons
- Blockchain: Ethereum (Sepolia testnet), Solidity smart contracts
- State Management: Zustand
- Validation: React Hook Form with Zod
- Authentication: Supabase
- Charts: Recharts, Chart.js
- Animation: Framer Motion

---

## Prerequisites

- Node.js: Version 16 or higher
- MetaMask: Wallet extension with Sepolia testnet ETH
- Environment Variables:
  - Create a `.env` file with the following:
    ```
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd dairy-supply-chain
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Add your Supabase URL and Anon Key in the `.env` file.

4. Update the smart contract address:
   - Replace `YOUR_CONTRACT_ADDRESS` in `src/lib/blockchain/contract.ts` with your deployed contract address.

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Access the application at `http://localhost:5173`.

---

## Usage

### User Roles and Features

#### Farmers
- Record milk collection details.
- Monitor quality and payments.
- Generate QR codes.

#### Distributors
- Optimize routes in real-time.
- Monitor transportation conditions (e.g., temperature).
- Confirm deliveries and verify quality.

#### Retailers
- Verify product authenticity using QR codes.
- Track inventory and monitor deliveries.
- Access product history.

#### Administrators
- Oversee supply chain operations.
- Manage user accounts and system configurations.
- Access analytics dashboards.

---

## Smart Contract Functions

### Collection Center
```solidity
function logCollectionCenter(
    uint256 _batchNo,
    string memory _farmerID,
    uint256 _quantity,
    string memory _cowBreed,
    uint256 _timestamp,
    string memory _location
)
```

### Logistics
```solidity
function logLogistics(
    uint256 _batchNo,
    uint256 _distanceTravelled,
    int256 _temperature,
    uint256 _timestamp,
    string memory _receivingLocation,
    string memory _environmentConditions
)
```

### Distributor
```solidity
function logDistributor(
    uint256 _batchNo,
    string memory _distributorID,
    uint256 _timestamp,
    uint256 _quantity,
    string memory _storageConditions,
    string memory _location
)
```

### Shop
```solidity
function logShop(
    uint256 _batchNo,
    uint256 _timestamp,
    string memory _storageConditions,
    uint256 _noOfPacketsReceived
)
```

---

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── store/          # Global state management
├── types/          # TypeScript type definitions
├── lib/            # Utility functions
└── hooks/          # Custom React hooks
```

---

## Security

- Row Level Security (RLS): Enabled for all Supabase tables.
- Authentication: Supabase for secure login.
- Blockchain: Ensures data immutability.
- Access Control: Smart contract functions restricted to authorized roles.

---

## Contributing

1. Fork the repository:
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. Commit your changes:
   ```bash
   git commit -m 'Add amazing feature'
   ```

3. Push to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```

4. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)



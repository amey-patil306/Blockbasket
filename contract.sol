// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DairySupplyChain {
    // Events for logging actions
    event CollectionCenterLogged(
        uint256 batchNo,
        string farmerID,
        uint256 quantity,
        string cowBreed,
        uint256 timestamp,
        string location
    );
    event LogisticsLogged(
        uint256 batchNo,
        uint256 distanceTravelled,
        int256 temperature,
        uint256 timestamp,
        string receivingLocation,
        string environmentConditions
    );
    event DistributorLogged(
        uint256 batchNo,
        string distributorID,
        uint256 timestamp,
        uint256 quantity,
        string storageConditions,
        string location
    );
    event ShopLogged(
        uint256 batchNo,
        uint256 timestamp,
        string storageConditions,
        uint256 noOfPacketsReceived
    );

    // Structs for each node
    struct CollectionCenter {
        uint256 batchNo;
        string farmerID;
        uint256 quantity; // in liters
        string cowBreed;
        uint256 timestamp;
        string location;
    }

    struct Logistics {
        uint256 batchNo;
        uint256 distanceTravelled; // in kilometers
        int256 temperature; // in Celsius
        uint256 timestamp;
        string receivingLocation;
        string environmentConditions;
    }

    struct Distributor {
        uint256 batchNo;
        string distributorID;
        uint256 timestamp;
        uint256 quantity; // in liters
        string storageConditions;
        string location;
    }

    struct Shop {
        uint256 batchNo;
        uint256 timestamp;
        string storageConditions;
        uint256 noOfPacketsReceived;
    }

    // Mappings for storing data
    mapping(uint256 => CollectionCenter) public collectionCenters;
    mapping(uint256 => Logistics) public logisticsData;
    mapping(uint256 => Distributor) public distributors;
    mapping(uint256 => Shop) public shops;

    // Functions to log data for each node
    function logCollectionCenter(
        uint256 _batchNo,
        string memory _farmerID,
        uint256 _quantity,
        string memory _cowBreed,
        uint256 _timestamp,
        string memory _location
    ) public {
        collectionCenters[_batchNo] = CollectionCenter(
            _batchNo,
            _farmerID,
            _quantity,
            _cowBreed,
            _timestamp,
            _location
        );

        emit CollectionCenterLogged(
            _batchNo,
            _farmerID,
            _quantity,
            _cowBreed,
            _timestamp,
            _location
        );
    }

    function logLogistics(
        uint256 _batchNo,
        uint256 _distanceTravelled,
        int256 _temperature,
        uint256 _timestamp,
        string memory _receivingLocation,
        string memory _environmentConditions
    ) public {
        logisticsData[_batchNo] = Logistics(
            _batchNo,
            _distanceTravelled,
            _temperature,
            _timestamp,
            _receivingLocation,
            _environmentConditions
        );

        emit LogisticsLogged(
            _batchNo,
            _distanceTravelled,
            _temperature,
            _timestamp,
            _receivingLocation,
            _environmentConditions
        );
    }

    function logDistributor(
        uint256 _batchNo,
        string memory _distributorID,
        uint256 _timestamp,
        uint256 _quantity,
        string memory _storageConditions,
        string memory _location
    ) public {
        distributors[_batchNo] = Distributor(
            _batchNo,
            _distributorID,
            _timestamp,
            _quantity,
            _storageConditions,
            _location
        );

        emit DistributorLogged(
            _batchNo,
            _distributorID,
            _timestamp,
            _quantity,
            _storageConditions,
            _location
        );
    }

    function logShop(
        uint256 _batchNo,
        uint256 _timestamp,
        string memory _storageConditions,
        uint256 _noOfPacketsReceived
    ) public {
        shops[_batchNo] = Shop(
            _batchNo,
            _timestamp,
            _storageConditions,
            _noOfPacketsReceived
        );

        emit ShopLogged(
            _batchNo,
            _timestamp,
            _storageConditions,
            _noOfPacketsReceived
        );
    }

    // Function to fetch data for a batch number
    function getCollectionCenterData(uint256 _batchNo)
        public
        view
        returns (CollectionCenter memory)
    {
        return collectionCenters[_batchNo];
    }

    function getLogisticsData(uint256 _batchNo)
        public
        view
        returns (Logistics memory)
    {
        return logisticsData[_batchNo];
    }

    function getDistributorData(uint256 _batchNo)
        public
        view
        returns (Distributor memory)
    {
        return distributors[_batchNo];
    }

    function getShopData(uint256 _batchNo)
        public
        view
        returns (Shop memory)
    {
        return shops[_batchNo];
    }
}

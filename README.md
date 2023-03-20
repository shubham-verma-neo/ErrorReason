# dAppTemplate

Welcome to dAppTemplate - a simple and customizable template for creating fully functional dApps. This template is designed to help you get started quickly with your decentralized application development project.

## Solidity

The Solidity section of this template includes a sample contract to demonstrate its functionality. This contract includes three public variables: owner, randomAddress, and randomNumber.

Upon deployment, the owner variable is set to msg.sender. Additionally, two setter functions have been included - one to set the randomAddress, and the other to set the randomNumber. Feel free to modify the contract and add additional functionality to suit your needs.

## Client

Inside the `src` folder, you will find three sub-folders: `components`, `contracts`, and `MetamaskLogin`.

### `Contracts` Folder

The `contracts` folder contains the JSON file for the sample contract. This file is crucial for creating an instance of the contract and interacting with it.

### `MetamaskLogin` Folder

The `MetamaskLogin` folder includes the code for establishing a connection between Metamask and the application. Here, you will need to make changes to the state file to add variables for your Solidity contract. If you have multiple contracts, you will need to define variables for each of them in the same manner as for the sample contract.

### `Components` Folder

Currently, the components folder includes two components: `Header.jsx` and `Sample.jsx.`

`Header.jsx` contains routes as well as a button to connect or disconnect the wallet. Additionally, it displays the address and network that is currently connected.

In `Sample.jsx`, there is a function to retrieve variables from the smart contract, and two functions to write the `randomAddress` and `randomNumber` to the blockchain. The function for setting the `randomAddress` is handled from the front-end only, while the function for setting the `randomNumber` uses backend Node.js. This demonstrates how to make changes from the backend if needed.

## Server

In the server-side of this project, we have set up a connection to the smart contract and also to MongoDB if we need to store some transaction details. The necessary details for this setup are provided in the `.env` file.

Inside the `server` folder, we have subfolders like `model`, `routes`, and `startup`.

In the `model` folder, we have created a model for MongoDB to store the transaction details.

In the `routes` folder, we have different routes like the `randomNumber` route, which gets the data from the front-end and stores it to the smart contract. This transaction is completed with the help of the private key of the owner to avoid any errors.

Inside the `startup` folder, we have three files:
    -`mongodb.js`: which sets up the connection to MongoDB for the project.
    -`web3.js`: which retrieves the JSON of the sample contract and creates its instance.
    -`routes.js`: which sets up the necessary routes for the project's functionality.

# Installation

To use dAppTemplate, please follow these steps:

Clone the repository: git clone [https://github.com/your-username/dAppTemplate.git](https://github.com/your-username/dAppTemplate.git)
-Install dependencies in each folder: - client: `npm install` - server: `npm install` - solidity: `npm install`
-Make necessary changes to the environment files in each folder.
-Run the application:
-In solidity repo: `npm run dev` // for development
-In server: `nodemon index.js`
-In client: `npm start`

# Contributing

We welcome contributions to dAppTemplate! If you want to contribute, please fork the repository and submit a pull request.

# License

This project is licensed under the MIT License. Please see the LICENSE file for more information.

# Contact

If you have any questions about dAppTemplate, please feel free to contact us at [verma.shu6ham@gmail.com].

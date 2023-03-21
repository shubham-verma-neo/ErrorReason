# ErrorReason

The Solidity code in this repository includes a sample contract that demonstrates its functionality through three public variables: `owner`, `randomAddress`, and `randomNumber`.

Upon deployment, the `owner` variable is set to `msg.sender`. The contract also includes two setter functions, `setRandomAddress` and `setRandomNumber`, which only the owner can call, and a `reverts` function that reverts the call with a revert reason of `Reverted with revert`.

While the `setRandomAddress` and `setRandomNumber` functions use the required modifier to check if the caller is the `owner`, they will revert with a reason of `Only Owner.` if the caller is not the `owner`. However, when attempting to catch this revert reason in the error object, it is not being captured. If you have a solution to this issue, please let me know.

# Installation

To use ErrorReason, please follow these steps:

- Install dependencies in each folder: <br/>
  - client: `npm install` <br/>
  - solidity: `npm install`<br/>
- Make necessary changes to the environment files in each folder.<br/>
- Run the application:<br/>
  - In solidity: `npm run dev` // for development<br/>
  - In client: `npm start`<br/>

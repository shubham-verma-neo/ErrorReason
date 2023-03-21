//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract sample{
    address public owner;
    address public randomAddress;
    uint256 public randomNumber;

    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender == owner, "Only Owner."); 
        _;
    }

    function setRandomAddress(address _randomAddress)public onlyOwner{ // in this case I should get revert reason "Only Owner."
        randomAddress = _randomAddress;
    }

        function setRandomNumber(uint256 _randomNumber)public onlyOwner{ // in this case I should get revert reason "Only Owner."
        randomNumber = _randomNumber;
    }

    function reverts() pure public { // in this case I am geting the revert reason
        revert("Reverted with revert.");
    }
} 
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BanSplitter {
    address public owner;
    uint256 public protocolFee = 1;

    constructor() {
        owner = msg.sender;
    }

    function executeSale(address payable _affiliate, address payable _merchant) public payable {
        uint256 totalAmount = msg.value;
        require(totalAmount > 0, "Pago invalido");

        uint256 feeAmount = (totalAmount * protocolFee) / 100;
        uint256 remainder = totalAmount - feeAmount;

        payable(owner).transfer(feeAmount);
        _affiliate.transfer(remainder);
    }
}
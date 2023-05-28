// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ProductMarketplace {
    using SafeERC20 for IERC20;

    IERC20 public erc20Token;
    ERC20 public wethToken;
    address public owner;
    uint256 public conversionRate = 100; // 100 ERC20 tokens = 1 WETH

    mapping(address => uint256) public productPrices;

    event ProductPurchased(
        address indexed sender,
        uint256 erc20Amount,
        uint256 wethAmount
    );

    constructor(address _erc20TokenAddress, address _wethTokenAddress) {
        erc20Token = IERC20(_erc20TokenAddress);
      wethToken = ERC20(_wethTokenAddress);
        owner = msg.sender;
    }

    function setProductPrice(uint256 _price) external {
        productPrices[msg.sender] = _price;
    }

    function buyProduct(uint256 _quantity) external {
        uint256 productPrice = productPrices[msg.sender];
        require(productPrice > 0, "Product price not set");

        uint256 totalPrice = productPrice * _quantity;
        require(
            erc20Token.allowance(msg.sender, address(this)) >= totalPrice,
            "Insufficient allowance"
        );

        erc20Token.safeTransferFrom(msg.sender, address(this), totalPrice);
        uint256 wethAmount = totalPrice / conversionRate;
        wethToken.transfer(msg.sender, wethAmount);

        emit ProductPurchased(msg.sender, totalPrice, wethAmount);
    }

    function withdrawTokens(address _tokenAddress, uint256 _amount) external {
        require(msg.sender == owner, "Only the contract owner can withdraw tokens");
        IERC20 token = IERC20(_tokenAddress);
        token.safeTransfer(owner, _amount);}
}
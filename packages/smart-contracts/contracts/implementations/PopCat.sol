// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "../interfaces/IPopCat.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract PopCat is IPopCat, Ownable, ERC721URIStorage {
    uint256 public totalSupply;

    uint256 public tokenCount;

    string public ipfsUri;

    constructor(address _ownerAddress, uint256 _totalSupply)
        ERC721("PopPopPopCat", "PC")
    {
        if (_ownerAddress == address(0)) {
            revert ForbiddenZeroAddress();
        }

        if (_totalSupply == 0) {
            revert InvalidTotalSupply();
        }

        if (_ownerAddress != msg.sender) {
            transferOwnership(_ownerAddress);
        }

        totalSupply = _totalSupply;
        tokenCount = 0;
        ipfsUri = "https://www.google.com";
    }

    function mint(address _to) external payable override {
        if (_to == address(0)) revert ForbiddenZeroAddress();

        if (tokenCount >= totalSupply) revert ExceedingMaxSupply();

        tokenCount += 1;

        _mint(_to, tokenCount);
    }

    function updateIPFS(string calldata _uri) external override onlyOwner {
        ipfsUri = _uri;
    }
}

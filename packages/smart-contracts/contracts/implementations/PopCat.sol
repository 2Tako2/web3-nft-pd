// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "../interfaces/IPopCat.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract PopCat is IPopCat, Ownable, ERC721 {
    uint256 public totalSupply;

    uint256 public tokenCount;

    string public tokenUriBase;

    bool public revealed;

    string public constant contractURI =
        "ipfs://QmbeEAU4bDVAfCvrD1izozZQ4Jr2etZLjjrayfxGpQo9Ln";

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
        revealed = false;
        tokenUriBase = "ipfs://QmRvxvHqY5vKgnBegGsYsci39QgpmkP2B52jGcbqxprX2q";
    }

    function mint(address _to) external payable override {
        if (_to == address(0)) revert ForbiddenZeroAddress();

        if (tokenCount >= totalSupply) revert ExceedingMaxSupply();

        tokenCount += 1;

        _mint(_to, tokenCount);

        emit SuccessfulMint(tokenCount, _to);
    }

    function updateTokenUriBase(string calldata _uri)
        external
        override
        onlyOwner
    {
        tokenUriBase = _uri;
        revealed = true;
    }

    function tokenURI(uint256 _tokenId)
        public
        view
        override(ERC721, IPopCat)
        returns (string memory)
    {
        if (_tokenId > totalSupply) revert TokenIdNotFound();
        if (!revealed) return tokenUriBase;

        return string.concat(tokenUriBase, "/", Strings.toString(_tokenId));
    }
}

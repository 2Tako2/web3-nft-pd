// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

interface IPopCat {
    /**
     * @notice Mint a token to specified address
     * @param _to the token will mint to this public address
     */
    function mint(address _to) external payable;

    /**
     * @notice This allow owner to update the IPFS uri
     */
    function updateTokenUriBase(string calldata _uri) external;

    function tokenURI(uint256 _tokenId) external returns (string memory);

    /// @notice event emit when new successful mint
    event SuccessfulMint(uint256 _tokenId, address _to);

    /// @notice event emit when the owner updated the ipfs uri
    event UriUpdated();

    /// @notice Zero address is not allowed
    error ForbiddenZeroAddress();

    /// @notice Total supply must be larger than 0
    error InvalidTotalSupply();

    /// @notice Cannot mint token due to maxSupply reached
    error ExceedingMaxSupply();

    /// @notice Cannot find given token id
    error TokenIdNotFound();
}

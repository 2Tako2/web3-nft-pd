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
    function updateIPFS(string calldata _uri) external;

    /// @notice event emit when the owner updated the ipfs uri
    event UriUpdated();

    /// @notice Zero address is not allowed
    error ForbiddenZeroAddress();

    /// @notice Total supply must be larger than 0
    error InvalidTotalSupply();

    /// @notice Cannot mint token due to maxSupply reached
    error ExceedingMaxSupply();
}

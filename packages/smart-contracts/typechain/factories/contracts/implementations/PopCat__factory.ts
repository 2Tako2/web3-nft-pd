/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PopCat,
  PopCatInterface,
} from "../../../contracts/implementations/PopCat";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_ownerAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_totalSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ExceedingMaxSupply",
    type: "error",
  },
  {
    inputs: [],
    name: "ForbiddenZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidTotalSupply",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "SuccessfulMint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "UriUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ipfsUri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "updateIPFS",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001e9b38038062001e9b833981016040819052620000349162000284565b6040518060400160405280600c81526020016b141bdc141bdc141bdc10d85d60a21b81525060405180604001604052806002815260200161504360f01b8152506200008e620000886200014f60201b60201c565b62000153565b60016200009c838262000365565b506002620000ab828262000365565b5050506001600160a01b038216620000d65760405163d2fd945360e01b815260040160405180910390fd5b80600003620000f8576040516334bbd58560e01b815260040160405180910390fd5b6001600160a01b038216331462000114576200011482620001a3565b600881905560006009556040805160608101909152603580825262001e666020830139600a9062000146908262000365565b50505062000431565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b620001ad62000226565b6001600160a01b038116620002185760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b620002238162000153565b50565b6000546001600160a01b03163314620002825760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016200020f565b565b600080604083850312156200029857600080fd5b82516001600160a01b0381168114620002b057600080fd5b6020939093015192949293505050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620002eb57607f821691505b6020821081036200030c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200036057600081815260208120601f850160051c810160208610156200033b5750805b601f850160051c820191505b818110156200035c5782815560010162000347565b5050505b505050565b81516001600160401b03811115620003815762000381620002c0565b6200039981620003928454620002d6565b8462000312565b602080601f831160018114620003d15760008415620003b85750858301515b600019600386901b1c1916600185901b1785556200035c565b600085815260208120601f198616915b828110156200040257888601518255948401946001909101908401620003e1565b5085821015620004215787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611a2580620004416000396000f3fe60806040526004361061013a5760003560e01c806370a08231116100bb5780639f181b5e1161007f578063c87b56dd11610059578063c87b56dd1461037a578063e985e9c51461039a578063f2fde38b146103e357600080fd5b80639f181b5e14610324578063a22cb4651461033a578063b88d4fde1461035a57600080fd5b806370a08231146102a7578063715018a6146102c75780638da5cb5b146102dc57806394b5cdec146102fa57806395d89b411461030f57600080fd5b806323b872dd1161010257806323b872dd146102145780632ea5c5871461023457806342842e0e146102545780636352211e146102745780636a6278421461029457600080fd5b806301ffc9a71461013f57806306fdde0314610174578063081812fc14610196578063095ea7b3146101ce57806318160ddd146101f0575b600080fd5b34801561014b57600080fd5b5061015f61015a36600461146c565b610403565b60405190151581526020015b60405180910390f35b34801561018057600080fd5b50610189610455565b60405161016b91906114d9565b3480156101a257600080fd5b506101b66101b13660046114ec565b6104e7565b6040516001600160a01b03909116815260200161016b565b3480156101da57600080fd5b506101ee6101e9366004611521565b61050e565b005b3480156101fc57600080fd5b5061020660085481565b60405190815260200161016b565b34801561022057600080fd5b506101ee61022f36600461154b565b610646565b34801561024057600080fd5b506101ee61024f366004611587565b6106be565b34801561026057600080fd5b506101ee61026f36600461154b565b6106d3565b34801561028057600080fd5b506101b661028f3660046114ec565b6106ee565b6101ee6102a23660046115f9565b610753565b3480156102b357600080fd5b506102066102c23660046115f9565b61080b565b3480156102d357600080fd5b506101ee610891565b3480156102e857600080fd5b506000546001600160a01b03166101b6565b34801561030657600080fd5b506101896108a5565b34801561031b57600080fd5b50610189610933565b34801561033057600080fd5b5061020660095481565b34801561034657600080fd5b506101ee610355366004611614565b610942565b34801561036657600080fd5b506101ee610375366004611666565b610951565b34801561038657600080fd5b506101896103953660046114ec565b6109d0565b3480156103a657600080fd5b5061015f6103b5366004611742565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b3480156103ef57600080fd5b506101ee6103fe3660046115f9565b610ae0565b60006001600160e01b031982166380ac58cd60e01b148061043457506001600160e01b03198216635b5e139f60e01b145b8061044f57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606001805461046490611775565b80601f016020809104026020016040519081016040528092919081815260200182805461049090611775565b80156104dd5780601f106104b2576101008083540402835291602001916104dd565b820191906000526020600020905b8154815290600101906020018083116104c057829003601f168201915b5050505050905090565b60006104f282610b59565b506000908152600560205260409020546001600160a01b031690565b6000610519826106ee565b9050806001600160a01b0316836001600160a01b03160361058b5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806105c557506001600160a01b038116600090815260066020908152604080832033845290915290205460ff165b6106375760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610582565b6106418383610bbd565b505050565b6106503382610c2b565b6106b35760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526d1c881b9bdc88185c1c1c9bdd995960921b6064820152608401610582565b610641838383610ca9565b6106c6610e45565b600a6106418284836117fd565b61064183838360405180602001604052806000815250610951565b6000818152600360205260408120546001600160a01b03168061044f5760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606401610582565b6001600160a01b03811661077a5760405163d2fd945360e01b815260040160405180910390fd5b6008546009541061079e57604051634c0116c960e11b815260040160405180910390fd5b6001600960008282546107b191906118d4565b925050819055506107c481600954610e9f565b600954604080519182526001600160a01b03831660208301527f527efdb0e41693cd8cbb9c6d2d35c8563b7b73cfdd0790d7d2588c893b91b8c6910160405180910390a150565b60006001600160a01b0382166108755760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610582565b506001600160a01b031660009081526004602052604090205490565b610899610e45565b6108a36000610fe1565b565b600a80546108b290611775565b80601f01602080910402602001604051908101604052809291908181526020018280546108de90611775565b801561092b5780601f106109005761010080835404028352916020019161092b565b820191906000526020600020905b81548152906001019060200180831161090e57829003601f168201915b505050505081565b60606002805461046490611775565b61094d338383611031565b5050565b61095b3383610c2b565b6109be5760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526d1c881b9bdc88185c1c1c9bdd995960921b6064820152608401610582565b6109ca848484846110ff565b50505050565b60606109db82610b59565b600082815260076020526040812080546109f490611775565b80601f0160208091040260200160405190810160405280929190818152602001828054610a2090611775565b8015610a6d5780601f10610a4257610100808354040283529160200191610a6d565b820191906000526020600020905b815481529060010190602001808311610a5057829003601f168201915b505050505090506000610a8b60408051602081019091526000815290565b90508051600003610a9d575092915050565b815115610acf578082604051602001610ab79291906118e7565b60405160208183030381529060405292505050919050565b610ad88461117d565b949350505050565b610ae8610e45565b6001600160a01b038116610b4d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610582565b610b5681610fe1565b50565b6000818152600360205260409020546001600160a01b0316610b565760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606401610582565b600081815260056020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610bf2826106ee565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610c37836106ee565b9050806001600160a01b0316846001600160a01b03161480610c7e57506001600160a01b0380821660009081526006602090815260408083209388168352929052205460ff165b80610ad85750836001600160a01b0316610c97846104e7565b6001600160a01b031614949350505050565b826001600160a01b0316610cbc826106ee565b6001600160a01b031614610d205760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610582565b6001600160a01b038216610d825760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610582565b610d8d600082610bbd565b6001600160a01b0383166000908152600460205260408120805460019290610db6908490611916565b90915550506001600160a01b0382166000908152600460205260408120805460019290610de49084906118d4565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6000546001600160a01b031633146108a35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610582565b6001600160a01b038216610ef55760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610582565b6000818152600360205260409020546001600160a01b031615610f5a5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610582565b6001600160a01b0382166000908152600460205260408120805460019290610f839084906118d4565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b816001600160a01b0316836001600160a01b0316036110925760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610582565b6001600160a01b03838116600081815260066020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61110a848484610ca9565b611116848484846111f1565b6109ca5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b6064820152608401610582565b606061118882610b59565b600061119f60408051602081019091526000815290565b905060008151116111bf57604051806020016040528060008152506111ea565b806111c98461133d565b6040516020016111da9291906118e7565b6040516020818303038152906040525b9392505050565b60006001600160a01b0384163b1561133257604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611235903390899088908890600401611929565b6020604051808303816000875af1925050508015611270575060408051601f3d908101601f1916820190925261126d91810190611965565b60015b611318573d80801561129e576040519150601f19603f3d011682016040523d82523d6000602084013e6112a3565b606091505b5080516000036113105760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b6064820152608401610582565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610ad8565b506001949350505050565b6060816000036113645750506040805180820190915260018152600360fc1b602082015290565b8160005b811561138e578061137881611982565b91506113879050600a836119b1565b9150611368565b60008167ffffffffffffffff8111156113a9576113a9611650565b6040519080825280601f01601f1916602001820160405280156113d3576020820181803683370190505b5090505b8415610ad8576113e8600183611916565b91506113f5600a866119c5565b6114009060306118d4565b60f81b818381518110611415576114156119d9565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535061144f600a866119b1565b94506113d7565b6001600160e01b031981168114610b5657600080fd5b60006020828403121561147e57600080fd5b81356111ea81611456565b60005b838110156114a457818101518382015260200161148c565b50506000910152565b600081518084526114c5816020860160208601611489565b601f01601f19169290920160200192915050565b6020815260006111ea60208301846114ad565b6000602082840312156114fe57600080fd5b5035919050565b80356001600160a01b038116811461151c57600080fd5b919050565b6000806040838503121561153457600080fd5b61153d83611505565b946020939093013593505050565b60008060006060848603121561156057600080fd5b61156984611505565b925061157760208501611505565b9150604084013590509250925092565b6000806020838503121561159a57600080fd5b823567ffffffffffffffff808211156115b257600080fd5b818501915085601f8301126115c657600080fd5b8135818111156115d557600080fd5b8660208285010111156115e757600080fd5b60209290920196919550909350505050565b60006020828403121561160b57600080fd5b6111ea82611505565b6000806040838503121561162757600080fd5b61163083611505565b91506020830135801515811461164557600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561167c57600080fd5b61168585611505565b935061169360208601611505565b925060408501359150606085013567ffffffffffffffff808211156116b757600080fd5b818701915087601f8301126116cb57600080fd5b8135818111156116dd576116dd611650565b604051601f8201601f19908116603f0116810190838211818310171561170557611705611650565b816040528281528a602084870101111561171e57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561175557600080fd5b61175e83611505565b915061176c60208401611505565b90509250929050565b600181811c9082168061178957607f821691505b6020821081036117a957634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561064157600081815260208120601f850160051c810160208610156117d65750805b601f850160051c820191505b818110156117f5578281556001016117e2565b505050505050565b67ffffffffffffffff83111561181557611815611650565b611829836118238354611775565b836117af565b6000601f84116001811461185d57600085156118455750838201355b600019600387901b1c1916600186901b1783556118b7565b600083815260209020601f19861690835b8281101561188e578685013582556020948501946001909201910161186e565b50868210156118ab5760001960f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561044f5761044f6118be565b600083516118f9818460208801611489565b83519083019061190d818360208801611489565b01949350505050565b8181038181111561044f5761044f6118be565b60006001600160a01b0380871683528086166020840152508360408301526080606083015261195b60808301846114ad565b9695505050505050565b60006020828403121561197757600080fd5b81516111ea81611456565b600060018201611994576119946118be565b5060010190565b634e487b7160e01b600052601260045260246000fd5b6000826119c0576119c061199b565b500490565b6000826119d4576119d461199b565b500690565b634e487b7160e01b600052603260045260246000fdfea26469706673582212208f2b69958e7d78899f074e07d4a9aeaa5f13effe5775e833113422e236a5427864736f6c63430008110033697066733a2f2f516d646475657561484b576e795a535461565265587158486855746736674445654b5a51744734456b6e39454d64";

type PopCatConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PopCatConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PopCat__factory extends ContractFactory {
  constructor(...args: PopCatConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _ownerAddress: PromiseOrValue<string>,
    _totalSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PopCat> {
    return super.deploy(
      _ownerAddress,
      _totalSupply,
      overrides || {}
    ) as Promise<PopCat>;
  }
  override getDeployTransaction(
    _ownerAddress: PromiseOrValue<string>,
    _totalSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _ownerAddress,
      _totalSupply,
      overrides || {}
    );
  }
  override attach(address: string): PopCat {
    return super.attach(address) as PopCat;
  }
  override connect(signer: Signer): PopCat__factory {
    return super.connect(signer) as PopCat__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PopCatInterface {
    return new utils.Interface(_abi) as PopCatInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): PopCat {
    return new Contract(address, _abi, signerOrProvider) as PopCat;
  }
}

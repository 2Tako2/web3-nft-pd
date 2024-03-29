/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface IPopCatInterface extends utils.Interface {
  functions: {
    "mint(address)": FunctionFragment;
    "updateIPFS(string)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "mint" | "updateIPFS"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "mint",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateIPFS",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updateIPFS", data: BytesLike): Result;

  events: {
    "SuccessfulMint(uint256,address)": EventFragment;
    "UriUpdated()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SuccessfulMint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UriUpdated"): EventFragment;
}

export interface SuccessfulMintEventObject {
  _tokenId: BigNumber;
  _to: string;
}
export type SuccessfulMintEvent = TypedEvent<
  [BigNumber, string],
  SuccessfulMintEventObject
>;

export type SuccessfulMintEventFilter = TypedEventFilter<SuccessfulMintEvent>;

export interface UriUpdatedEventObject {}
export type UriUpdatedEvent = TypedEvent<[], UriUpdatedEventObject>;

export type UriUpdatedEventFilter = TypedEventFilter<UriUpdatedEvent>;

export interface IPopCat extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPopCatInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    mint(
      _to: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateIPFS(
      _uri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  mint(
    _to: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateIPFS(
    _uri: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    mint(_to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    updateIPFS(
      _uri: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "SuccessfulMint(uint256,address)"(
      _tokenId?: null,
      _to?: null
    ): SuccessfulMintEventFilter;
    SuccessfulMint(_tokenId?: null, _to?: null): SuccessfulMintEventFilter;

    "UriUpdated()"(): UriUpdatedEventFilter;
    UriUpdated(): UriUpdatedEventFilter;
  };

  estimateGas: {
    mint(
      _to: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateIPFS(
      _uri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    mint(
      _to: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateIPFS(
      _uri: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

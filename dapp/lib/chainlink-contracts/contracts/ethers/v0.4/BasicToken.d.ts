/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface BasicTokenInterface extends Interface {
  functions: {
    totalSupply: TypedFunctionDescription<{ encode([]: []): string }>;

    balanceOf: TypedFunctionDescription<{ encode([_owner]: [string]): string }>;

    transfer: TypedFunctionDescription<{
      encode([_to, _value]: [string, BigNumberish]): string;
    }>;
  };

  events: {
    Transfer: TypedEventDescription<{
      encodeTopics([from, to, value]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;
  };
}

export class BasicToken extends Contract {
  connect(signerOrProvider: Signer | Provider | string): BasicToken;
  attach(addressOrName: string): BasicToken;
  deployed(): Promise<BasicToken>;

  on(event: EventFilter | string, listener: Listener): BasicToken;
  once(event: EventFilter | string, listener: Listener): BasicToken;
  addListener(eventName: EventFilter | string, listener: Listener): BasicToken;
  removeAllListeners(eventName: EventFilter | string): BasicToken;
  removeListener(eventName: any, listener: Listener): BasicToken;

  interface: BasicTokenInterface;

  functions: {
    totalSupply(): Promise<BigNumber>;

    balanceOf(_owner: string): Promise<BigNumber>;

    transfer(
      _to: string,
      _value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  totalSupply(): Promise<BigNumber>;

  balanceOf(_owner: string): Promise<BigNumber>;

  transfer(
    _to: string,
    _value: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    Transfer(from: string | null, to: string | null, value: null): EventFilter;
  };

  estimate: {
    totalSupply(): Promise<BigNumber>;

    balanceOf(_owner: string): Promise<BigNumber>;

    transfer(_to: string, _value: BigNumberish): Promise<BigNumber>;
  };
}
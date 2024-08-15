import { useEffect, useState } from "react";
import { BettingContract } from "../wrappers/BettingContract";
import { useTonClient } from "./useTonClient";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { Address, OpenedContract } from "@ton/core";
import { CONTRACT_ADDRESS } from "@/utils/config";

export function useBettingContract() {
  const client = useTonClient();
  const [contractData, setContractData] = useState<null | {
    betsCounter: number;
  }>();

  const bettingContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = BettingContract.fromAddress(Address.parse(CONTRACT_ADDRESS))
    return client.open(contract) as OpenedContract<BettingContract>;
  }, [client]);

  useEffect(() => {
    async function getValue() {
      if (!bettingContract) return;
      setContractData(null);
      const val = await bettingContract.getBetsCounter();
      setContractData({
        betsCounter: Number(val),
      });
    }
    getValue();
  }, [bettingContract]);

  return {
    // contract_address: bettingContract?.address.toString(),
    ...contractData,
  };
}
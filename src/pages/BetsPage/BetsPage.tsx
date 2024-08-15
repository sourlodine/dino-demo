import { useRef, useState, type FC } from "react";

import { shuffleArray } from "@/utils/helpers";
import { semiFinalists, realFinalists } from "@/utils/constants";
import { Team } from "@/components/Team";
import { FilterButtons } from "@/components/FilterButtons";
import {
  TonConnectButton,
  useTonConnectUI,
  useTonWallet,
} from "@tonconnect/ui-react";

import shuffleIcon from "./../../../assets/shuffle-icon.png";
import infoIcon from "./../../../assets/info-icon.png";
import { InfoPopup } from "@/components/InfoPopup";
import { useTonConnect } from "../../hooks/useTonConnect";
import { useBettingContract } from "@/hooks/useBettingContract";
import { GameState } from "@/states/GameState";
import { Dino } from "react-dino-game";

export const BetsPage: FC = () => {
  const [shuffledArray, setShuffledArray] = useState(() =>
    shuffleArray(realFinalists)
  );
  const [isInfoPopupVisible, setIsInfoPopupVisible] = useState(true);

  const shuffle = () => {
    setShuffledArray(() => shuffleArray([...realFinalists]));
  };

  const filterAndShuffle = (filterBy: string) => {
    const filteredArray = realFinalists.filter(
      (team) => team.place === filterBy
    );
    setShuffledArray(() => shuffleArray([...filteredArray]));
  };

  const { connected } = useTonConnect();
  const { betsCounter } = useBettingContract();

  return (
    <>
      <div className="bg-gray-100 w-full h-screen flex flex-col items-center justify-center">
        <div className="flex flex-row m-4 justify-between">
          <TonConnectButton />
        </div>
        {connected && <Dino />}
        {/* <FilterButtons onFilter={filterAndShuffle} /> */}
      </div>
      {/* {isInfoPopupVisible && (
        <InfoPopup onClose={() => setIsInfoPopupVisible(false)} />
      )} */}
    </>
  );
};

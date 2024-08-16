import { useEffect, useRef, useState, type FC } from "react";

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
import DinoGame from "react-chrome-dino-ts";
import "react-chrome-dino-ts/index.css";

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

  function handleEvent(event: any) {
    // Do something in response to the event
    console.log("Event occurred:", event.type);
    const spaceEvent = new KeyboardEvent("keydown", {
      key: " ",
      code: "Space",
      keyCode: 32, // Deprecated but may be needed in some environments
      which: 32, // Deprecated but may also be needed
      bubbles: true,
      cancelable: true,
    });

    // Dispatch the event to the document or a specific element
    document.dispatchEvent(spaceEvent);
  }

  return (
    <>
      <div className="bg-gray-100 w-full h-screen flex flex-col items-center justify-center">
        <div className="flex flex-row m-4 justify-between">
          <TonConnectButton />
        </div>
        {connected && (
          <div onClick={handleEvent}>
            <DinoGame />
          </div>
        )}
        {/* <FilterButtons onFilter={filterAndShuffle} /> */}
      </div>
      {/* {isInfoPopupVisible && (
        <InfoPopup onClose={() => setIsInfoPopupVisible(false)} />
      )} */}
    </>
  );
};

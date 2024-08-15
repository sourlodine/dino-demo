import { useEffect, useState, type FC } from "react";
import cls from 'classnames';

import rocketIcon from "../../assets/rocket.png";
import { useTonConnect } from "@/hooks/useTonConnect";

interface TeamProps {
  teamName: string;
  teamLink: string;
  teamMVP: string;
  teamTrack: string;
}

export const Team: FC<TeamProps> = ({
  teamName,
  teamLink,
  teamMVP,
  teamTrack,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { connected } = useTonConnect();

  const handleBackground = (teamTrack: string) => {
    if (teamTrack === "Social Web3") {
      return "bg-sky-500";
    }
    if (teamTrack === "eCommerce") {
      return "bg-rose-500";
    }
    if (teamTrack === "Onboarding systems and games") {
      return "bg-yellow-300";
    }
    if (teamTrack === "DeFi") {
      return "bg-green-400";
    }
  };

  return (
    <li
      className={`${
        isOpen ? "bg-gray-300" : "bg-gray-100"
      } w-full flex flex-col border-gray-200 border p-4`}
      onClick={() => !isOpen && setIsOpen(!isOpen)}
    >
      <p className="text-[18px] font-bold text-gray-900 p-2 truncate">
        {teamName}
      </p>
      {isOpen && (
        <>
          <a
            className="text-[18px] font-bold  p-2 text-blue-500 truncate"
            href={teamLink}
            target="_blank"
          >
            {teamLink}
          </a>
          <a
            className="text-[18px] font-bold text-blue-500 p-2 truncate"
            href={teamMVP}
            target="_blank"
          >
            {teamMVP}
          </a>
          <p
            className={`text-[18px] font-bold ${handleBackground(
              teamTrack
            )} text-white p-2`}
            text-white
          >
            {teamTrack}
          </p>
          <button
            className={cls({
              "flex items-center justify-center gap-2": true,
              "text-[18px] font-bold text-white": !connected,
              
              "border border-white rounded-full": !connected,
              "border border-sky-500 rounded-full": connected,
              "text-[18px] font-bold text-sky-500": connected,
              "p-2 mt-2": true,
            })}
            disabled={!connected}
            onClick={() => console.log("connected", connected)}
          >
            Ты победишь <img className="w-8 h-8" src={rocketIcon} />
            (1 TON)
          </button>
        </>
      )}
    </li>
  );
};

import { FC } from "react";

interface InfoPopupProps {
  onClose: () => void;
}

export const InfoPopup: FC<InfoPopupProps> = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div
      className="fixed top-5 left-1/2 transform -translate-x-1/2 
                bg-sky-600 bg-opacity-80 text-white px-6 py-8 rounded-lg
                max-w-md w-11/12 "
      onClick={() => onClose()}
    >
      <h2 className="text-2xl font-semibold mb-4">Как это работает?</h2>
      <p className="text-lg mb-3">
        🥷 В приложении собраны полуфиналисты хакатона открытой лиги. Можно
        отфильтровать проекты по трэку, почекать описание проекта и MVP
      </p>
      <p className="text-lg mb-0">
        🚀 Считаешь что проект пройдёт в финал? Проголосуй за
        него (1 TON), все кто угадали финалистов разделят пул всех голосов
        пропорционально количеству голосов, fee 10%{" "}
        <span className="text-red-500">(контракт пока в разработке)</span>
      </p>
      <div className="flex flex-col">
        <a
          className="text-lg mb-3 text-yellow-300  border-b p-1 w-full"
          href="https://t.me/alefmanv"
          target="_blank"
        >
          ✍️ канал хакатона
        </a>
        <a
          className="text-lg mb-3 text-yellow-300  p-1 border-b w-full"
          href="https://t.me/hackaTONvotes"
          target="_blank"
        >
          ✍️ канал приложения
        </a>
      </div>
    </div>
    </div>
    
  );
};

"use client";
import { useState } from "react";
import Introduction from "./Introduction";
import TechStack from "./TechStack";
import Structure from "./Structure";
import MainFunction from "./MainFunction";
import Perfomance from "./Perfomance";
import Retrospective from "./Retrospective";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    title: "Project Introduction",
    content: <Introduction />,
  },
  {
    id: 2,
    title: "Tech Stack",
    content: <TechStack />,
  },
  {
    id: 3,
    title: "프로젝트 구성",
    content: <Structure />,
  },
  {
    id: 4,
    title: "주요 기능",
    content: <MainFunction />,
  },
  {
    id: 5,
    title: "성능 최적화",
    content: <Perfomance />,
  },
  {
    id: 6,
    title: "Retrospective",
    content: <Retrospective />,
  },
];

export default function PortfolioPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const paginate = (newDirection: number) => {
    setCurrentSlide(
      (prev) => (prev + newDirection + slides.length) % slides.length
    );
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-50 overflow-hidden">
      <div className="w-[90%] h-[80%] flex">{slides[currentSlide].content}</div>

      {/* Navigation */}
      <div className="flex items-center gap-8 mt-8">
        <button
          onClick={() => paginate(-1)}
          className="px-6 py-3 bg-gray-400 text-white rounded-lg hover:bg-primary 
                       transition-colors text-xl disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentSlide === 0}
        >
          <FaArrowLeft className="w-6 h-6" />
        </button>
        <div className="text-lg font-medium text-gray-800">
          {currentSlide + 1} / {slides.length}
        </div>
        <button
          onClick={() => paginate(1)}
          className="px-6 py-3 bg-gray-400 text-white rounded-lg hover:bg-primary
                       transition-colors text-xl disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentSlide === slides.length - 1}
        >
          <FaArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

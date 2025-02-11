import Image from "next/image";
import { useState } from "react";

export default function Structure() {
  const [activeTab, setActiveTab] = useState("architecture");

  return (
    <div className="space-y-6 w-full">
      <h2 className="text-3xl font-bold text-primary border-b border-primary pb-6">
        프로젝트 구성
      </h2>

      <div className="space-y-6">
        {/* Tabs */}
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors
                ${
                  activeTab === "architecture"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
          >
            아키텍처
          </button>
          <button
            onClick={() => setActiveTab("erd")}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors
                ${
                  activeTab === "erd"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
          >
            ERD
          </button>
        </div>

        {/* Content */}
        <div className="relative w-[75%] h-[500px] bg-white rounded-lg shadow-lg shadow-primary">
          {activeTab === "architecture" ? (
            <Image
              src="https://mini1018-image.s3.ap-northeast-2.amazonaws.com/profiles/%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90.png"
              alt="Architecture"
              fill
              className="object-contain p-4"
            />
          ) : (
            <Image
              src="https://mini1018-image.s3.ap-northeast-2.amazonaws.com/profiles/ERD.svg"
              alt="ERD Diagram"
              fill
              className="object-contain p-4"
            />
          )}
        </div>
      </div>
    </div>
  );
}

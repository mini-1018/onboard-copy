import { useState } from "react";
import {
  FaChartLine,
  FaLightbulb,
  FaQuestion,
  FaQuestionCircle,
} from "react-icons/fa";

export default function Retrospective() {
  const [activeTab, setActiveTab] = useState("troubles");
  return (
    <div className="space-y-8 w-full">
      <h2 className="text-3xl font-bold text-primary border-b border-primary pb-6">
        프로젝트 회고
      </h2>

      {/* Tabs */}
      <div className="flex gap-4">
        <button
          onClick={() => setActiveTab("troubles")}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center
            ${
              activeTab === "troubles"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
        >
          <FaQuestion className="mr-1" /> Problems
        </button>
        <button
          onClick={() => setActiveTab("solutions")}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center
            ${
              activeTab === "solutions"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
        >
          <FaLightbulb className="mr-1" /> Solutions
        </button>
        <button
          onClick={() => setActiveTab("lessons")}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center
            ${
              activeTab === "lessons"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
        >
          <FaChartLine className="mr-1" /> Enhancements
        </button>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg p-8 shadow-lg min-h-[400px] shadow-primary">
        {activeTab === "troubles" && (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary flex items-center">
              <FaQuestion className="mr-1" /> 문제
            </h3>

            <ul className="space-y-4 list-disc list-inside text-gray-600 text-lg">
              <li>
                <span className="font-semibold">백엔드 고부하 한계</span>
                <p className="ml-6 mt-1 text-sm">
                  t2.micro 인스턴스의 단일 코어 성능 한계로 인해 고부하 상황에서
                  여러 문제가 발생할 수 있음을 고민하였습니다.
                </p>
              </li>
              <li>
                <span className="font-semibold">
                  미사용 S3 이미지 데이터 문제
                </span>
                <p className="ml-6 mt-1 text-sm">
                  프로필 수정 및 게시글 수정으로 인하여 더 이상 사용하지 않는
                  데이터가 추가만되고 삭제되지는 않는 점을 개선하기 위해
                  고민하였습니다.
                </p>
              </li>
              <li>
                <span className="font-semibold">
                  외부 의존성과 데이터베이스 간의 분산 트랜잭션 원자성 보장 문제
                </span>
                <p className="ml-6 mt-1 text-sm">
                  S3 이미지 삭제와 데이터베이스 삭제 로직의 원자성과 데이터
                  일관성 보장을 위해 고민하였습니다.
                </p>
              </li>
            </ul>
          </div>
        )}

        {activeTab === "solutions" && (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary flex items-center">
              <FaLightbulb className="mr-1" /> 해결 방법
            </h3>

            <ul className="space-y-4 list-disc list-inside text-gray-600 text-lg">
              <li>
                <span className="font-semibold">
                  데이터베이스 리미트 설정 및 캐시 전략
                </span>
                <p className="ml-6 mt-1 text-sm">
                  단일 코어 환경의 한계를 고려하여, 부하를 줄이기 위한 방안으로
                  postgreSQL의 limit size를 5로 설정하고, 인메모리 캐시 전략을
                  도입하였습니다.
                </p>
              </li>

              <li>
                <span className="font-semibold">이미지 테이블 관리</span>
                <p className="ml-6 mt-1 text-sm">
                  status 컬럼을 boolean 타입으로 설정하여 이미지의 사용 여부를
                  구분하였고 매일 정해진 시간에 cron을 사용해 status가 false인
                  이미지를 자동으로 삭제하도록 설정하였습니다.
                </p>
              </li>
              <li>
                <span className="font-semibold">Outbox 패턴 적용</span>
                <p className="ml-6 mt-1 text-sm">
                  S3 이미지 삭제와 데이터베이스 삭제의 원자성을 보장하기 위해
                  Outbox 패턴을 적용하였습니다. 이벤트 타입과 페이로드를 통한
                  식별, 재시도 횟수 관리, 상태 추적으로 안정적인 장애 복구와
                  모니터링을 구현하였습니다.
                </p>
              </li>
            </ul>
          </div>
        )}

        {activeTab === "lessons" && (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary flex items-center">
              <FaChartLine className="mr-1" /> 개선할 점
            </h3>
            <ul className="space-y-4 list-disc list-inside text-gray-600 text-lg">
              <li>
                <span className="font-semibold">다양한 백엔드 전략</span>
                <p className="ml-6 mt-1 text-sm">
                  이번 고부하 대책을 통해 제한된 인프라 상황에서 여러 백엔드
                  전략을 고민하였고 더 나은 성능을 위해 다음과 같은 방안을
                  계획하였습니다.
                </p>
                <p className="ml-8 mt-1 text-xs">
                  -Scale-up/out 전략: 더 많은 유저를 지원하기 위해 인스턴스 성능
                  향상(Scale-up)또는 로드 밸런싱을 통한 수평적 확장(Scale-out)
                  구현
                </p>

                <p className="ml-8 mt-1 text-xs">
                  -Redis 활용: 트랜잭션이 빈번하거나 외부 데이터를 추가해야 하는
                  경우, Redis를 활용한 큐 전략과 캐시 전략 도입
                </p>
              </li>
              <li>
                <span className="font-semibold">에러 처리</span>
                <p className="ml-6 mt-1 text-sm">
                  데이터 응답 에러 메시지 세분화를 통해 사용자가 더 나은 경험을
                  할 수 있도록 계획하였습니다.
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

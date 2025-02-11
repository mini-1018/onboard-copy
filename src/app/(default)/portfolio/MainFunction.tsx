import { useState } from "react";

export default function MainFunction() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <div className="space-y-8 w-full">
      <h2 className="text-3xl font-bold text-primary border-b border-primary pb-6">
        적용 기능
      </h2>

      {/* Tabs */}
      <div className="flex gap-4">
        <button
          onClick={() => setActiveTab("frontend")}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors
              ${
                activeTab === "frontend"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
        >
          프론트엔드
        </button>
        <button
          onClick={() => setActiveTab("backend")}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors
              ${
                activeTab === "backend"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
        >
          백엔드
        </button>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg p-8 shadow-lg min-h-[400px] shadow-primary">
        {activeTab === "frontend" ? (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">
              프론트엔드 주요 기능
            </h3>
            <div className="space-y-6">
              <ul className="space-y-4 list-disc list-inside text-gray-600 text-lg">
                <li>
                  <span className="font-semibold">SSR 데이터 최적화</span>
                  <p className="ml-6 mt-1">
                    React Query Initial Data를 활용하여 초기 로딩 속도 개선
                  </p>
                </li>
                <li>
                  <span className="font-semibold">
                    무한 스크롤 페이지네이션
                  </span>
                  <p className="ml-6 mt-1">
                    - 초기 데이터 요청을 최소화하여 로딩 속도 개선
                  </p>
                  <p className="ml-6 mt-1">
                    - 사용자 경험을 향상시키기 위한 무한 스크롤 방식 구현
                  </p>
                </li>
                <li>
                  <span className="font-semibold">상태 관리 최적화</span>
                  <p className="ml-6 mt-1">
                    Zustand를 활용한 게시글 수정 데이터 관리로 불필요한 API 요청
                    최소화
                  </p>
                </li>
                <li>
                  <span className="font-semibold">이미지 및 SEO 최적화</span>
                  <p className="ml-6 mt-1">
                    Next.js Image 컴포넌트와 메타태그를 활용한 성능 및 검색
                    최적화
                  </p>
                </li>
                <li>
                  <span className="font-semibold">반응형 디자인</span>
                  <p className="ml-6 mt-1">
                    사용자 경험을 고려하여 Tailwind CSS로 반응형 디자인 구현
                  </p>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">
              백엔드 주요 기능
            </h3>
            <div className="space-y-6">
              <ul className="space-y-4 list-disc list-inside text-gray-600 text-lg">
                <li>
                  <span className="font-semibold">Outbox Pattern</span>
                  <p className="ml-6 mt-1">
                    - S3 이미지 삭제와 DB 데이터 삭제의 원자성 보장을 위한
                    아웃박스 패턴 적용
                  </p>
                  <p className="ml-6 mt-1">
                    - 비동기 이벤트 처리로 데이터 일관성 확보 및 장애 복구
                    메커니즘 구현
                  </p>
                  <p className="ml-6 mt-1">- 이벤트 처리 상태 모니터링</p>
                </li>
                <li>
                  <span className="font-semibold">쿼리 최적화</span>
                  <p className="ml-6 mt-1">
                    Prisma Select를 활용하여 필요한 데이터만 조회함으로써 응답
                    시간 단축
                  </p>
                </li>
                <li>
                  <span className="font-semibold">캐싱 전략</span>
                  <p className="ml-6 mt-1">
                    효율적인 캐싱 전략 적용으로 서버 부하 감소 및 응답 속도 개선
                  </p>
                </li>
                <li>
                  <span className="font-semibold">모듈화 및 의존성 주입</span>
                  <p className="ml-6 mt-1">
                    NestJS를 활용한 체계적인 모듈화와 의존성 주입으로 개발
                    생산성 향상
                  </p>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <div className="space-y-8 w-full">
      <h2 className="text-3xl font-bold text-primary border-b border-primary pb-6">
        기술 스택
      </h2>
      <p className="text-primary text-lg">
        프로젝트에 활용된 기술 스택입니다. 각 카드에 마우스를 올리시면 기술
        선택의 이유를 확인하실 수 있습니다.
      </p>

      <div className="flex justify-between gap-6 w-full">
        <div className="group p-6 space-y-4 rounded-xl shadow-lg hover:shadow-primary transition-all bg-white/50 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-primary">Frontend</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center">
              <img
                src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
                alt="Next.js"
                className="transition-transform group-hover:scale-105"
              />
              <span className="ml-3 opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-sm text-gray-600">
                서버 컴포넌트를 통한 최적화
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
                alt="TypeScript"
                className="transition-transform group-hover:scale-105"
              />
              <span className="ml-3 opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-sm text-gray-600 delay-[50ms]">
                타입 안정성 확보
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                alt="TailwindCSS"
                className="transition-transform group-hover:scale-105"
              />
              <span className="ml-3 opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-sm text-gray-600 delay-[100ms]">
                빠른 스타일링
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white"
                alt="React Query"
                className="transition-transform group-hover:scale-105"
              />
              <span className="ml-3 opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-sm text-gray-600 delay-[150ms]">
                데이터 페칭 최적화
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="https://img.shields.io/badge/zustand-orange?style=for-the-badge&logo=zustand&logoColor=white"
                alt="zustand"
                className="transition-transform group-hover:scale-105"
              />
              <span className="ml-3 opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-sm text-gray-600 delay-[200ms]">
                효율적인 프론트엔드 상태 관리
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white"
                alt="Zod"
                className="transition-transform group-hover:scale-105"
              />
              <span className="ml-3 opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-sm text-gray-600 delay-[250ms]">
                타입스크립트 기반 스키마 검증
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white"
                alt="React Hook Form"
                className="transition-transform group-hover:scale-105"
              />
              <span className="ml-3 opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-sm text-gray-600 delay-[300ms]">
                폼 상태 관리 효율화
              </span>
            </div>
          </div>
        </div>

        <div className="group p-6 space-y-4 rounded-xl shadow-lg hover:shadow-primary transition-all bg-white/50 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-primary">Backend</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center">
              <img
                src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white"
                alt="NestJS"
                className="transition-transform group-hover:scale-105"
              />
              <span className="ml-3 opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-sm text-gray-600">
                의존성 주입 및 모듈화
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                alt="NodeJS"
                className="transition-transform group-hover:scale-105"
              />
              <span className="ml-3 opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-sm text-gray-600 delay-[50ms]">
                JavaScript 런타임 환경제공
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"
                alt="Prisma"
                className="transition-transform group-hover:scale-105"
              />
              <span className="ml-3 opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-sm text-gray-600 delay-[100ms]">
                타입 안전성과 현대적인 ORM
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white"
                alt="Nginx"
                className="transition-transform group-hover:scale-105"
              />
              <span className="ml-3 opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-sm text-gray-600 delay-[150ms]">
                리버스 프록시
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="https://img.shields.io/badge/PM2-black?style=for-the-badge&logo=PM2&logoColor=white"
                alt="PM2"
                className="transition-transform group-hover:scale-105"
              />
              <span className="ml-3 opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-sm text-gray-600 delay-[200ms]">
                Node.js 프로세스 매니저
              </span>
            </div>
          </div>
        </div>

        <div className="group p-6 space-y-4 rounded-xl shadow-lg hover:shadow-primary transition-all bg-white/50 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-primary">Database</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center">
              <img
                src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
                alt="Postgres"
                className="transition-transform group-hover:scale-105"
              />
              <span className="ml-3 opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-sm text-gray-600">
                강력한 오픈소스 관계형 데이터베이스
              </span>
            </div>
          </div>
        </div>

        <div className="group p-6 space-y-4 rounded-xl shadow-lg hover:shadow-primary transition-all bg-white/50 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-primary">Others</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center">
              <img
                src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"
                alt="AWS"
                className="transition-transform group-hover:scale-105"
              />
              <span className="ml-3 opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-sm text-gray-600">
                클라우드 인프라
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="https://img.shields.io/badge/EC2-red?style=for-the-badge&logo=PM2&logoColor=white"
                alt="EC2"
                className="transition-transform group-hover:scale-105"
              />
              <span className="ml-3 opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-sm text-gray-600 delay-[50ms]">
                IaaS 방식의 서버 호스팅
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="https://img.shields.io/badge/Amazon%20S3-FF9900?style=for-the-badge&logo=amazons3&logoColor=white"
                alt="Amazon S3"
                className="transition-transform group-hover:scale-105"
              />
              <span className="ml-3 opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-sm text-gray-600 delay-[100ms]">
                높은 내구성의 파일 스토리지
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
                alt="Git"
                className="transition-transform group-hover:scale-105"
              />
              <span className="ml-3 opacity-0 -translate-x-3 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-sm text-gray-600 delay-[150ms]">
                버전 관리
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

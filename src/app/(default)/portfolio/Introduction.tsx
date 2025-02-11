import Image from "next/image";

export default function Introduction() {
  return (
    <div className="space-y-6 w-full">
      <div className="flex gap-4 items-end border-b border-primary pb-6">
        <Image
          src="/images/onboard-large.png"
          alt="onboard"
          width={200}
          height={100}
        />
        <p className="text-sm font-bold text-gray-500">
          개발 기간: 2025.01.15 ~ 현재 / 1인 개발
        </p>
      </div>
      <div className="w-full flex gap-20">
        <div className="w-[50%]">
          <div className="h-full">
            <div className="space-y-6 h-full">
              <div className="h-full shadow-sm py-5 px-9 rounded-lg shadow-primary">
                <h2 className="text-3xl font-semibold text-primary">
                  About Me
                </h2>
                <div>
                  <div className="flex gap-10">
                    <Image
                      src="https://mini1018-image.s3.ap-northeast-2.amazonaws.com/profiles/%EC%95%88%EC%9E%AC%EB%AF%BC.jpg"
                      alt="profile"
                      width={150}
                      height={100}
                    />
                    <div className="text-gray-600 leading-relaxed w-[70%]">
                      <p className="text-lg font-bold text-center">
                        "인내외양(忍耐外揚) 개발자 안재민입니다."
                      </p>
                      <br />
                      <p>
                        "불가능해 보이는 문제도 인내와 의지만 있다면 해결할 수
                        있다"는 신념으로 성장해온 개발자입니다. 9년간의 군
                        생활에서 선임자 없이 새로운 업무를 맡아 성공적으로
                        수행한 경험들은 빠른 적응력과 자기주도적 문제해결 능력을
                        키워주었습니다. 이러한 경험을 토대로 개발자에게 필요한{" "}
                        <span className="font-bold">세 가지</span> 핵심 역량을
                        갖추었습니다.
                      </p>
                    </div>
                  </div>
                  <div>
                    <ul className="space-y-4 mt-4">
                      <li>
                        <p className="font-bold">⦁ 첫째, 효율성입니다.</p>
                        <p>
                          - 효율적인 개발을 통해 개인 프로젝트 'OnBoard'에서
                          LightHouse 성능 지표 평균 99점을 달성했으며, 부하
                          테스트(VUs 1000)에서 평균 응답속도 2.27ms의 성능을
                          실현하였습니다.
                        </p>
                      </li>

                      <li>
                        <p className="font-bold">
                          ⦁ 둘째, 커뮤니케이션 능력입니다.
                        </p>
                        <p>
                          - 3회의 팀 프로젝트에서 90% 이상의 긍정적인 피어리뷰를
                          받았으며, 효과적인 의사소통으로 팀의 생산성 향상에
                          기여했습니다.
                        </p>
                      </li>

                      <li>
                        <p className="font-bold">
                          ⦁ 셋째, 강한 책임감과 조직 적응력입니다.
                        </p>
                        <p>
                          - 9년의 군 복무 기간 동안 다양한 임무를 완수하며
                          책임감과 조직 내 협업의 가치를 체화했습니다.
                        </p>
                      </li>
                    </ul>

                    <p className="mt-4">
                      이러한 역량들을 바탕으로 최적화된 서비스를 구현하고
                      팀원들과 효과적으로 소통하며 맡은 업무를 책임감있게
                      수행함으로써 귀사의 발전에 기여하고자 합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[50%] space-y-4">
          <div className="flex gap-5">
            <div className="w-[50%] shadow-sm py-5 px-10 rounded-lg shadow-primary">
              <h2 className="text-2xl font-semibold text-primary">Contact</h2>
              <div className="space-y-3">
                <p className="text-lg font-bold">Site</p>
                <a href="https://onbrd.kr" target="_blank" rel="noreferrer">
                  https://onbrd.kr
                </a>
                <p className="text-lg font-bold">Github</p>
                <a
                  href="https://github.com/mini-1018"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/mini-1018
                </a>
                <p className="text-lg font-bold">Email</p>
                <a
                  href="mailto:anjaemin1018@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  anjaemin1018@gmail.com
                </a>
              </div>
            </div>
            <div className="shadow-sm py-5 px-10 rounded-lg shadow-primary w-[50%]">
              <h2 className="text-2xl font-bold text-primary">Contents</h2>

              <ul className="space-y-1 text-gray-700 text-lg">
                <li>1. 소개</li>
                <li>2. 기술스택</li>
                <li>3. 프로젝트 구성</li>
                <li>4. 적용 기능</li>
                <li>5. 성능 최적화</li>
                <li>6. 회고</li>
              </ul>
            </div>
          </div>
          <div className="w-full p-4 px-10 bg-white rounded-lg shadow-primary space-y-4 h-[310px]">
            <h2 className="text-2xl font-semibold text-primary">Description</h2>
            <div className="text-gray-600 leading-relaxed">
              <p>
                OnBoard는 개발자들이 코딩 과정에서 겪은 문제나 고민을 공유하고,
                해결되지 않은 질문을 자유롭게 나눌 수 있는 커뮤니티입니다.
              </p>
              <p className="mt-4">
                사이트 이름인 OnBoard는 게시판(Board)과 '승선'(On Board)의
                중의적 의미를 담고 있으며, 돛의 모양은 태그를 형상화하였습니다.
                많은 개발자들과 함께 코딩항해를 하고자 하는 마음을 담아
                기획하였습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

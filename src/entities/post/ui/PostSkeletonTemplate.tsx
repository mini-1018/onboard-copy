export default function PostSkeletonTemplate() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-x-[14px] gap-y-[20px]">
      {Array.from({ length: 20 }, (_, index) => (
        <div
          className="flex flex-col items-center justify-center w-[310px] h-[400px] rounded-lg shadow-primary animate-pulse"
          key={index}
        >
          <div className="w-full h-[200px] rounded-t-lg bg-gradient-custom bg-custom animate-shimmer" />
          <div className="flex flex-col justify-between w-full h-[200px] p-4 space-y-4">
            {/* 제목 스켈레톤 */}
            <div className="h-6 w-3/4 bg-gradient-custom bg-custom animate-shimmer rounded" />

            {/* 내용 스켈레톤 */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-gradient-custom bg-custom animate-shimmer rounded" />
              <div className="h-4 w-full bg-gradient-custom bg-custom animate-shimmer rounded" />
              <div className="h-4 w-2/3 bg-gradient-custom bg-custom animate-shimmer rounded" />
            </div>

            {/* 작성자 정보 스켈레톤 */}
            <div className="flex justify-between w-full">
              <div className="h-4 w-20 bg-gradient-custom bg-custom animate-shimmer rounded" />
              <div className="h-4 w-10 bg-gradient-custom bg-custom animate-shimmer rounded" />
            </div>

            {/* 날짜와 댓글 수 스켈레톤 */}
            <div className="flex justify-between w-full">
              <div className="h-4 w-24 bg-gradient-custom bg-custom animate-shimmer rounded" />
              <div className="h-4 w-10 bg-gradient-custom bg-custom animate-shimmer rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

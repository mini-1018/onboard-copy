export default function PostListSkeletonTemplate() {
  return (
    <div className="flex flex-col w-full gap-y-[35px]">
      {Array.from({ length: 5 }, (_, index) => (
        <div
          className="w-full p-4 bg-white rounded-lg shadow-md mb-4"
          key={index}
        >
          <div className="w-full h-[300px] relative rounded-md overflow-hidden mb-4 bg-gradient-custom bg-custom animate-shimmer" />
          <div>
            <div className="h-6 bg-gradient-custom bg-custom animate-shimmer rounded w-3/4 mb-2" />
            <div className="space-y-2 mb-2">
              <div className="h-4 bg-gradient-custom bg-custom animate-shimmer rounded w-full" />
              <div className="h-4 bg-gradient-custom bg-custom animate-shimmer rounded w-5/6" />
            </div>
            <div className="flex items-center text-sm gap-3">
              <div className="h-4 bg-gradient-custom bg-custom animate-shimmer rounded w-20" />
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-gradient-custom bg-custom animate-shimmer rounded" />
                <div className="w-8 h-4 bg-gradient-custom bg-custom animate-shimmer rounded" />
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-gradient-custom bg-custom animate-shimmer rounded" />
                <div className="w-8 h-4 bg-gradient-custom bg-custom animate-shimmer rounded" />
              </div>
              <div className="h-4 bg-gradient-custom bg-custom animate-shimmer rounded w-24" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export const SkeletonItem = () => {
  return (
    <div className="p-4">
      <div className="grid gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {[...Array(20).keys()]?.map(() => (
          <div className="flex w-52 flex-col gap-4 mb-2">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

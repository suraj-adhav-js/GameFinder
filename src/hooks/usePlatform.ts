import usePlatforms from "./usePlatforms";

const usePlatform = (platformId?: number) => {
  const { data: plateforms } = usePlatforms();
  return plateforms.results.find(
    (p) => p.id === platformId,
  );
};
export default usePlatform;

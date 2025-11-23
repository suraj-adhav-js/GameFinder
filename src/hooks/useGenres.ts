import genres from "../data/genres";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => ({ data: genres, error: null, isLoading: null });

export default useGenres;

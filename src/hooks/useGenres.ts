import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClinet from "../services/api-client";
import { GameResponse } from "../services/api-client";

const apiClient = new APIClinet<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () =>
  useQuery<GameResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres}
  });

export default useGenres;

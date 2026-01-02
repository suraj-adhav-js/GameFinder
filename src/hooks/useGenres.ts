import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { GameResponse } from "./useData";

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
    queryFn: () => {
      return apiClient
        .get<GameResponse<Genre>>("/genres")
        .then((res) => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres}
  });

export default useGenres;

import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import genres from "../data/genres";
import APIClinet from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import Genre from "../entities/Genre";

const apiClient = new APIClinet<Genre>("/genres");

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres
  });

export default useGenres;

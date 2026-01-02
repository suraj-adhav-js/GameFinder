import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { GameResponse } from "../services/api-client";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<GameResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: () => {
      return apiClient
        .get<GameResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data);
    },
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length , results: platforms}
  });

export default usePlatforms;

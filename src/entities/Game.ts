import { Platform } from "../hooks/useGames";
import Genre from "./Genre";
import Publisher from "./publisher";

export default interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
  description_raw: string;
  genres: Genre[];
  publishers: Publisher[]
}

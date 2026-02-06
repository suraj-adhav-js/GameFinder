import { useQuery } from "@tanstack/react-query";
import APIClinet from "../services/api-client";
import { Game } from "./useGames";
import APIClient from '../services/api-client'

const apiClient = new APIClinet<Game>("/games");

const useGame = (slug: string) =>{
    return useQuery({
        queryKey: ['games', slug],
        queryFn: ()=> apiClient.get(slug),
    });;
}
export default useGame;



import { useQuery } from "@tanstack/react-query";
import APIClinet from "../services/api-client";
import { Game } from "../entities/Game";

const apiClient = new APIClinet<Game>("/games");

const useGame = (slug: string) =>{
    return useQuery({
        queryKey: ['games', slug],
        queryFn: ()=> apiClient.get(slug),
    });;
}
export default useGame;



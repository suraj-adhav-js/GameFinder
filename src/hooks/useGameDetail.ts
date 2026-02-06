import { useQuery } from "@chakra-ui/react";
import useGameQueryStore from "../store";
import APIClient from "../services/api-client";

interface GameDescription{
    id: number,
    description_raw: string
}

const useGameDetail = () =>{
    const  gameQuery = useGameQueryStore((s) => s.gameQuery.descriptionId);
    return useQuery({
        queryKey:['games', gameQuery],
        queryFn: ()=>{
            return APIClient
        }
    });
}
export default useGameDetail;
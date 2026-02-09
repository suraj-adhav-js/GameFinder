import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const Screenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if(isLoading) return null;

  if(error) throw error;

  return (
    <SimpleGrid columns={{base:1 ,md:2}} spacing={2} marginTop={4}>
      {data?.results.map((file) => (
        <Image src={file.image} key={file.id}/>
      ))}
    </SimpleGrid>
  );
};

export default Screenshots;

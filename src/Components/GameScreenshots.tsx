import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const Screenshots = ({ gameId }: Props) => {
  const { data } = useScreenshots(gameId);

  return (
    <SimpleGrid columns={{base:1 ,md:2}} spacing={4}>
      {data?.results.map((file) => (
        <Image src={file.image} key={file.id}/>
      ))}
    </SimpleGrid>
  );
};

export default Screenshots;

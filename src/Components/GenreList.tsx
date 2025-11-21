import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";
import getCroppedImageUrl from "../hooks/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenre();

  if(error) return null;

  if(isLoading) return <Spinner/>;
  
  return (
    <List>
      {data.map((genre) => {
        return (
          <ListItem key={genre.id}>
            <HStack marginY="10px">
              <Image objectFit="cover" boxSize="35px" borderRadius={6} src={getCroppedImageUrl(genre.image_background)}></Image>
              <Text fontSize="lg">{genre.name}</Text>
            </HStack> 
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;

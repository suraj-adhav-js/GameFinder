import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../hooks/image-url";

interface Props{
  onSelecteGenre:(genre:Genre)=>void
}

const GenreList = ({ onSelecteGenre }:Props) => {
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
              <Button variant="link" onClick={()=>onSelecteGenre(genre)} fontSize="lg">{genre.name}
              </Button>
            </HStack> 
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;

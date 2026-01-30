import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelecteGenre: (genreId: number) => void;
  selectedGenreId?:  number;
}

const GenreList = ({ onSelecteGenre, selectedGenreId }: Props) => {
  const { data, error, isLoading, } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginTop={5} marginBottom={3}>Genres</Heading>
      <List>
        {data?.results.map((genre) => {
          return (
            <ListItem paddingY="5px" key={genre.id}>
              <HStack>
                <Image
                  objectFit="cover"
                  boxSize="35px"
                  borderRadius={10}
                  src={getCroppedImageUrl(genre.image_background)}
                ></Image>
                <Button
                  fontWeight={
                    genre.id === selectedGenreId ? "bold" : "normal"
                  }
                  variant="link"
                  onClick={() => onSelecteGenre(genre.id)}
                  // fontSize="lg"
                  whiteSpace="normal"
                  textAlign="left"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;

import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, error, isLoading, } = useGenres();
  const setSelectedGenre = useGameQueryStore(s=>s.setGenreId);
  const selectedGenreId = useGameQueryStore(s=>s.gameQuery.genreId);

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
                  onClick={() => setSelectedGenre(genre.id)}
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

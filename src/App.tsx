import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./Components/SortSelector";
import GameHeading from "./Components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId: number;
  sortOrder: string;
  searchText: string
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: ` "nav" "main" `,
        lg: ` "nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText)=>setGameQuery({...gameQuery, searchText})}></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding="20px">
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelecteGenre={(genreId) => setGameQuery({ ...gameQuery, genreId })}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box marginLeft={3}>
          <GameHeading gameQuery={gameQuery}/>
          <Flex marginBottom={3}  >
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatformId={gameQuery.platformId}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
                }
              />
            </Box>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
};

export default App;

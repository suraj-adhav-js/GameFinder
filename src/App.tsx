import { Grid, GridItem, Show } from "@chakra-ui/react";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface gameQuery{
  genre: Genre | null,
  platform: Platform | null
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<gameQuery>({} as gameQuery)

  return (
    <Grid
      templateAreas={{
        base: ` "nav" "main" `,
        lg: ` "nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding="20px">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelecteGenre={(genre) => setGameQuery({...gameQuery, genre})}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=> setGameQuery({...gameQuery, platform})}/>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
};

export default App;

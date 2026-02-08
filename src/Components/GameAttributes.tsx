import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import CriticScore from "./CriticScore";
import DefinationItem from "./DefinationItem";

interface Props{
    game:Game;
}

const GameAttributes = ({game}:Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinationItem team="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text>{platform.name}</Text>
        ))}
      </DefinationItem>
      <DefinationItem team="MetaScore">
        {<CriticScore score={game.metacritic}></CriticScore>}
      </DefinationItem>
      <DefinationItem team="Genres">
        {game.genres.map((p) => (
          <Text>{p.name}</Text>
        ))}
      </DefinationItem>
      <DefinationItem team="Publishers">
        {game.publishers.map((p) => (
          <Text>{p.name}</Text>
        ))}
      </DefinationItem>
    </SimpleGrid>
  );
};

export default GameAttributes;

import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} spacing={3} padding={3}>
        {games.map((game) => {
          return <GameCard key={game.id} game={game}></GameCard>;
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

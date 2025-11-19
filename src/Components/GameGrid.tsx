import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1,2,3,4,5,6,7,,8,9,10,11,12];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} spacing={12} padding={3}>
        {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
        {games.map((game) => {
          return <GameCard key={game.id} game={game}></GameCard>;
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

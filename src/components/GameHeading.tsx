import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {

  const genreId =  useGameQueryStore(s => s.gameQuery.generId);
  const platformId =  useGameQueryStore(s => s.gameQuery.platformId);

  const genre = useGenres(genreId);
  const platform =  usePlatform(platformId);

  const heading = `${platform?.name || ""} ${
    genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;

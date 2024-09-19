import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APICLENT from "../services/api-client";

const apiClient = new APICLENT<Platform>('/games');

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>

  useInfiniteQuery({
    queryKey: ['games',gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.getAll({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
      },
    }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length+1 : undefined;
    },
    staleTime: 24*60*60*1000
  })


export default useGames;

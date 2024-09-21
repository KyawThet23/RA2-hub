import { useQuery } from "@tanstack/react-query";
import APICLENT from "../services/api-client";
import platforms from "../data/platforms";
import { Platform } from "./useGames";
import ms from "ms";

const apiClient = new APICLENT<Platform>('/platforms/lists/parents')

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: { count: platforms.length, results: platforms }
  });

export default usePlatforms;

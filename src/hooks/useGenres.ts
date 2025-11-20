import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useData from "./useData";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => useData<Genre>('/genres');

export default useGenres;

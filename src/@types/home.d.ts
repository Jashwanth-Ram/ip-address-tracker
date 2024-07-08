import React from "react";
import { IPDATA } from "./map.d";

export interface IHOME {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  handleQuery: (key: string) => void;
  data: IPDATA;
}
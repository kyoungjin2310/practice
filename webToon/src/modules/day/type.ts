import { ActionType } from "typesafe-actions";
import * as actions from "./action";

export type ListAction = ActionType<typeof actions>;

export type List = {
  id: number;
  webToon: string;
  name: string;
  favoriteNum: number;
  views: number;
  fViews: number;
  mViews: number;
  day: string;
  type: string[];
  date: string;
  active: boolean;
};

export type ListState = List[];

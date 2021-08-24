import { deprecated } from "typesafe-actions";
const { createStandardAction } = deprecated;

export const FAVORITE_NUM = "FAVORITE_NUM";
export const VIEWS = "VIEWS";
export const F_VIEWS = "F_VIEWS";
export const M_VIEWS = "M_VIEWS";
export const DAY_VIEWS = "DAY_VIEWS";
export const TYPE_VIEWS = "TYPE_VIEWS";
export const DATE_VIEWS = "DATE_VIEWS";
export const TODAY_VIEWS = "TODAY_VIEWS";

export const favoriteViews = createStandardAction(FAVORITE_NUM)();
export const views = createStandardAction(VIEWS)();
export const fViewsViews = createStandardAction(F_VIEWS)();
export const mViewsViews = createStandardAction(M_VIEWS)();
export const dayViews = createStandardAction(DAY_VIEWS)<string>();
export const typeViews = createStandardAction(TYPE_VIEWS)<string>();
export const dateViews = createStandardAction(DATE_VIEWS)();
export const todayViews = createStandardAction(TODAY_VIEWS)<string>();

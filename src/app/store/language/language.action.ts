import { createAction, props } from "@ngrx/store";

export const languageActions = createAction("change_language",props<{lang:string}>());

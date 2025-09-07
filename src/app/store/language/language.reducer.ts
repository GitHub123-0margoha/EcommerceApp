import { createReducer, on } from "@ngrx/store";
import { languageActions } from "./language.action";

const InitialState = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';

export const languageReducer = createReducer(
  InitialState,
  on(languageActions, (state, action) => state === 'en' ? 'ar' : 'en')
)

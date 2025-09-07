import { Actions, createEffect, ofType } from "@ngrx/effects";
import { languageActions } from "./language.action";
import { tap } from "rxjs";
import { inject, Injectable } from "@angular/core";

export class LanguageEffect {

  private actions = inject(Actions);
  @Injectable()
  saveLanguage = createEffect(() => this.actions.pipe(
    ofType(languageActions),
    tap((action) => {
      localStorage.setItem('lang', action.lang);
    })
  ),{dispatch: false});


}

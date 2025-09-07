import { HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { finalize, tap } from "rxjs";
import { Loading } from "../services/loading";

export function authInterceptor(req:HttpRequest<any> , next:HttpHandlerFn) {

  const loadingService = inject(Loading);

  loadingService.show();

  let modifiedReq = req;
  if(req.method === "POST") {
    modifiedReq = req.clone({headers: req.headers.append('content-type', 'application/json')});
  }
  return next(modifiedReq).pipe(
    tap((event) => {
      if(event.type === HttpEventType.Response) {
        if(event.status === 200) {
          console.log('Request successful');
        }else if(event.status === 500) {
          console.log('Request failed');
        }
      }
    }),
    finalize(() => {
      loadingService.hide();
    })
  );
}

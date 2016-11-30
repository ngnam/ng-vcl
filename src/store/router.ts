import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Router, NavigationExtras, NavigationEnd, UrlTree } from '@angular/router';
import { Store, Reducer } from './store';
import { StoreActions } from './actions';
import { combineReducers } from './utils';
import { Effect } from './effects';

export interface RouterState {
  url: string;
}

export const initialRouterState: RouterState = {
  url: ''
};

export class RouterNavigateAction {
  constructor(public commands: any[], public extras?: NavigationExtras) {}
}

export class RouterNavigateByUrlAction {
  constructor(public url: string | UrlTree, public extras?: NavigationExtras) {}
}

export class RouterUrlUpdateAction {
  constructor(public url: string) {}
}

@Injectable()
export class StoreRouterEffects {

  constructor(private router: Router, private store: Store, private actions$: StoreActions) {}

  private routerSub = this.router
                  .events
                  .filter((event) => event instanceof NavigationEnd)
                  .map(event => event.url)
                  .subscribe(url => {
                    this.store.dispatch(new RouterUrlUpdateAction(url));
                  });

  @Effect()
  protected navigateEffect = this.actions$
                                 .ofType(RouterNavigateAction)
                                 .map((action: RouterNavigateAction) => {
    this.router.navigate(action.commands, action.extras);
  });

  @Effect()
  protected navigateByUrlEffect = this.actions$
                                 .ofType(RouterNavigateByUrlAction)
                                 .map((action: RouterNavigateByUrlAction) => {
    this.router.navigateByUrl(action.url, action.extras);
  });

  ngOnDestroy() {
    if (this.routerSub && !this.routerSub.closed) this.routerSub.unsubscribe();
  }
}

@Injectable()
export class StoreRouter {

  constructor(private store: Store) {}

  public navigate(commands: any[], extras?: NavigationExtras) {
    this.store.dispatch(new RouterNavigateAction(commands, extras));
  }

  public navigateByUrl(url: string | UrlTree, extras?: NavigationExtras) {
    this.store.dispatch(new RouterNavigateByUrlAction(url, extras));
  }

}

export const routerReducer: Reducer<RouterState> = combineReducers({
  router: (state = initialRouterState, action: RouterUrlUpdateAction) => {
    if (action instanceof RouterUrlUpdateAction) {
      return {
        url: action.url
      };
    }
    return state;
  }
});



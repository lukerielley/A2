import {provide} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component'
import {Http, HTTP_PROVIDERS, BaseRequestOptions, RequestOptions, BaseResponseOptions, ResponseOptions, Connection} from 'angular2/http';

import {MyRequestOptions} from './Config/MyRequestOptions';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(RequestOptions, {
        useClass : MyRequestOptions
    })
]);
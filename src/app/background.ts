import {platform} from 'angular2/core';
import {TodoComponent} from "./todo_component";
import {WORKER_APP_PLATFORM, WORKER_APP_APPLICATION} from 'angular2/platform/worker_app';

platform([WORKER_APP_PLATFORM]).application(WORKER_APP_APPLICATION).bootstrap(TodoComponent);

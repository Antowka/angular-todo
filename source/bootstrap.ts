/// <reference path="../node_modules/angular2/typings/browser.d.ts" />

import 'zone.js/dist/zone';
import 'reflect-metadata';

import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {TodoApp} from './TodoApp';
import {TasksService} from './services/TasksService';

bootstrap(TodoApp, [
    TasksService
]);
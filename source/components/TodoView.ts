import {Component} from 'angular2/core';

@Component({
    selector:'todo-view',
    template: `
        <h3>Task Name</h3>
        <p>Description</p>
        <button type="button" class="btn btn-success">Done</button>
        <button type="button" class="btn btn-danger">Delete</button>
    `
})
export class TodoView{
    constructor() {}
}

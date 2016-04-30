import {Component, Inject} from 'angular2/core';
import {TasksService} from '../services/TasksService';

@Component({
    selector:'todo-view',
    template: `
        <div *ngIf="selectedTask">
            <h3>{{selectedTask.name}}</h3>
            <p>{{selectedTask.description}}</p>
            <button type="button" class="btn btn-success">Done</button>
            <button type="button" class="btn btn-danger">Delete</button>
        </div>
    `
})
export class TodoView{

    private selectedTask;

    constructor(@Inject(TasksService) private TasksService) {

        //подписка на изменения через observable
        TasksService.selectedTask.subscribe(newSelectedTask => {
            this.selectedTask = newSelectedTask
        });
    }
}

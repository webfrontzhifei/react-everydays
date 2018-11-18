import { observable } from 'mobx';

export default class TodoModel {
    id = Math.random();
    @observable title = 'zq';
    @observable finished = false;

    constructor(title) {
        console.log(title);
        this.title = title;
    }
}
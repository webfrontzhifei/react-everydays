import { observable } from 'mobx';
import BaseUIStore from './BaseUIStore';

export default class TodoModel {
    id = Math.random();
    @observable uiStore = new BaseUIStore();
    @observable finished = false;

    constructor(title) {
        this.title = title;
    }
}
import { observable } from 'mobx';
import BaseUIStore from './BaseUIStore';

export default class TodoModel {
    id = Math.random();
    @observable uiStore = new BaseUIStore();
    @observable finished = false;

    constructor(props) {
        const { title, uiStore } = props;
        console.log(title);
        this.title = title;
        Object.assign(this.uiStore, uiStore);
    }
}
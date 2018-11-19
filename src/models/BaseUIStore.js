import { observable, action, computed, toJS } from 'mobx';

class BaseUIStore {
    @observable height = '90px';
    @observable width = '';
    @observable paddingTop = '';
    @observable paddingBottom = '';
    @observable paddingLeft = '';
    @observable paddingRight = '';
    @observable backgroundColor = '';
    @observable marginTop = '';
    @observable marginBottom = '';
    @observable marginLeft = '';
    @observable marginRight = '';

    constructor(opts) {
        this.buildConfigs(opts);
    }

    @action.bound buildConfigs(opts) {
        if (!opts) return;
        Object.assign(this, opts);
    }

    @computed get style() {
        const { backgroundColor, ...remProps } = this;
        const remStyle = {};
        Object.keys(remProps).forEach((key) => {
            const value = remProps[key];
            remStyle[key] = (value.includes('rem') || !value) ? value : `${value / 100}rem`;
        });
        return {
            ...remStyle,
            backgroundColor
        };
    }
}

export default BaseUIStore;

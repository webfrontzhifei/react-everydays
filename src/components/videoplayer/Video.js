import React, { Component } from 'react';
import './index.scss';
export default class Video extends Component {
    calculateVideoProps() {
        return {
            ...this.props
        };
    }
    render() {
        const videoProps = this.calculateVideoProps();
        return <div className="video-player">
            <video {...videoProps} webkit-playsinline></video>
        </div>
    }
}
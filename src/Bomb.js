// your Bomb code here!
import React, { Component } from "react";

export default class Bomb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    timesUp(){
        let boomText
        if (this.state.secondsLeft > 0){
            boomText = `${this.state.secondsLeft} seconds left before I go boom!`
        } else {
            boomText = 'Boom!'
        }
        return boomText
    }

    render() {
        return this.timesUp()
    }
}
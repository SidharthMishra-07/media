import React, { Component } from 'react'
import loading from './Loading.gif'

export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center mt-5">
                <img src={loading} alt="loading" />
                <p className="text-center"><em>Loading....</em></p>
            </div>
        )
    }
}

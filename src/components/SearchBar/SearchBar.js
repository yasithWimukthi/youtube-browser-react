import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form"> 
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text"/>
                    </div>
                </form>
            </div>
        )
    }
}

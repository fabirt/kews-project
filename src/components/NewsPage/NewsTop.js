import React, { Component } from 'react';
import './../../css/NewsPage/NewsTop.css';

class NewsTop extends Component {
    constructor(){
        super();
        this.state = {
            search: ""
        }
    }

    handleChange = (event) => {
        let value = event.target.value;
        value = value.replace(" ", "%20");
        this.setState({search: value})
    }

    handleSubmit = (event) => {
        const value = (this.state.search==="") ? "anime" : this.state.search;
        this.props.handleSearch(value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="top-nav w3-hide-large">
                <div className="k-np-top-wrapper">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" 
                            placeholder="Search" 
                            className="k-np-search-input"
                            onChange={this.handleChange}/>
                        <label htmlFor="submit" className="k-np-submit-icon">
                            <i className="fas fa-search"></i>
                        </label>
                        <input type="submit" id="submit" className="k-np-search-submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default NewsTop;
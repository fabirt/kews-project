import React, { Component } from 'react';
import './../../css/NewsPage/NewsTop.css';

class NewsTop extends Component {
    constructor(){
        super();
        this.state = {
            search: ''
        }
    }

    handleChange = (event) => {
        this.setState({search: event.target.value})
    }

    handleSubmit = (event) => {
        this.props.handleSearch(this.state.search);
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
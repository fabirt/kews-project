import React, { Component } from 'react';
import NewsContent from './NewsContent';
import NewsTop from './NewsTop';

class News extends Component {
    constructor(){
        super();
        this.state = {
            news: [],
            search: 'anime'
        }
    }

    handleSearch = (value) => {
        this.setState({search: value})
        setTimeout(() => {
            console.log(this.state.search);
            this.newSearch();
        }, 100) 
    }

    getArticles= async (url)=>{
        const resp=await fetch(url)
        const newsObj=await resp.json()
        return newsObj
    }
        
    async componentDidMount(){
        let url = "https://newsapi.org/v2/everything?q=%27{mySearch}%20%27&language=en&apiKey=60a49976bbd7461fabb075d1d4c35371";
        url = url.replace("{mySearch}", this.state.search);
        const {articles}= await this.getArticles(url);
        this.setState({news:articles})
    }

    async newSearch(){
        let url = "https://newsapi.org/v2/everything?q=%27{mySearch}%20%27&language=en&apiKey=60a49976bbd7461fabb075d1d4c35371";
        url = url.replace("{mySearch}", this.state.search);
        const {articles}= await this.getArticles(url);
        this.setState({news:articles})
    }

    render() {
        return (
            <div>
                <NewsTop handleSearch={this.handleSearch.bind(this)}/>
                <NewsContent newsProp={this.state.news} />
            </div>
        );
    }
}

export default News;
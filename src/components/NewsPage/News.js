import React, { Component } from 'react';
import NewsContent from './NewsContent';
import NewsTop from './NewsTop';

class News extends Component {
    constructor(){
        super();
        this.state = {
            news: [],
            search: 'technology',
            loading: true
        }
    }

    handleSearch = (value) => {
        this.setState({search: value, loading:true})
        setTimeout(() => {
            this.componentDidMount();
        }, 100) 
    }

    getArticles= async (url)=>{
        const resp=await fetch(url)
        const newsObj=await resp.json()
        return newsObj
    }
        
    async componentDidMount(){
        let url = "https://newsapi.org/v2/everything?q={mySearch}&language=en&sortBy=popularity&apiKey=60a49976bbd7461fabb075d1d4c35371";
        url = url.replace("{mySearch}", this.state.search);
        const {articles}= await this.getArticles(url);
        this.setState({news:articles, loading:false})
    }

    render() {
        return (
            <div>
                <NewsTop handleSearch={this.handleSearch.bind(this)}/>
                {this.state.loading &&<div className="k-loading">
                    <i className="fas fa-spinner fa-5x fa-spin"></i>
                </div>}
                <NewsContent newsProp={this.state.news} />
            </div>
        );
    }
}

export default News;
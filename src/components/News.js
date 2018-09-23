import React, { Component } from 'react';
import './../css/news.css'

class News extends Component {

    state={
        news:[]
    }
      
    getanime= async (url)=>{
        const resp=await fetch(url)
        const newsObj=await resp.json()
        return newsObj
    }
        
    async componentDidMount(){
        const url = 'https://newsapi.org/v2/everything?q=%27anime%20%27&language=en&apiKey=60a49976bbd7461fabb075d1d4c35371';
        const {articles}= await this.getanime(url);
        this.setState({news:articles})
        // console.log("Premisa",articles) 
    }

  render() {
    return (
        <div className="k-news-container">
            {
                this.state.news.map(item =>{
                    return <section>
                        <div className="row">
                        <div className="k-image col-lg-4">
                            <img src={item.urlToImage} alt="Photo" className="k-item-img"/>    
                        </div>
                        <div className="k-info col-lg-8">
                            <p className="h2 k-item-title">{item.title}</p>
                            <p className="k-item-description">{item.description}</p>
                        </div>
                        </div>
                    </section>
                })
            }
            
        </div>
    );
  }
}

export default News;
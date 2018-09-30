import React, { Component } from 'react';
import './../../css/NewsPage/NewsContent.css'

class NewsContent extends Component {

    getTime = (datetime) => {
        const plublishedDate = new Date(datetime)
        const today = new Date()
        let diff = today.getTime() - plublishedDate.getTime(); 
        diff = (diff / (1000*60*60*24)); 
        diff = (diff<1)?1:Math.floor(diff);
        return diff;
    }

  render() {
    
    return (
        <div className="k-news-container">
            <div className="k-inner-container">
                {
                    this.props.newsProp.map((item, i) =>{
                        return <section key={i}>
                            <div className="row">
                            <div className="k-image col-lg-4">
                                <img src={item.urlToImage} alt="sourceImage" className="k-item-img"/>    
                            </div>
                            <div className="k-info col-lg-8">
                                <p className="h3 k-item-title">{item.title}</p>
                                <p className="k-item-description">{item.description}</p>
                                <hr/>
                                <p className="k-item-time">{this.getTime(item.publishedAt)} days ago</p>
                                <a href={item.url} className="k-item-url" target="blank">
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                            </div>
                        </section>
                        
                    })
                }
            </div>
            
        </div>
    );
    
  }
}

export default NewsContent;
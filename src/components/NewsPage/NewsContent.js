import React, { Component } from 'react';
import './../../css/NewsPage/NewsContent.css'

class NewsContent extends Component {

  render() {
    return (
        <div className="k-news-container">
            <div className="k-inner-container">
                {
                    this.props.newsProp.map((item, i) =>{
                        return <section key={i}>
                            <div className="row">
                            <div className="k-image col-lg-4">
                                <img src={item.urlToImage} alt="Photo" className="k-item-img"/>    
                            </div>
                            <div className="k-info col-lg-8">
                                <p className="h3 k-item-title">{item.title}</p>
                                <p className="k-item-description">{item.description}</p>
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
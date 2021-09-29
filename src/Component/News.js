import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        super();
        //This is same as using UseState[text,setText] in function based component
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount(){      //Its runs after the render function
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=97b12b02d71a4d1d9ba7f5e2d82b36f1";
        let data = await fetch(url)
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles})
    }

    render() {
        return (
            <>
                <div className="container my-4">
                    <h2 className="text-center">Today's Top Headlines</h2>
                    <div className="row mt-5">
                        {this.state.articles.map((element)=> {
                            return <div className="col-md-4 mt-4" key={element.url} >
                            <NewsItem title={element.title ? element.title.slice(0,45) : " "} description={element.description ? element.description.slice(0,88) : " "} imgUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default News

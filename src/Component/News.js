import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

    constructor(){
        super();
        //This is same as using const[text, setText] = useState(''); in function based component
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount(){   //Its runs after the render function
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=97b12b02d71a4d1d9ba7f5e2d82b36f1&page=1&pageSize=15";
        let data = await fetch(url)
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }

    prevClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=97b12b02d71a4d1d9ba7f5e2d82b36f1&page=${this.state.page-1}&pageSize=15`;
        let data = await fetch(url)
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page-1,
        })
    }
    nextClick = async ()=>{
        if(this.state.page+1 > Math.ceil(this.state.totalResults/15)){
            //Disabled the next button
        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=97b12b02d71a4d1d9ba7f5e2d82b36f1&page=${this.state.page+1}&pageSize=15`;
            this.setState({
                loading: true     //Loader will come when data is not loaded yet
            })
            let data = await fetch(url)
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                page: this.state.page+1,
                loading: false      // Goes to false after loading the content
            })
        }
    }

    render() {
        return (
            <>
                <div className="container my-4">
                    <h2 className="text-center">Today's Top Headlines</h2>
                    {this.state.loading && <Spinner/>}  
                    <div className="row mt-5">
                        {this.state.articles.map((element)=> {
                            return <div className="col-md-4 mt-4" key={element.url} >
                            <NewsItem title={element.title ? element.title.slice(0,45) : " "} description={element.description ? element.description.slice(0,88) : " "} imgUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                        })}
                    </div>
                    <div className="container mt-5 d-flex justify-content-lg-between">
                        <button disabled={this.state.page<=1} type="button btn-lg" className="btn btn-dark" onClick={this.prevClick}>&larr; Previous</button>
                        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/15)} type="button btn-lg" className="btn btn-dark noNext" onClick={this.nextClick}>Next &rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}

export default News

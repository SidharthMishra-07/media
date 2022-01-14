import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        category:'Health',
    }
    static propTypes = {
        category: PropTypes.string,
    }

    constructor(){
        super();
        //This is same as using const[text, setText] = useState(''); in function based component
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=97b12b02d71a4d1d9ba7f5e2d82b36f1&page=${this.state.page}&pageSize=15`;
        this.setState({
            loading: true     //Loader will come when data is not loaded yet
        })
        let data = await fetch(url)
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    async componentDidMount(){   //Its runs after the render function
        this.updateNews();
    }

    prevClick = async ()=>{
        this.setState({page: this.state.page - 1})
        this.updateNews();
    }
    nextClick = async ()=>{
        this.setState({page: this.state.page + 1})
        this.updateNews();
    }

    render() {
        return (
            <>
                <div className="container my-4">
                    <h2 className="text-center">Today's Top Headlines</h2>
                    <div className="row mt-5">
                        {!this.state.loading && this.state.articles.map((element)=> {
                            return <div className="col-md-4 mt-4" key={element.url} >
                            <NewsItem title={element.title ? element.title.slice(0,45) : " "} description={element.description ? element.description.slice(0,88) : " "} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                        </div>
                        })}
                    </div>

                    <div className="container mt-10">
                        {this.state.loading && <Spinner/>} 
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

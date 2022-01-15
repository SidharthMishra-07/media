import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        category: 'Health',
    }
    static propTypes = {
        category: PropTypes.string,
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        //This is same as using const[text, setText] = useState(''); in function based component
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMedia`
    }
    async updateNews() {
        this.props.setProgress(30);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=15`;
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
        this.props.setProgress(100); // This is for Top Loading Bar
    }

    async componentDidMount() {   //Its runs after the render function
        this.updateNews();
    }

    prevClick = async () => {
        this.setState({ page: this.state.page - 1 })
        this.updateNews();
    }
    nextClick = async () => {
        this.setState({ page: this.state.page + 1 })
        this.updateNews();
    }
    
    fetchMoreData = async() => {
        this.setState({page: this.state.page + 1})
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=15`;
        let data = await fetch(url)
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
    };

    render() {
        return (
            <>
                <div className="container my-4">
                    <h2 className="text-center">Today's Top Headlines</h2>
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner/>}
                    >
                        <div className="container">
                            <div className="row mt-5">
                                {this.state.articles.map((element) => {
                                    return <div className="col-md-4 mt-4" key={element.url} >
                                        <NewsItem title={element.title ? element.title.slice(0, 45) : " "} description={element.description ? element.description.slice(0, 88) : " "} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>

                    <div className="container mt-10">
                        {this.state.loading && <Spinner/>}      
                    </div>

                            {/* Implementing Infinite scroll thus commenting Next and Prev Buttons */}

                    {/* <div className="container mt-5 d-flex justify-content-lg-between">
                        <button disabled={this.state.page <= 1} type="button btn-lg" className="btn btn-dark" onClick={this.prevClick}>&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 15)} type="button btn-lg" className="btn btn-dark noNext" onClick={this.nextClick}>Next &rarr;</button>
                    </div> */}

                </div>
            </>
        )
    }
}

export default News

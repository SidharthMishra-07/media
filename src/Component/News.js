import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(false);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);
    

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMedia`


    const updateNews = async()=> {
        props.setProgress(30);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=15`;
        
        setloading(true)    //Loader will come when data is not loaded yet  
        
        let data = await fetch(url)
        let parsedData = await data.json();
        
        setarticles(parsedData.articles);
        setloading(false);
        settotalResults(parsedData.totalResults);

        props.setProgress(100); // This is for Top Loading Bar
    }

    useEffect(() => {           //This is the hook for ComponentDidMount which runs after the render function
        updateNews();

    }, [])

    const prevClick = async () => {
        setpage(page-1);
        updateNews();
    }
    const nextClick = async () => {
        setpage(page+1);
        updateNews();
    }
    
    const fetchMoreData = async() => {
        setpage(page+1);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=15`;
        let data = await fetch(url)
        let parsedData = await data.json();
        
        setarticles(articles.concat(parsedData.articles));
        settotalResults(parsedData.totalResults);
        setloading(false);
    };

        return (
            <>
                <div className="container my-4">
                    <h2 className="text-center">Today's Top Headlines</h2>
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Spinner/>}
                    >
                        <div className="container">
                            <div className="row mt-5">
                                {articles.map((element) => {
                                    return <div className="col-md-4 mt-4" key={element.url} >
                                        <NewsItem title={element.title ? element.title.slice(0, 45) : " "} description={element.description ? element.description.slice(0, 88) : " "} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>

                    <div className="container mt-10">
                        {loading && <Spinner/>}      
                    </div>

                            {/* Implementing Infinite scroll thus commenting Next and Prev Buttons */}

                    {/* <div className="container mt-5 d-flex justify-content-lg-between">
                        <button disabled={page <= 1} type="button btn-lg" className="btn btn-dark" onClick={prevClick}>&larr; Previous</button>
                        <button disabled={page + 1 > Math.ceil(totalResults / 15)} type="button btn-lg" className="btn btn-dark noNext" onClick={nextClick}>Next &rarr;</button>
                    </div> */}

                </div>
            </>
        )
}

News.defaultProps = {
    category: 'Health',
}
News.propTypes = {
    category: PropTypes.string,
}

export default News

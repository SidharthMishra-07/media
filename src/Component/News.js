import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "PTI",
            "title": "Kuldeep Yadav back from UAE after sustaining knee injury, may miss most of domestic season - Times of India",
            "description": "Cricket News:  Left-arm wrist spinner Kuldeep Yadav has sustained a serious knee injury and is likely to miss most of the domestic season, having already come back",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/kuldeep-yadav-back-from-uae-after-sustaining-knee-injury-may-miss-most-of-domestic-season/articleshow/86552792.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-86552833,width-1070,height-580,imgsize-34674,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2021-09-27T09:39:00Z",
            "content": "Kuldeep Yadav back from UAE after sustaining knee injury, may miss most of domestic season"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "PTI",
            "title": "England all-rounder Moeen Ali announces retirement from Tests - Times of India",
            "description": "Cricket News: England's spin bowling all-rounder Moeen Ali on Monday announced retirement from Test cricket to prolong his career in white-ball formats, saying he i",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/news/england-all-rounder-moeen-ali-announces-retirement-from-tests/articleshow/86551227.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-86551385,width-1070,height-580,imgsize-40154,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2021-09-27T08:14:00Z",
            "content": "So many memories we'll always cherish at Lord's.Take a bow, Moeen Ali #ThankYouMo | #LoveLords https://t.co/q1BW5WDVTX\r\n— Lord's Cricket Ground (@HomeOfCricket) 1632729133000"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "hindustantimes.com",
            "title": "IPL 2021, SRH vs RR Live Streaming: When and where to watch Sunrisers Hyderabad vs Rajasthan Royals Live on TV - Hindustan Times",
            "description": "IPL 2021, SRH vs RR Live Streaming Match 40 Online: All you need to know about live streaming details on Hotstar, match timings, venue for the Indian Premier League Match today between Sunrisers Hyderabad and Rajasthan Royals. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/ipl-2021-srh-vs-rr-live-streaming-when-and-where-to-watch-sunrisers-hyderabad-vs-rajasthan-royals-live-on-tv-101632726221401.html",
            "urlToImage": "https://images.hindustantimes.com/img/2021/09/27/1600x900/RR_vs_SRH_1632726568923_1632726576430.JPG",
            "publishedAt": "2021-09-27T07:25:42Z",
            "content": "Rajasthan Royals and Sunrisers Hyderabad are set to square off against each other in the Indian Premier League (IPL) 2021 match no. 40. Last time when they played against each other in India, RR show… [+1934 chars]"
        }
    ]

    constructor(){
        super();
        //This is same as using UseState[text,setText] in function based component
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <>
                <div className="container my-4">
                    <h2 className="text-center">Today's Top Headlines</h2>
                    <div className="row mt-5">
                        {this.state.articles.map((element)=> {
                            return <div className="col-md-4" key={element.url} >
                            <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imgUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                        })}
                    </div>
                    
                    <div className="row mt-5">
                        <div className="col-md-3">
                            <NewsItem title="News Today" description="Aaj ki taza khabar"/>
                        </div>
                        <div className="col-md-3">
                            <NewsItem title="News Today" description="Aaj ki taza khabar"/>
                        </div>
                        <div className="col-md-3">
                            <NewsItem title="News Today" description="Aaj ki taza khabar"/>
                        </div>
                        <div className="col-md-3">
                            <NewsItem title="News Today" description="Aaj ki taza khabar"/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default News

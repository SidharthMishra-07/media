import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <>
                <div className="container my-4">
                    <h2 className="text-center">Today's Top Headlines</h2>
                    <div className="row mt-5">
                        <div className="col-md-3">
                            <NewsItem title="News Today" description="Aaj ki taza khabar" imgUrl="https://static.toiimg.com/thumb/msid-86552833,width-1070,height-580,imgsize-34674,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"/>
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

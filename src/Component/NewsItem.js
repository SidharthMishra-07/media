import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imgUrl,newsUrl} = this.props;
        return (
            <>
                <div className="card" style={{width:"20rem", boxShadow:"5px 5px 10px #ced7ef"}}>
                    <img src={!imgUrl ? "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmV3c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" : imgUrl} className="card-img-top" alt="card_img"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More...</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem

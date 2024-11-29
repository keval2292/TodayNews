import React, { Component } from 'react';

export default class NewsItems extends Component {
    formatDate = (dateStr) => {
        // Format the date string to match a valid ISO 8601 format: 'YYYY-MM-DDTHH:MM:SSZ'
        const formattedDateStr = dateStr.replace(
            /(\d{4})(\d{2})(\d{2})T/,
            '$1-$2-$3T'
        );
        const date = new Date(formattedDateStr);  // Create a Date object from the formatted string
        const day = String(date.getDate()).padStart(2, '0');  // Get day and pad it to 2 digits
        const month = String(date.getMonth() + 1).padStart(2, '0');  // Get month (note: months are 0-indexed)
        const year = date.getFullYear();  // Get full year
        return `${day}-${month}-${year}`;  // Return formatted date in "dd-mm-yyyy"
    };

    getCurrentDate = () => {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    render() {
        let { title, description, newsUrl, newsDate, imgUrl, author } = this.props;
        const isCurrentDate = this.getCurrentDate() === this.formatDate(newsDate);

        return (
            <div className=" news-card my-3">
                <div className="card h-100 shadow-lg animate__animated animate__fadeInUp position-relative">
                    {/* Badge positioned in the top-right corner */}
                    {isCurrentDate && (
                        <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                            Today
                        </span>
                    )}
                    <img
                        src={imgUrl}
                        className="card-img-top custom-img"
                        alt="News"
                    />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="text-muted mb-1">Published on: {this.formatDate(newsDate)}</p>
                        <p className="text-muted">Author: {author ? author : "Unknown"}</p>
                        <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

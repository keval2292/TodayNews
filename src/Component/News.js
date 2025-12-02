import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Loading from './Loading';
import PropTypes from 'prop-types';

export default class News extends Component {
    static defaultProps = {
        country: 'us',
        pageSize: 21,
        category: 'science'
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };

    capitalizeWords = (str) => {
        return str.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResult: 0,
        };
        document.title = `${this.capitalizeWords(this.props.category)} - TodayNews`;
    }

    async componentDidMount() {
        this.updateNews();

        // Set up event listener for scrolling
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        // Clean up the event listener when the component is unmounted
        window.removeEventListener('scroll', this.handleScroll);
    }

    updateNews = async (page = this.state.page) => {
        this.props.setProgress(0);
        const { country, category, pageSize } = this.props;
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.props.apikey}&page=${page}&pageSize=${pageSize}`;
        this.setState({ loading: true });

        let data = await fetch(url);
        this.props.setProgress(50);
        let parsedData = await data.json();
        this.props.setProgress(100);

        // Filter out duplicate articles
        const newArticles = parsedData.articles.filter(newArticle => {
            return !this.state.articles.some(existingArticle => existingArticle.url === newArticle.url);
        });

        this.setState({
            articles: [...this.state.articles, ...newArticles],
            totalResult: parsedData.totalResults,
            loading: false,
            page: page,
        });
    };

    // Handle scroll event
    handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 1 && !this.state.loading) {
            this.loadMore();
        }
    };

    loadMore = () => {
        const maxPage = Math.ceil(this.state.totalResult / this.props.pageSize);
        if (this.state.page < maxPage) {
            this.setState(
                (prevState) => ({ page: prevState.page + 1 }),
                () => {
                    this.updateNews(this.state.page);
                }
            );
        }
    };

    render() {
        return (
            <div className="container my-3" >
                <h2 className="text-center headline">TodayNews - Top Headlines</h2>

                <div className="row">
                    {this.state.articles.map((element, id) => {
                        return (
                            <div className="col-md-4 d-flex" key={id}>
                                <NewsItems
                                    title={element.title ? element.title.slice(0, 65) : "No title"}
                                    description={element.description ? element.description.slice(0, 110) : "No description...."}
                                    imgUrl={element.urlToImage ? element.urlToImage : "./newsImage.jpg"}
                                    newsUrl={element.url}
                                    author={element.author ? element.author : "Unknown"}
                                    newsDate={element.publishedAt}
                                />
                            </div>
                        );
                    })}
                </div>

                {this.state.loading && <Loading />}

            </div>
        );
    }
}

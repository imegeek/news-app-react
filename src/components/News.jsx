import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner'
import Card from './Card'
import './css/News.css'

export default class News extends Component {
	api =  process.env.REACT_APP_NEWS_API
	articles = {
		"status": "ok",
		"totalResults": 399,
		"articles": []
	}

	constructor(props) {
		super(props);
		this.state = {
			// articles: this.articles.articles,
			articles: [],
			pageSize: 20,
			maxPageSize: 6,
			loading: false,
			connection: null,
			endpoint: this.props.title.toLowerCase().split(" ").join("-"),
			parameters: null,
			page: 1,
		}
	}

	getData = async (page = 1) => {
		if (this.state.connection) {
			this.props.setProgress(10)
		}

		if (this.state.endpoint === "everything") {
			await this.setState(
				{
					parameters: `&q=${this.props.search}`
				}
			)
		}
		else {
			await this.setState(
				{
					parameters: `&category=${this.props.category.toLowerCase()}&country=${this.props.country}&pageSize=${this.state.pageSize}`
				}
			)
		}

		let url=`https://newsapi.org/v2/${this.state.endpoint}?apiKey=${this.api}&page=${page}${this.state.parameters}`

		try {
			let data = await fetch(url);
			this.props.setProgress(80)
			let parsedData = await data.json()
			this.setState(
				{
					// page: this.state.page + 1,
					page: page + 1,
					connection: true,
					articles: parsedData.articles,
					maxPageSize: Math.ceil(100 / this.state.pageSize),

				}
			)
			this.props.setProgress(100)
		}
		catch (error) {
			console.log(error)
			this.setState(
				{
					connection: false
				}
			)
		}

	}

	async componentDidMount() {
		this.getData()

	}

	async componentDidUpdate(prevProps) {
		if (prevProps.search !== this.props.search || prevProps.title !== this.props.title || prevProps.country !== this.props.country || prevProps.category !== this.props.category) {

			let title = this.props.title.toLowerCase().split(" ").join("-")
			await this.setState(
				{
					endpoint: title
				}
			)

			this.getData()
		}
	}

	handlePrevClick = async () => {
		await this.getData(this.state.page - 1)
	}

	handleNextClick = async () => {
		await this.getData(this.state.page + 1)
	}

	fetchMoreData = async () => {
		let url = `https://newsapi.org/v2/${this.state.endpoint}?apiKey=${this.api}&page=${this.state.page}${this.state.parameters}`
		let data = await fetch(url);
		let parsedData = await data.json()

		this.setState(
			{
				page: parsedData.articles ? this.state.page + 1 : this.state.maxPageSize,
				articles: this.state.articles.concat(parsedData.articles),

			}
		)
	}

	render() {
		return (
			<div id='news'>
				{this.state.connection !== false ?
					<>
						<h1>Today News - {this.props.title}</h1>
						<InfiniteScroll style={{ overflow: 'hidden' }}
							dataLength={this.state.articles.length}
							next={this.fetchMoreData}
							hasMore={this.state.page !== this.state.maxPageSize}
							loader={<Spinner />}
						>
							<div className="container">
								{
									this.state.articles ?
									// this.state.page !== this.state.maxPageSize ?
										this.state.articles.map((element) => {
											return element.url &&
												element.source &&
												element.urlToImage &&
												element.title &&
												element.description ? <div key={element.url}>
												<Card image={element.urlToImage} provider={element.source.name} title={element.title.slice(0, 60)} description={element.description ? element.description.slice(0, 110).concat(" ...") : ""} read={element.url} />
											</div> : ""
										}) : "No Articles Found Yet!"
								}
								{/* <Card /> */}
							</div>
						</InfiniteScroll>
					</> : <h1>Something went wrong.</h1>}
			</div>
		)
	}
}

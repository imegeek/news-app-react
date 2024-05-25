import React, { Component } from 'react'
import './css/Card.css'

export default class Card extends Component {
	render() {
		let { image, provider, title, description, read } = this.props;

		return (
			<div className='news-card'>
				<div className="provider">{provider}</div>
				<div className="news-container">
					<div className="image">
						<img src={image} alt="news-thumbnail" />
					</div>

					<div className="content">
						<div className="title">
							{title}
						</div>
						<div className="description">
							{description}
						</div>
					</div>
					<a href={read} className="read-more">
						Read More
					</a>
				</div>
			</div>
		)
	}
}

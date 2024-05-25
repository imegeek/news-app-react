import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import * as ReactIconsMd from 'react-icons/md'
import * as ReactIconsVsc from 'react-icons/vsc'
import Dropdown from './Dropdown';
import './css/Options.css'

export default class Options extends Component {
	// countryOptions = ["India", "Japan"]
	constructor(props) {
		super(props);
		this.state = {
			message: '',
		};
	}

	// countryCallback = (data) => {
	// 	console.log(data)
	// };

	// categoryCallback = (data) => {
	// 	console.log(data)
	// }

	handleTypeItem = (event) => {
		let target = event.target
		let content = target.textContent

		let parentChild = target.parentElement.querySelectorAll('.type-item');
		parentChild.forEach(child => {
			child.classList.remove("active")
		});

		target.classList.toggle("active")
		this.props.selectedCallback(content)
	}

	render() {
		return (
			<div className='options'>
				<div className="news-options">
					<div className="news-types">
						<span onClick={this.handleTypeItem} className='type-item active'>Everything</span>
						<span onClick={this.handleTypeItem} className='type-item'>Top Headlines</span>
					</div>
					<div className="category">
						<Dropdown disableDropdown={this.props.exception} title="Country" options={this.props.countryOptions} onCallback={this.props.countryCallback} />
						<Dropdown disableDropdown={this.props.exception} title="Category" options={this.props.categoryOptions} onCallback={this.props.categoryCallback} />
					</div>
				</div>
			</div>
		)
	}
}

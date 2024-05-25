import React, { Component } from 'react'
import * as ReactIconsMd from 'react-icons/md'
import "./css/Dropdown.css"

export default class Dropdown extends Component {

	constructor(props) {
		super(props);
		this.state = {
			default: true,
			isActive: false,
			// listWidth: 9.23 * Math.max(...this.props.options.map(item => item.length)),
			// listHeight: 30.5 * this.splitAndJoinList(this.props.options).length
			listHeight: 33.3 * this.props.options.length
		}
	}

	splitAndJoinList = (list) => {
		let result = [];

		for (let item of list) {
			if (item.includes(" ")) {
				let splitItems = item.split(" ");
				result.push(...splitItems);
			} else {
				result.push(item);
			}
		}

		return result;
	}

	handleDropdown = (event) => {
		let target = event.target
		if (this.state.default) {
			target.parentElement.parentElement.querySelector('.list-item').classList.add('active')
			this.setState(
				{
					default: false
				}
			)
		}
		this.setState(
			{
				isActive: !this.state.isActive,
			}
		)
		// console.log(this.state.listWidth, this.state.listHeight)
	}

	handleList = (event) => {
		let target = event.target
		let content = target.textContent
		let parentChild = target.parentElement.parentElement.querySelectorAll('div .list-item');
		parentChild.forEach(child => {
			child.classList.remove("active")
		});

		target.classList.toggle("active")

		this.props.onCallback(content)

		this.setState(
			{
				isActive: false
			}
		)
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.disableDropdown !== this.props.disableDropdown) {
			this.setState({isActive: false})
		}
	}

	render() {
		return (
			<div className="dropdown">
				<button disabled={this.props.disableDropdown === "Everything" ? true : false} className="dropdown-box" onClick={this.handleDropdown}>
					<ReactIconsMd.MdFilterList className='filter' />
					<span>{this.props.title}</span>
				</button>
				<div style={
					{
						// width: this.state.isActive ? this.state.listWidth : 0,
						height: this.state.isActive ? this.state.listHeight : 0

					}} className="dropdown-list">
					{
						this.props.options.map((option, index) => {
							return <div key={index}>
								<div onClick={this.handleList} className='list-item'>{option}</div>
							</div>
						})
					}
				</div>
			</div>
		)
	}
}

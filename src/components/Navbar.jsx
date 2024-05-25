import React, { Component } from 'react'
import * as FaIcons from "react-icons/fa"
import Logo from '../logo.webp'
import './css/Navbar.css'

export default class Navbar extends Component {

	handleSearch = async (event) => {
		let target = event.target
		let parentElement = target.parentElement
		if (parentElement.nodeName === "DIV") {
			let content = parentElement.querySelector("input")
			await this.props.searchContent(content.value)
			content.value = ""
		}
		else {
			let content = parentElement.parentElement.querySelector("input")
			await this.props.searchContent(content.value)
			content.value = ""
		}
	}

	handleEvent = (event) => {
		if (event.key === "Enter") {
			this.props.searchContent(event.target.value)
		}
	}

	render() {
		return (
			<div id='nav'>
				<div className="logoName">
					<div className="logo">
						<img src={Logo} alt="" />
					</div>
					<p>News</p>
				</div>

				<div className={`search-box ${this.props.disableSearch !== "Everything" ? "disabled" : "" }`} >
					<input onKeyDown={this.handleEvent} placeholder='Search News' className='search-input' type="text" name="search" />
					<FaIcons.FaSearch className='search-icon' onClick={this.handleSearch} />
				</div>
			</div>
		)
	}
}

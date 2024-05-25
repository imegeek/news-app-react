import React, { Component } from 'react'
import './css/Spinner.css'

export default class Spinner extends Component {
	render() {
		return (
			<div className='spinner'>
				<div className="loading"></div>
			</div>
		)
	}
}

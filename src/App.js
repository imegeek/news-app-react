import './App.css';
import React, { Component } from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
import Options from './components/Options';
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {

  countries = [
    { fullName: "India", shortName: "IN" },
    { fullName: "Japan", shortName: "JP" },
    { fullName: "South Korea", shortName: "KR" },
    { fullName: "Ukraine", shortName: "UA" },
    { fullName: "Singapore", shortName: "SG" },
    { fullName: "Sweden", shortName: "SE" },
    { fullName: "United States", shortName: "US" },
  ];

  countryOptions = this.countries.map((country) => {
    return country.fullName
  })

  categoryOptions = ["General", "Science", "Business", "Sports", "Health", "Technology", "Entertainment"]


  constructor() {
    super();
    this.state = {
      title: "Everything",
      // title: "Top Headlines",
      country: "in",
      category: "general",
      progress: 0,
      search: "india"
    }
  }

  getShortName = (fullName) => {
    const country = this.countries.find(country => country.fullName === fullName);
    return country ? country.shortName : null;
  }

  handleSelectedCallback = (data) => {
    this.setState(
      {
        title: data
      }
    )
  }

  handleCountryCallBack = (data) => {
    this.setState(
      {
        country: this.getShortName(data).toLocaleLowerCase()
      }
    )
  }

  handleCategoryCallBack = (data) => {
    this.setState(
      {
        category: data
      }
    )
  }

  setProgress = (value) => {
    this.setState(
      {
        progress: value
      }
    )
  }

  handleSearchCallback = (data) => {
    this.setState(
      {
        search: data
      }
    )
  }

  render() {
    return (
      <>
        <Navbar disableSearch={this.state.title} searchContent={this.handleSearchCallback} />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
        />
        <Options
        exception={this.state.title}
        countryOptions={this.countryOptions} 
        categoryOptions={this.categoryOptions} 
        selectedCallback={this.handleSelectedCallback}
        countryCallback={this.handleCountryCallBack} 
        categoryCallback={this.handleCategoryCallBack} 
        />
        <News search={this.state.search} title={this.state.title} setProgress={this.setProgress} country={this.state.country} category={this.state.category} />
      </>
    )
  }
}

export default App

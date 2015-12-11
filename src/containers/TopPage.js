import React, { Component } from "react"
import Banner from "../components/toppage/Banner"
import TopHeader from "../components/partials/TopHeader"

export default class TopPage extends Component{
  render() {
    return(
      <div>
        <TopHeader />
        <Banner />
      </div>
    );
  }
}

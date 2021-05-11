import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import NYTDisplay from "./NYTDisplay";

export default class NYTResults extends Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      searchTerm: "",
      startDate: "",
      endDate: "",
      results: [],
    };
  }

  nytFetch = async () => {
    const base_url: string =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    const key: string = "";
    const url: string = `${base_url}?api-key=${key}&q=${this.state.searchTerm}&page=${this.state.pageNumber}`;

    if (this.state.startDate) {
      url = `${url}&start-date=${this.state.startDate}`;
    }
    if (this.state.endDate) {
      url = `${url}&end-date=${this.state.endDate}`;
    }

    console.log(url);

    const response = await fetch(url);
    const data = await response.json();
  };

  handleSubmit() {
  }

  handleChange(){
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="searchTerm">Enter a search term</Label>
            <Input
              type="text"
              id="searchTerm"
            />
          </FormGroup>
          <FormGroup>
            <Label for="startDate">Enter a search term</Label>
            <Input
              type="text"
              id="startDate"
            />
          </FormGroup>
          <FormGroup>
            <Label for="endDate">Enter a search term</Label>
            <Input
              type="text"
              id="endDate"
            />
          </FormGroup>
          <Button type="submit">Search</Button>
        </Form>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          
        </div>
      </div>
    )
  }
}

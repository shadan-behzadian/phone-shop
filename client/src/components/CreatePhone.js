import React, { Component } from "react";
import axios from "axios";

class CreatePhone extends Component {
  state = {
    name: "",
    manufacturer: "",
    description: "",
    color: "",
    price: "",
    imageFileName: "",
    screen: "",
    processor: "",
    ram: "",
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
      manufacturer: event.target.value,
      description: event.target.value,
      color: event.target.value,
      price: event.target.value,
      imageFileName: event.target.value,
      screen: event.target.value,
      processor: event.target.value,
      ram: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    const phone = {
      name: this.state.name,
      manufacturer: this.state.manufacturer,
      description: this.state.description,
      color: this.state.color,
      price: this.state.price,
      imageFileName: this.state.imageFileName,
      screen: this.state.screen,
      processor: this.state.processor,
      ram: this.state.ram,
    };
    axios.post("api/phones", { phone }).then((res) => {
      console.log(res);
      console.log(res.data);
      console.log(phone);
    });
  };

  render() {
    console.log(this.state.name);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Phone name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <label>
          Manufacturer:
          <input
            type="text"
            manufacturer="manufacturer"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            descriptionan="descriptionan"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Color:
          <input type="text" color="color" onChange={this.handleChange} />
        </label>
        <label>
          Price:
          <input type="number" price="price" onChange={this.handleChange} />
        </label>
        <label>
          Image link:
          <input
            type="url"
            imageFileName="imageFileName"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Screen:
          <input type="text" screen="screen" onChange={this.handleChange} />
        </label>
        <label>
          Processor:
          <input
            type="text"
            processor="processor"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Ram:
          <input type="text" ram="ram" onChange={this.handleChange} />
        </label>
        <button type="submit">Create</button>
      </form>
    );
  }
}

export default CreatePhone;

import React, { Component } from "react";
import axios from "axios";
import PhoneDetails from "./PhoneDetails";
import NotFound from "./NotFound";
import Loading from "./Loading";
import "../style/phoneList.css";
class PhoneList extends Component {
  state = {
    phones: [],
    search: "",
    selectedPhone: "",
  };
  //methode to make the filter search
  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  componentDidMount() {
    axios.get("/api/phones").then((res) =>
      this.setState({
        phones: res.data,
      })
    );
  }

  toggleInfo = (phoneId) => {
    this.setState({
      selectedPhone: phoneId,
    });
  };

  render() {
    //added for earch bar
    let filteredPhones = this.state.phones.filter((thePhone) => {
      return (
        thePhone.name.toUpperCase().indexOf(this.state.search.toUpperCase()) !==
        -1
      );
    });

    if (this.state.phones.length !== 0) {
      if (filteredPhones.length !== 0) {
        return (
          <div className="mainPage">
            <label>
              Search phones:
              <input
                type="text"
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
                placeholder="e.g. Iphone 11"
              />
            </label>
            <div className="allPhones">
              {filteredPhones.map((phone) => (
                <div key={phone._id} className="individualPhone">
                  <img
                    src={phone.imageFileName}
                    alt="phone"
                    onClick={() => this.toggleInfo(phone._id)}
                  />

                  <PhoneDetails
                    detail={phone}
                    isVisible={this.state.selectedPhone === phone._id}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      } else {
        return (
          <div className="mainPage">
            <label>
              Search phones:
              <input
                type="text"
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
                placeholder="e.g. Iphone 11"
              />
            </label>
            <NotFound />
          </div>
        );
      }
    } else {
      return <Loading />;
    }
  }
}

export default PhoneList;

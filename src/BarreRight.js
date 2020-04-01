import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

class BarreRight extends React.Component {
  state = {
    cities: [],
    isLoading: true,
    hover: false,
    selected: "",
    cityValueStart: "",
    cityValueArrival: ""
  };
  componentDidMount = async () => {
    const response = await axios.get(
      "https://api.comparatrip.eu/cities/popular/5"
    );
    this.setState({
      cities: response.data,
      isLoading: false
    });
  };

  toggleHover = () => {
    this.setState({ hover: true });
  };

  changeBackgroundColor = i => {
    this.toggleHover();
    this.setState({
      selected: i
    });
  };

  render() {
    return (
      <div
        style={{
          display: "block",
          backgroundColor: "#FFFFFF",
          borderRadius: 2,
          mniHeight: 460,
          width: "48.82117%",
          marginTop: 35,
          marginBottom: 140,
          padding: 32
        }}
      >
        {/* <div
          style={{
            margin: 0,
            width: 0,
            height: 0,
            borderLeft: "60px solid transparent",
            borderRight: "60px solid transparent",
            borderBottom: "60px solid #069",
            position: "relative",
            "&::before": {
              content: "",
              border: "1px solid #069",
              borderLeft: "100px solid transparent",
              borderRight: "100px solid transparent",
              borderTop: "100px solid #069",
              width: 0,
              height: 0,
              position: "absolute",
              top: 100,
              left: -100
            }
          }}
        ></div> */}
        <div>
          <h1
            style={{
              fontSize: 20,
              fontWeight: 400,
              textRendering: "optimizeLegibility",
              color: "#323E42",
              marginBottom: 15
            }}
          >
            Choisissez une gare de départ
          </h1>

          {!this.state.isLoading && (
            <ul
              style={{
                display: "block",
                flex: 1,
                listStyle: "none",
                fontSize: 20,
                outline: 0,
                marginRight: 10,
                overflow: "auto",
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: "#DCE3E6",
                borderRadius: 5,
                backgroundColor: "#FFFFFF",
                paddingInlineStart: 0
              }}
            >
              {this.state.cities.map((city, i) => (
                <li
                  onClick={() => {
                    this.props.data.selectedStartInput &&
                      this.props.data.updateStartInput(city.unique_name);

                    this.props.data.selectedArrivalInput &&
                      this.props.data.updateArrivalInput(city.unique_name);
                  }}
                  key={i}
                  onMouseEnter={() => {
                    this.changeBackgroundColor(i);
                  }}
                  onMouseLeave={() => {
                    this.changeBackgroundColor(i);
                  }}
                  style={{
                    display: "flex",
                    borderBottomStyle: "solid",
                    borderWidth: 1,
                    borderColor: "#DCE3E6",
                    cursor: "pointer",
                    backgroundColor:
                      this.state.selected === i && this.state.hover
                        ? "#FCFCFD"
                        : ""
                  }}
                >
                  <FontAwesomeIcon
                    style={{
                      marginRight: 3,
                      marginLeft: 12,
                      marginTop: 12,
                      color:
                        this.state.selected === i && this.state.hover
                          ? "#323E42"
                          : "#808080"
                    }}
                    icon={faMapMarkerAlt}
                  ></FontAwesomeIcon>

                  <div style={{ marginTop: 4, marginLeft: 5 }}>
                    <p
                      className="Cities"
                      href={city.city_id}
                      key={city.city_id}
                      style={{
                        paddingLeft: 1.3,
                        color:
                          this.state.selected === i && this.state.hover
                            ? "#323E42"
                            : "#808080"
                      }}
                    >
                      {city.unique_name}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default BarreRight;

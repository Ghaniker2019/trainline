import React, { Component } from "react";

export default class Person extends Component {
  render() {
    return (
      <div
        style={{
          display: "block",
          backgroundColor: "#FFFFFF",
          borderRadius: 4,
          mniHeight: 460,
          width: "48.82117%",
          marginTop: 35,
          marginBottom: 140,
          marginRight: "2.35765%",
        }}
      >
        <div
          style={{
            display: "block",
            backgroundColor: "#FFFFFF",
            borderRadius: 1,
            mniHeight: 460,
            width: "100%",
          }}
        >
          <div style={{ marginTop: "35px", marginLeft: "30px" }}>
            <h1
              style={{
                fontSize: 20,
                fontWeight: 400,
                color: "#323E42",
                marginBottom: 15,
              }}
            >
              Choisissez vos passagers
            </h1>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                1 Adulte (26 - 59)
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React from "react";
import Date from "./Date";
import "./fonts/SourceSansPro-Regular.ttf";

class CalandBarre extends React.Component {
  state = {
    time: "",
  };
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
          padding: 32,
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1
              style={{
                fontSize: 20,
                fontWeight: 400,
                textRendering: "optimizeLegibility",
                color: "#323E42",
                marginBottom: 15,
              }}
            >
              Choisissez la date du départ
            </h1>
            {this.props.onFocus && (
              <button
                className="primary"
                style={{
                  backgroundColor: "#01C3A7",
                  color: "white",
                  borderRadius: 5,
                  paddingLeft: 5,
                  paddingRight: 5,
                  fontSize: "10px",
                  height: "32px",
                  marginRight: "33px",
                }}
              >
                PAS DE RETOUR
              </button>
            )}
          </div>
          <div
            style={{
              padding: 14,
              marginLeft: "25px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ justifyContent: "flex-start" }}>
                <Date />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%",
                    height: "35px",
                    margin: "13px auto 8px",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    userSelect: "none",
                    cursor: "default",
                    border: "solid",
                    borderColor: "#DCE3E6",
                    borderWidth: 1,
                    borderRadius: "3px",
                    padding: "3px 0",
                    maxWidth: "320px",
                  }}
                >
                  <time
                    onClick={() => {
                      this.setState({ time: "6h" });
                    }}
                  >
                    6h
                  </time>
                  <time
                    onClick={() => {
                      this.setState({ time: "8h" });
                    }}
                  >
                    8h
                  </time>
                  <time
                    onClick={() => {
                      this.setState({ time: "10h" });
                    }}
                  >
                    10h
                  </time>
                  <time
                    onClick={() => {
                      this.setState({ time: "12h" });
                    }}
                  >
                    12h
                  </time>
                  <time
                    onClick={() => {
                      this.setState({ time: "14h" });
                    }}
                  >
                    14h
                  </time>
                  <time
                    onClick={() => {
                      this.setState({ time: "16h" });
                    }}
                  >
                    16h
                  </time>
                  <time
                    onClick={() => {
                      this.setState({ time: "18h" });
                    }}
                  >
                    18h
                  </time>
                  <time
                    onClick={() => {
                      this.setState({ time: "20h" });
                    }}
                  >
                    20h
                  </time>
                  <time
                    onClick={() => {
                      this.setState({ time: "22h" });
                    }}
                  >
                    22h
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalandBarre;

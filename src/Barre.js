import React from "react";
import BarreRight from "./BarreRight";
import CalandBarre from "./CalandBarre";
import BarreRightHome from "./BarreRightHome";
import Person from "./Person";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faSignOutAlt,
  faCalendarAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Background from "./images/train.jpg";
import Grid from '@material-ui/core/Grid';


class Barre extends React.Component {
  state = {
    start: "",
    arrival: "",
    go: "",
    return: "",
    person: "",
    personIsVisible: false,
    selectedPersonInput: false,
    cityIsVisible: false,
    calandIsVisible: false,
    barreRightHomeIsVisible: true,
    onFocus: false,
    selectedGoInput: false,
    selectedReturnInput: false,
    selectedStartInput: false,
    selectedArrivalInput: false,
  };

  onSubmit = () => {
    this.setState({
      start: "",
      arrival: "",
      go: "",
      return: "",
      person: "",
    });
  };

  updateGoInput = (date) => {
    this.setState({
      go: date,
    });
  };

  updateReturnInput = (date) => {
    this.setState({
      return: date,
    });
  };

  updateStartInput = (city) => {
    this.setState({
      start: city,
    });
  };
  updateArrivalInput = (city) => {
    this.setState({
      arrival: city,
    });
  };
  handelStart = (e) => {
    e.preventDefault();
    this.setState({
      start: e.target.value,
    });
  };
  handelArrival = (e) => {
    e.preventDefault();
    this.setState({
      arrival: e.target.value,
    });
  };

  handelGo = (e) => {
    e.preventDefault();
    this.setState({
      go: e.target.value,
    });
  };

  handelReturn = (e) => {
    e.preventDefault();
    this.setState({
      return: e.target.value,
    });
  };

  goWhere = () => {
    this.setState({
      cityIsVisible: true,
      calandIsVisible: false,
      onFocus: false,
      personIsVisible: false,
    });
  };
  displayCaland = () => {
    this.setState({
      calandIsVisible: true,
      cityIsVisible: false,
      personIsVisible: false,
    });
  };
  displayPerson = () => {
    this.setState({
      personIsVisible: true,
      calandIsVisible: false,
      cityIsVisible: false,
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: "url(" + Background + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid container spacing={0} direction="row" justify="center">

          <Grid item xs={12} md={4} >
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 4,
                maxWidth: 400,
                padding: 32,
                margin: "60px 0 10px 5px",
                height: 500,
              }}
            >

              <form onSubmit={this.onSubmit}>
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: 1,
                  }}
                >
                  <h1
                    style={{
                      fontSize: 20,
                      fontWeight: "lighter",
                      textRendering: "optimizeLegibility",
                      color: "#323E42",
                      marginBottom: 15,
                    }}
                  >
                    Quel est votre trajet ?
                  </h1>
                  <div
                    onClick={() => {
                      this.goWhere();
                    }}
                    style={{
                      marginBottom: 30,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        border: "1px solid",
                        borderColor: this.state.selectedStartInput
                          ? "#00C3A7"
                          : "#DCE3E6",
                        borderTopRightRadius: "5px",
                        borderTopLeftRadius: "5px",
                      }}
                    >
                      <FontAwesomeIcon
                        style={{
                          paddingRight: 0,
                          paddingLeft: 0,
                          paddingTop: 0,
                          marginTop: 15,
                          marginLeft: 15,
                        }}
                        icon={faSignOutAlt}
                        color="grey"
                      ></FontAwesomeIcon>
                      <input
                        onClick={() => {
                          this.setState({
                            selectedStartInput: true,
                            selectedArrivalInput: false,
                            selectedReturnInput: false,
                            selectedGoInput: false,
                            selectedPersonInput: false,
                            barreRightHomeIsVisible: false,
                          });
                        }}
                        style={{
                          width: "100%",
                          fontSize: "100%",
                          boxShadow: "none",
                          paddingLeft: 20,
                          paddingRight: 0,
                          paddingBottom: 8,
                          paddingTop: 8,
                          lineHeight: 2,
                          border: "none",
                          margin: 0,
                        }}
                        onChange={this.handelStart}
                        type="text"
                        placeholder="Saisissez vôtre gare de départ..."
                        name="départ"
                        value={
                          this.state.start !== this.state.arrival
                            ? this.state.start
                            : null
                        }
                        id="01"
                      ></input>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        border: "solid",
                        borderWidth: 1,
                        borderColor: this.state.selectedArrivalInput
                          ? "#00C3A7"
                          : "#DCE3E6",
                        borderTopColor: "transparent",
                        borderBottomRightRadius: "5px",
                        borderBottomLeftRadius: "5px",
                      }}
                    >
                      <FontAwesomeIcon
                        style={{
                          paddingRight: 0,
                          paddingLeft: 0,
                          paddingTop: 0,
                          marginTop: 15,
                          marginLeft: 15,
                        }}
                        icon={faSignInAlt}
                        color="grey"
                      ></FontAwesomeIcon>
                      <input
                        onClick={() => {
                          this.setState({
                            selectedPersonInput: false,
                            selectedStartInput: false,
                            selectedArrivalInput: true,
                            selectedReturnInput: false,
                            selectedGoInput: false,
                            barreRightHomeIsVisible: false,
                          });
                        }}
                        style={{
                          width: "100%",
                          fontSize: "100%",
                          boxShadow: "none",
                          paddingLeft: 20,
                          paddingRight: 0,
                          paddingBottom: 8,
                          paddingTop: 8,
                          lineHeight: 2,
                          border: "none",
                          margin: 0,
                        }}
                        onChange={this.handelArrival}
                        type="text"
                        placeholder="Saisissez vôtre gare d'arrivée..."
                        name="arrivée"
                        value={
                          this.state.start !== this.state.arrival
                            ? this.state.arrival
                            : null
                        }
                        id="02"
                      ></input>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      this.displayCaland();
                    }}
                    style={{
                      backgroundColor: "#FFFFFF",
                      marginBottom: 30,
                    }}
                  >
                    <div
                      onClick={() => {
                        this.setState({
                          onFocus: false,
                          selectedPersonInput: false,
                          selectedGoInput: true,
                          selectedReturnInput: false,
                          selectedStartInput: false,
                          selectedArrivalInput: false,
                          barreRightHomeIsVisible: false,
                        });
                      }}
                      style={{
                        display: "flex",
                        border: "1px solid",
                        borderBottomColor: "transparent",
                        borderColor: this.state.selectedGoInput
                          ? "#00C3A7"
                          : "#DCE3E6",
                        borderTopRightRadius: "5px",
                        borderTopLeftRadius: "5px",
                      }}
                    >
                      <FontAwesomeIcon
                        style={{
                          paddingRight: 0,
                          paddingLeft: 0,
                          paddingTop: 0,
                          marginTop: 15,
                          marginLeft: 15,
                        }}
                        icon={faCalendarAlt}
                        color="grey"
                      ></FontAwesomeIcon>
                      <input
                        style={{
                          width: "100%",
                          fontSize: "100%",
                          boxShadow: "none",
                          paddingLeft: 20,
                          paddingRight: 0,
                          paddingBottom: 8,
                          paddingTop: 8,
                          lineHeight: 2,
                          opacity: 1,
                          border: "none",
                          margin: 0,
                        }}
                        type="text"
                        placeholder="aller"
                        autoComplete="on"
                        spellCheck="false"
                        required="true"
                        name="aller"
                        id="03"
                        onChange={this.handelGo}
                        value={this.state.go}
                      ></input>
                    </div>
                    <div
                      onClick={() => {
                        this.setState({
                          onFocus: true,
                          selectedPersonInput: false,
                          selectedReturnInput: true,
                          selectedGoInput: false,
                          selectedStartInput: false,
                          selectedArrivalInput: false,
                          barreRightHomeIsVisible: false,
                        });
                      }}
                      style={{
                        display: "flex",
                        backgroundColor: "#FFFFFF",
                        border: "solid",
                        borderWidth: 1,

                        borderColor: this.state.selectedReturnInput
                          ? "#00C3A7"
                          : "#DCE3E6",
                        borderTopColor: "transparent",
                        borderBottomRightRadius: "5px",
                        borderBottomLeftRadius: "5px",
                      }}
                    >
                      <FontAwesomeIcon
                        style={{
                          paddingRight: 0,
                          paddingLeft: 0,
                          paddingTop: 0,
                          marginTop: 15,
                          marginLeft: 15,
                        }}
                        icon={faCalendarAlt}
                        color="grey"
                      ></FontAwesomeIcon>
                      <input
                        style={{
                          width: "100%",
                          fontSize: "100%",
                          boxShadow: "none",
                          paddingLeft: 20,
                          paddingRight: 0,
                          paddingBottom: 8,
                          paddingTop: 8,
                          lineHeight: 2,
                          opacity: 1,
                          border: "none",
                          margin: 0,
                        }}
                        type="text"
                        placeholder="retour"
                        autoComplete="on"
                        spellCheck="false"
                        required="true"
                        name="retour"
                        id="04"
                        onChange={this.handelReturn}
                        value={this.state.return}
                      ></input>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      this.setState({
                        selectedPersonInput: true,
                        selectedGoInput: false,
                        selectedReturnInput: false,
                        selectedStartInput: false,
                        selectedArrivalInput: false,
                        personIsVisible: true,
                        calandIsVisible: false,
                        cityIsVisible: false,
                        barreRightHomeIsVisible: false,
                      });
                    }}
                    style={{
                      display: "flex",
                      border: "solid",
                      borderWidth: 1,
                      borderColor: this.state.selectedPersonInput
                        ? "#00C3A7"
                        : "#DCE3E6",
                      borderRadius: "5px",
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    <FontAwesomeIcon
                      style={{
                        paddingRight: 0,
                        paddingLeft: 0,
                        paddingTop: 0,
                        marginTop: 15,
                        marginLeft: 15,
                      }}
                      icon={faUser}
                      color="grey"
                    ></FontAwesomeIcon>
                    <input
                      style={{
                        width: "100%",
                        fontSize: "100%",
                        boxShadow: "none",
                        paddingLeft: 20,
                        paddingRight: 0,
                        paddingBottom: 8,
                        paddingTop: 8,
                        lineHeight: 2,
                        opacity: 1,
                        border: "none",
                        margin: 0,
                      }}
                      type="text"
                      placeholder="1 Adulte(26-59) "
                      autoComplete="on"
                      spellCheck="false"
                      required="true"
                      name="personnes"
                      id="05"
                      onChange={this.onChange}
                      value={this.state.person}
                    ></input>
                    <button
                      style={{
                        width: "20%",
                        borderColor: "transparent",
                        borderRadius: "3px",
                      }}
                      type="button"
                      class="btn btn-outline-info green"
                    >
                      +
                    </button>
                  </div>
                </div>
              </form>

              <div
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "space-around",
                  marginTop: "20px",
                }}
              >
                <div style={{ justifyContent: "flex-start" }}>
                  <p style={{ color: "#01C3A7", fontSize: 12, marginTop: 20 }}>
                    Utiliser un code de réduction
                  </p>
                </div>
                <button
                  className="primary"
                  style={{
                    backgroundColor: "#01C3A7",
                    color: "white",
                    borderRadius: 5,
                    marginLeft: 60,
                    marginTop: 20,
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                >
                  RECHERCHER
                </button>
              </div>

            </div>
          </Grid>
          <Grid item xs={12} md={4} >
            {this.state.calandIsVisible && (
              <CalandBarre
                onFocus={this.state.onFocus}
                updateGoInput={this.updateGoInput}
                updateReturnInput={this.updateReturnInput}
                selectedGoInput={this.state.selectedGoInput}
                selectedReturnInput={this.state.selectedReturnInput}
              />
            )}   {this.state.cityIsVisible && (

              <BarreRight
                data={{
                  updateStartInput: this.updateStartInput,
                  updateArrivalInput: this.updateArrivalInput,
                  selectedStartInput: this.state.selectedStartInput,
                  selectedArrivalInput: this.state.selectedArrivalInput,
                }}
              />
            )}  {this.state.barreRightHomeIsVisible && <BarreRightHome />}
            {this.state.personIsVisible && (
              <Person selectedPersonInput={this.state.selectedPersonInput} />
            )}
          </Grid>


        </Grid>
      </div >
    );
  }
}

export default Barre;

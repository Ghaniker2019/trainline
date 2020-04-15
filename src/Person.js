import React, { Component } from "react";
import "./person.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faAddressCard } from "@fortawesome/free-solid-svg-icons";

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
            <div style={{ display: "flex" }}>
              <div
                style={{
                  color: "black",
                  backgroundColor: "#FFFFFF",
                  width: "46.5%",
                }}
                class="dropdown"
              >
                <button
                  style={{
                    color: "black",
                    maxHeight: "44px",
                    backgroundColor: "#FFFFFF",
                    width: "100%",
                    borderColor: "#DCE3E6",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
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
                  <a class="dropdown-item" href="#a">
                    Action
                  </a>
                  <a class="dropdown-item" href="#b">
                    Another action
                  </a>
                  <a class="dropdown-item" href="#c">
                    Something else here
                  </a>
                </div>
              </div>
              <button
                style={{
                  color: "#28A994",
                  width: "46.5%",
                  borderColor: "#DCE3E6",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderLeftColor: "transparent",
                }}
                type="button"
                class="btn btn-primary btn-sm"
                id="BtnRight"
              >
                Cartes et abonnements
              </button>
            </div>
            <button
              style={{
                color: "#28A994",
                width: "93%",
                borderColor: "#DCE3E6",
                marginTop: "26px",
                backgroundColor: "#eefffd",
                marginBottom: "40px",
              }}
              type="button"
              class="btn btn-primary btn-sm"
              id="BtnRight"
            >
              AJOUTER UN AUTRE PASSAGERS
            </button>
            <div style={{ marginTop: "10px", marginRight: "10px" }}>
              <h
                style={{
                  color: "#323E42",
                  fontSize: "19px",
                  fontWeight: "bold",
                }}
              >
                Retrouver vos passagers sauvegardés ?
              </h>
              <p style={{ marginTop: "2px", marginBottom: "0px" }}>
                Connectez-vous à votre compte pour accéder aux passagers
                enregistrés lors de vos précédentes recherches.
              </p>
              <FontAwesomeIcon
                style={{
                  paddingRight: 0,
                  paddingLeft: 0,
                  paddingTop: 0,
                  marginRight: "4px",
                }}
                icon={faSignInAlt}
                color="#01C3A7"
              ></FontAwesomeIcon>
              <a href="#se_connecter" style={{ color: "#01C3A7" }}>
                Se connecter
              </a>
            </div>
            <div style={{ marginTop: "10px", marginRight: "10px" }}>
              <h
                style={{
                  color: "#323E42",
                  fontSize: "19px",
                  fontWeight: "bold",
                }}
              >
                Économisez grâce aux cartes de réduction
              </h>
              <p style={{ marginTop: "2px", marginBottom: "0px" }}>
                Bénéficiez de réductions sur vos voyages en train tout au long
                de l'année.
              </p>
              <div style={{ display: "flex", marginRight: "10px" }}>
                <FontAwesomeIcon
                  style={{
                    paddingRight: 0,
                    paddingLeft: 0,
                    paddingTop: 0,
                    marginTop: "4px",
                    marginRight: "5px",
                  }}
                  icon={faAddressCard}
                  color="#01C3A7"
                ></FontAwesomeIcon>
                <a href="#acheter_carte_reduc" style={{ color: "#01C3A7" }}>
                  ACHETER UNE CARTE DE RÉDUCTION
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

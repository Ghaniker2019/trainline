import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faRegistered,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import "./person.css";
import AppStore from "./images//Download_on_the_App_Store.png";
import PlayStore from "./images/D_play_store.png";

export default class BarreRightHome extends Component {
  render() {
    return (
      <div
        style={{
          display: "block",
          backgroundColor: "#F8FDFC",
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
            backgroundColor: "#213550",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
          }}
        >
          <nav class="navbar navbar-light ">
            <span id="navBar" class="navbar-brand mb-0 ml-5  h1">
              Les petits plus de Trainline
            </span>
          </nav>
        </div>
        <div
          style={{
            padding: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                marginRight: "30px",
              }}
            >
              <FontAwesomeIcon
                style={{
                  border: "solid transparent",
                  borderRadius: "50%",
                  backgroundColor: "#213550",
                  width: "68px",
                  height: "68px",
                  padding: "15px",
                }}
                icon={faBookmark}
                color="#FFFFFF"
              ></FontAwesomeIcon>
            </div>
            <div
              style={{ height: "100px", maxHeight: "100px", width: "600px" }}
            >
              <h style={{ color: "#17C5AB", fontWeight: "bold" }}>
                Vos billets au meilleur prix
              </h>
              <p>
                Achetez vos billets aux prix fixés par les transporteurs, sans
                frais supplémentaires.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                marginRight: "30px",
              }}
            >
              <FontAwesomeIcon
                style={{
                  border: "solid transparent",
                  borderRadius: "50%",
                  backgroundColor: "#213550",
                  width: "68px",
                  height: "68px",
                  padding: "15px",
                }}
                icon={faRegistered}
                color="#FFFFFF"
              ></FontAwesomeIcon>
            </div>
            <div
              style={{ height: "100px", maxHeight: "100px", width: "600px" }}
            >
              <h style={{ color: "#17C5AB", fontWeight: "bold" }}>
                Cartes de réduction
              </h>
              <p>Elles sont toutes acceptées, comme vos cartes de fidélité.</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                marginRight: "30px",
              }}
            >
              <FontAwesomeIcon
                style={{
                  border: "solid transparent",
                  borderRadius: "50%",
                  backgroundColor: "#213550",
                  width: "68px",
                  height: "68px",
                  padding: "15px",
                }}
                icon={faCreditCard}
                color="#FFFFFF"
              ></FontAwesomeIcon>
            </div>
            <div style={{ height: "80px", maxHeight: "80px", width: "600px" }}>
              <h style={{ color: "#17C5AB", fontWeight: "bold" }}>
                Payez en toute sécurité
              </h>
              <p>CB, Amex, PayPal : c’est vous qui voyez.</p>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid grey",
            }}
          >
            <h1 style={{ fontSize: 16, margin: "20px 2% 0 5%" }}>
              L’app leader pour voyager en train et en bus en Europe
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "25px 40px 0 40px",
            }}
          >
            <div
              style={{
                height: "40px",
                width: "40%",
                borderRadius: "5px",
                backgroundImage: "url(" + AppStore + ")",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                cursor: "pointer",
              }}
            ></div>
            <div
              style={{
                height: "40px",
                width: "40%",
                borderRadius: "5px",
                backgroundImage: "url(" + PlayStore + ")",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                cursor: "pointer",
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

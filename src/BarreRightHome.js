import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faRegistered,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import "./person.css";
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
            padding: 36,
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "30%",
                height: "10%",
                border: "solid",
                borderRadius: "100%",
                backgroundColor: "#213550",
                marginRight: "30px",
                marginLeft: "20px",
              }}
            >
              <FontAwesomeIcon
                style={{
                  width: "80%",
                  height: "100%",
                  marginLeft: "5px",
                  padding: 14,
                }}
                icon={faBookmark}
                color="#FFFFFF"
              ></FontAwesomeIcon>
            </div>
            <div style={{ height: "100px", width: "600px" }}>
              <h style={{ color: "#01C3A7" }}>Vos billets au meilleur prix</h>
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
                display: "flex",
                width: "30%",
                height: "10%",
                border: "solid",
                borderRadius: "100%",
                backgroundColor: "#213550",
                marginRight: "30px",
                marginLeft: "20px",
              }}
            >
              <FontAwesomeIcon
                style={{
                  width: "80%",
                  height: "100%",
                  marginLeft: "5px",
                  padding: "6px",
                }}
                icon={faRegistered}
                color="#FFFFFF"
              ></FontAwesomeIcon>
            </div>
            <div style={{ height: "100px", width: "600px" }}>
              <h style={{ color: "#01C3A7" }}>Cartes de réduction</h>
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
                display: "flex",
                width: "30%",
                height: "5%",
                border: "solid",
                borderRadius: "100%",
                backgroundColor: "#213550",
                marginRight: "30px",
                marginLeft: "20px",
              }}
            >
              <FontAwesomeIcon
                style={{
                  width: "80%",
                  height: "100%",
                  marginLeft: "5px",
                  padding: 10,
                }}
                icon={faCreditCard}
                color="#FFFFFF"
              ></FontAwesomeIcon>
            </div>
            <div style={{ height: "100px", width: "600px" }}>
              <h style={{ color: "#01C3A7" }}>Payez en toute sécurité</h>
              <p>CB, Amex, PayPal : c’est vous qui voyez.</p>
            </div>
          </div>
          <div
            style={{
              borderTop: "solid",
              borderTopColor: "grey",
            }}
          >
            <h1 style={{ fontSize: 16, marginTop: "20px" }}>
              L’app leader pour voyager en train et en bus en Europe
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

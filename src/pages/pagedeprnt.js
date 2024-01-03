import React, { useState } from "react";
import ReactToPrint from "react-to-print";
import logo from "../images/NTV.png";
import "./pagedeconge.css";
import { toast } from "react-toastify";

class PrintComponent extends React.Component {
  handlePrint = () => {};
  render() {
    return (
      <div
        className="container-Pagetest"
        style={{
          padding: "15px 26px",
          backgroundColor: "#fff",
          width: "210mm",
          height: "290mm",
          border: "1px solid black",
          borderBottom: "none",
        }}
      >
        <div className="head">
          <div className="top">
            <img className="imgentv" src={logo} alt="" />
            <div className="text">
              <h1>الوطنيــــــــــة لـنـــقــــــل المســــــافريـــــــن</h1>
              <p>Nationale de Transport de Voyageurs</p>
              <h4>EPE - NTV - SPA Laghouat</h4>
              <span>Spa Au Capital Sociai de 100.000.000 DA</span>
            </div>
          </div>
          <div className="text2" style={{ width: "80%" }}>
            <p>
              Ref : <span>{this.props.refValue}</span>
            </p>
            <p>
              Laghouat le : <span>{this.props.dateValue}</span>
            </p>
          </div>
          <h1 className="h1">TITRE CONGE ANNUEL</h1>
        </div>
        <div className="container-body">
          <h1 className="h1-body">
            <span className="title1">Nom et Prénom </span>
            <span className="content">
              <span className="span">: {this.props.nomValue}</span>
            </span>
          </h1>
          <h1 className="h1-body">
            <span className="title1">Function </span>
            <span className="content">
              <span className="span">: {this.props.funValue}</span>
            </span>
          </h1>
          <h1 className="h1-body">
            <span className="title1">Direction </span>
            <span className="content">: {this.props.directionValue}</span>
          </h1>
          <h1 className="h1-body">
            <span className="title1">Exercice</span>
            <span className="content">: {this.props.ExerciceValue}</span>
          </h1>

          <h1 className="h1-body">
            <span className="title1">Droit de congé </span>
            <span className="content">: {this.props.DroitCongeValue}</span>
          </h1>
          <h1 className="h1-body">
            <span className="title">Nombre jours de Congé </span>
            <span className="content">
              : {this.props.NombreJoursCongeValue}
            </span>
          </h1>
          <h1 className="h1-body">
            <span className="title">Reliquat </span>
            <span className="content">: {this.props.ReliquatValue}</span>
          </h1>
          <h1 className="h1-body">
            <span className="title">À compter du</span>
            <span className="content"> {this.props.dCompterDuValue} Au :</span>
            <span className="content"> {this.props.ACompterDuValue}</span>
          </h1>
          <h1 className="h1-body">
            <span className="title">
              L'intéressé(e) reprendra son service le:
            </span>
            <span className="content">
              {this.props.ReprendraServiceLeValue}
            </span>
          </h1>
          <h1 className="h1-body">
            <span className="title">Lieu :</span>
            <span className="content">{this.props.LieuValue}</span>
          </h1>
        </div>
      </div>
    );
  }
}

class PrintableComponentt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomValue: "",
      funValue: "",
      directionValue: "",
      ExerciceValue: "",
      DroitCongeValue: "",
      NombreJoursCongeValue: "",
      ReliquatValue: "",
      ACompterDuValue: "",
      dCompterDuValue: "",
      ReprendraServiceLeValue: "",
      LieuValue: "",
      dateValue: "",
      refValue: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  printComponent = () => {
    this.componentRef && this.componentRef.handlePrint();
  };

  render() {
    return (
      <div style={{marginTop: "80px", display: "flex", alignItems: "center" }}>
        <div
          style={{ margin: "0 100px", display: "flex", flexDirection: "column" }}
          className="formInput"
        >
          <div className="detais-body">
            <div className="flex">
            
              <label htmlFor="Direction">ref</label>
              <input
                id="ref"
                placeholder="ref"
                type="text"
                name="refValue"
                value={this.state.refValue}
                onChange={this.handleInputChange}
              />
              <label htmlFor="Direction">date</label>
              <input
                id="date"
                placeholder="date"
                type="text"
                name="dateValue"
                value={this.state.dateValue}
                onChange={this.handleInputChange}
              />
                <label htmlFor="Direction">Nom et Prénom</label>
              <input
                id="ref"
                placeholder="Nom et Prénom"
                type="text"
                name="nomValue"
                value={this.state.nomValue}
                onChange={this.handleInputChange}
              />
              <label htmlFor="Direction">function</label>
              <input
                id="ref"
                placeholder="function"
                type="text"
                name="funValue"
                value={this.state.funValue}
                onChange={this.handleInputChange}
              />
              <label htmlFor="Direction">Direction</label>
              <input
                id="Direction"
                placeholder="Enter your Direction"
                type="text"
                name="directionValue"
                value={this.state.directionValue}
                onChange={this.handleInputChange}
              />
              <label htmlFor="Exercice">Exercice</label>
              <input
                id="Exercice"
                placeholder="Enter your Exercice"
                type="text"
                name="ExerciceValue"
                value={this.state.ExerciceValue}
                onChange={this.handleInputChange}
              />
              <label htmlFor="Droit">DroitConge</label>
              <input
                id="Droit"
                placeholder="Enter your DroitConge"
                type="text"
                name="DroitCongeValue"
                value={this.state.DroitCongeValue}
                onChange={this.handleInputChange}
              />
              <label htmlFor="jours">Nombre jours de Congé</label>
              <input
                id="jours"
                placeholder="Nombre jours de Congé"
                type="text"
                name="NombreJoursCongeValue"
                value={this.state.NombreJoursCongeValue}
                onChange={this.handleInputChange}
              />
            
              <label htmlFor="jours">Reliquat</label>
              <input
                id="Reliquat"
                placeholder="Reliquat"
                type="text"
                name="ReliquatValue"
                value={this.state.ReliquatValue}
                onChange={this.handleInputChange}
              />
              <label htmlFor="jours">À compter du</label>
              <input
                id="compter"
                placeholder="À compter du"
                type="text"
                name="dCompterDuValue"
                value={this.state.dCompterDuValue}
                onChange={this.handleInputChange}
              />
              <label htmlFor="jours">À compter au</label>
              <input
                id="compter"
                placeholder="À compter au"
                type="text"
                name="ACompterDuValue"
                value={this.state.ACompterDuValue}
                onChange={this.handleInputChange}
              />
              <label htmlFor="jours">ReprendraServiceLeValue</label>
              <input
                id="jours"
                placeholder="Reprendra Service "
                type="text"
                name="ReprendraServiceLeValue"
                value={this.state.ReprendraServiceLeValue}
                onChange={this.handleInputChange}
              />
              <label htmlFor="jours">Lieu</label>
              <input
                id="Lieu"
                placeholder="Lieu"
                type="text"
                name="LieuValue"
                value={this.state.LieuValue}
                onChange={this.handleInputChange}
              />
          <ReactToPrint
            trigger={() => (
              <div className="container-btn">
                <button className="btn" onClick={this.printComponent}>
                  Imprimer La Page
                </button>
              </div>
            )}
            content={() => this.componentRef}
          />
            </div>
          </div>
        </div>
        <div style={{ display: "block" }}>
          <PrintComponent
            ref={(el) => (this.componentRef = el)}
            directionValue={this.state.directionValue}
            ExerciceValue={this.state.ExerciceValue}
            DroitCongeValue={this.state.DroitCongeValue}
            NombreJoursCongeValue={this.state.NombreJoursCongeValue}
            ReliquatValue={this.state.ReliquatValue}
            ACompterDuValue={this.state.ACompterDuValue}
            dCompterDuValue={this.state.dCompterDuValue}
            ReprendraServiceLeValue={this.state.ReprendraServiceLeValue}
            LieuValue={this.state.LieuValue}
            refValue={this.state.refValue}
            dateValue={this.state.dateValue}
            nomValue={this.state.nomValue}
            funValue={this.state.funValue}
          />
        </div>
      </div>
    );
  }
}

export default PrintableComponentt;

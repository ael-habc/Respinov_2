import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MDBInput } from "mdb-react-ui-kit";
import "./Reclamation.css";
import { Toaster, toast } from "react-hot-toast";
import Table from "react-bootstrap/Table";

export default function Reclamation() {
  const [reclamation, setReclamation] = useState([]);
  const [idResponsable, setIdResponsable] = useState("");
  const [symptomes, setSymptomes] = useState("");
  const [numereReclamation, setNumereReclamation] = useState(0);
  const [date, setDate] = useState("");
  // const [gravite, setGravite] = useState("");
  const [pieceJointe, setPieceJointe] = useState("");
  const [impact, setImpact] = useState("");
  const [modele, setModele] = useState("");
  const [numeroSerie, setNumeroSerie] = useState(0);
  const [etatGarantie, setEtatGarantie] = useState("");
  const [messageError, setMessageError] = useState("");
  const [symptomesAutre, setSymptomesAutre] = useState("");
  const [status, setStatus] = useState("");

  const hundleSubmit = () => {
    if (
      !idResponsable ||
      !symptomes ||
      !date ||
      !numereReclamation ||
      !modele ||
      !numeroSerie ||
      !status
    ) {
      alert("Please fill all the fields");
      return;
    }
    toast.success("Votre réclamation a été saisie avec succès");

    const newReclamation = {
      idResponsable,
      symptomes,
      numereReclamation,
      date,
      // gravite,
      pieceJointe,
      modele,
      impact,
      numeroSerie,
      etatGarantie,
      messageError,
      status,
    };
    setReclamation([...reclamation, newReclamation]);
    setIdResponsable("");
    setSymptomes("");
    setNumereReclamation(0);
    setDate("");
    // setGravite("");
    setPieceJointe("");
    setImpact("");
    setNumeroSerie(0);
    setModele("");
    setEtatGarantie("");
    setMessageError("");
    newReclamation.idResponsable = "";
    newReclamation.symptomes = "";
    newReclamation.date = "";
    // newReclamation.gravite = "";
    newReclamation.pieceJointe = "";
    newReclamation.impact = "";
    newReclamation.numereReclamation = 0;
    newReclamation.modele = "";
    newReclamation.numeroSerie = 0;
    newReclamation.etatGarantie = "";
    newReclamation.messageError = "";
    newReclamation.status = "";
  };

  return (
    <div className="form">
      <Toaster />
      <label htmlFor="basic-url" className="form-label">
        Numéro de réclamation
      </label>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          value={numereReclamation}
          onChange={(e) => setNumereReclamation(e.target.value)}
          required
        />
      </div>
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        ID responsable
      </label>
      <MDBInput
        type="text"
        wrapperClass="mb-4"
        id="form6Example3"
        placeholder="ID responsable"
        value={idResponsable}
        onChange={(e) => setIdResponsable(e.target.value)}
        required
      />
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Symptômes observés
      </label>
      <select
        id="inputState"
        className="form-select"
        aria-label="Symptomes Observes"
        value={symptomes}
        onChange={(e) => setSymptomes(e.target.value)}
        required
      >
        <option value="1">Arrêt soudain du fonctionnement</option>
        <option value="2">Problèmes d&#39;alimentation électrique</option>
        <option>Alarmes fréquentes</option>
        <option>Bruits ou vibrations inhabituels</option>
        <option>Écrans d'affichage défectueux ou illisibles</option>
        <option>Fuites d'air ou de gaz</option>
        <option>Problèmes de réglage des paramètres</option>
        <option>Problèmes de ventilation</option>
        <option>Problèmes de contrôle de pression</option>
        <option>Autre</option>
      </select>
      <br />
      {symptomes === "Autre" ? (
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Symptomes Observes"
            id="floatingTextarea"
            value={symptomesAutre}
            onChange={(e) => setSymptomesAutre(e.target.value)}
          ></textarea>
          <label htmlFor="floatingTextarea">Symptomes Observes</label>
        </div>
      ) : null}
      <br />
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Impact sur le patient/Actions entreprises (optionnel)"
          id="floatingTextarea"
          value={messageError}
          onChange={(e) => setMessageError(e.target.value)}
        ></textarea>
        <label htmlFor="floatingTextarea">Message d'erreur (optionnel)</label>
      </div>
      <br />
      <label htmlFor="basic-url" className="form-label">
        Modèle
      </label>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          value={modele}
          onChange={(e) => setModele(e.target.value)}
          required
        />
      </div>
      <label htmlFor="basic-url" className="form-label">
        Numéro de série S/N
      </label>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          value={numeroSerie}
          onChange={(e) => setNumeroSerie(e.target.value)}
          required
        />
      </div>
      <label htmlFor="basic-url" className="form-label">
        Date
      </label>
      <div className="input-group mb-3">
        <input
          type="date"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <br />
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Etat de garantie
      </label>
      <select
      id="inputState"
        className="form-select"
        aria-label="Niveau gravites"
        required
        value={etatGarantie}
        onChange={(e) => setEtatGarantie(e.target.value)}
      >
        <option value="1">En cours de garantie</option>
        <option value="2">Garantie expirée </option>
        <option value="4">Non applicable</option>
      </select>
      <br />
      <label htmlFor="basic-url" className="form-label">
        Pièce jointe (optionnel)
      </label>
      <div className="input-group mb-3">
        <input
          type="file"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          value={pieceJointe}
          onChange={(e) => setPieceJointe(e.target.value)}
          required
        />
      </div>
      <br />
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Actions entreprises (optionnel)"
          id="floatingTextarea"
          value={impact}
          onChange={(e) => setImpact(e.target.value)}
        ></textarea>
        <label htmlFor="floatingTextarea">
          Actions entreprises (optionnel)
        </label>
      </div>
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Status
      </label>
      <select
      id="inputState"
        className="form-select"
        aria-label="Niveau gravites"
        required
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="1" defaultValue>
          Initier
        </option>
        <option value="2">En attente</option>
        <option value="4">En cours de traitement</option>
        <option value="4">Résolu</option>
      </select>
      <br />
      <div className="d-grid gap-3 col-4 mx-auto ">
        <Example id="test" />
        <button
          type="submit"
          className="btn btn-success btn-lg"
          onClick={() => hundleSubmit()}
        >
          Confirmer
        </button>
      </div>
    </div>
  );
}

function Example(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="secondary" className="btn-lg" onClick={handleShow}>
        Liste des réclamations
      </Button>
      <Modal
        id="modal"
        size="lg"
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName="modal-90w"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Numéro de réclamation</th>
                <th>ID responsable</th>
                <th>Symptômes observés</th>
                <th>Modèle</th>
                <th>Numéro de série S/N</th>
                <th>Date</th>
                <th>Etat de garantie</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>AlamiOmar-56</td>
                <td>Fuite d'air ou de gaz</td>
                <td>A9</td>
                <td>ARZC-0142</td>
                <td>15/08/2023</td>
                <td>En cours de garantie</td>
                <td>Résolu</td>
              </tr>
              <tr>
                <td>2</td>
                <td>AliTazi-23</td>
                <td>Alarmes non fonctionnelles</td>
                <td>WATO EX-65 Pro</td>
                <td>ARZF-0087</td>
                <td>26/08/2023</td>
                <td>Non applicable</td>
                <td>Résolu</td>
              </tr>
              <tr>
                <td>3</td>
                <td>MeriemBellaj-21</td>
                <td>Problèmes de contrôle de pression</td>
                <td>WATO EX-35</td>
                <td>ARZD-0117</td>
                <td>01/09/2023</td>
                <td>Garantie expirée</td>
                <td>En cours de traitement</td>
              </tr>
              <tr>
                <td>4</td>
                <td>LeilaBilali-71</td>
                <td>Bruits ou vibrations inhabituels</td>
                <td>A9</td>
                <td>ARZC-0142</td>
                <td>11/09/2023</td>
                <td>Garantie expirée</td>
                <td>En phase d'attente</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

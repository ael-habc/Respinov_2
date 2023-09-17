import React, { useState } from "react";
import "./HistoriqueDemaintenance.css";
import Table from "react-bootstrap/Table";
import { Button } from "bootstrap-4-react/lib/components";
import Modal from "react-bootstrap/Modal";
import { ButtonGroup, Radio } from "bootstrap-4-react";
import { Toaster, toast } from "react-hot-toast";

export default function HistoriqueDemaintenance() {
  const [Historique, setHistorique] = useState([
    {
      id: 1,
      date: "12/10/2022",
      modele: "WATO EX-35",
      operation: "Contrôle préopératoire",
      description:
        "1. Tests de performance de ventilation du système. \n 2. Tests d'étanchéité du système respiratoire en mode ventilation mécanique/manuelle. \n 3. Vérification du point zéro du capteur. \n 4. Test de débit constant (vérification de la précision du capteur de débit). \n 5. Test de pression constante (vérification de la précision du capteur de pression).",
      pieces: "-",
      responsable: "-",
      duree: "1h30min",
      lieu: "Bloc opératoire",
    },
    {
      id: 2,
      date: "12/10/2022",
      modele: "WATO EX-35",
      operation: "Verification du système",
      description:
        "Une vérification générale du système a été effectuée pour détecter d'éventuels problèmes ou dysfonctionnements.",
      pieces: "-",
      responsable: "-",
      duree: "50min",
      lieu: "Bloc opératoire",
    },
    {
      id: 3,
      date: "12/10/2022",
      modele: "WATO EX-35",
      operation: "Remplacement des consommables",
      description:
        "Les filtres, sondes, tuyaux, et autres pièces consommables ont été remplacés conformément aux recommandations du fabricant.",
      pieces: "Filtres, sondes, tuyaux",
      responsable: "-",
      duree: "30min",
      lieu: "Bloc opératoire",
    },
    {
      id: 4,
      date: "12/10/2022",
      modele: "WATO EX-35",
      operation: "Entretien et remplacement de la batterie",
      description:
        "La batterie du respirateur a été entretenue et remplacée, garantissant ainsi une alimentation électrique fiable lors de son utilisation.",
      pieces: "Batterie",
      responsable: "-",
      duree: "35min",
      lieu: "Bloc opératoire",
    },
    {
      id: 5,
      date: "12/10/2022",
      modele: "WATO EX-35",
      operation: "Test de fonctionnement après maintenance",
      description:
        "Un test complet du respirateur a été effectué après la maintenance pour vérifier que toutes les fonctionnalités sont opérationnelles et répondent aux spécifications.",
      pieces: "-",
      responsable: "-",
      duree: "20min",
      lieu: "Bloc opératoire",
    },
    {
      id: 6,
      date: "12/10/2022",
      modele: "WATO EX-35",
      operation: "Test avant opération",
      description:
        "Un dernier test a été réalisé avant l'utilisation du respirateur pour s'assurer de son bon fonctionnement, garantissant ainsi la sécurité des patients.",
      pieces: "-",
      responsable: "-",
      duree: "15min",
      lieu: "Bloc opératoire",
    },
  ]);
  const [Historique2, setHistorique2] = useState([
    {
      id: 1,
      date: "17/08/2023",
      modele: "A9",
      panne: "Fuite d'air détectée au niveau du circuit de ventilation",
      description:
        "1. Isolation de la source de la fuite : Le circuit de ventilation a été soigneusement inspecté pour localiser la source exacte de la fuite d'air. La fuite a été détectée au niveau d'une connexion détachée.  \n 2. Réparation de la fuite : La connexion défectueuse a été réparée en remplaçant le joint d'étanchéité et en assurant une fixation correcte du composant. \n 3. Tests de vérification : Après la réparation, des tests de pression ont été effectués pour garantir l'absence de fuite d'air résiduelle. Le circuit a été testé avec succès pour s'assurer qu'il était étanche et sécuritaire pour une utilisation future.                                                                                        ",
      pieces: "Joint d'étanchéité du circuit de ventilation",
      responsable: "-",
      duree: "1h",
      résultats:
        "Après la réparation, le respirateur d'anesthésie n'a plus présenté de fuite d'air détectable. Les tests ont confirmé que le circuit de ventilation était étanche et que le respirateur fonctionnait correctement.",
      lieu: "Unité de soins intensifs",
    },
    {
      id: 2,
      date: "28/08/2023",
      modele: "WATO EX-65 Pro",
      panne: "Alarmes non fonctionnelles",
      description:
        "1. Inspection du système d'alarme : L'inspection a révélé une défaillance au niveau de la carte électronique du système d'alarme \n 2. Remplacement de la carte électronique. \n 3. Tests de vérification.",
      pieces: "Carte électronique du système d'alarme",
      responsable: "-",
      duree: "45min",
      résultats:
        "Suite à la réparation, les alarmes sonores du respirateur d'anesthésie fonctionnaient correctement. Elles étaient audibles et se déclenchaient conformément aux seuils d'alarme définis par le fabricant.",
      lieu: "Service biomédical",
    },
  ]);

  const [toggle, setToggle] = useState(true);

  function Delete(id) {
    const newList = Historique.filter((item) => item.id !== id);
    setHistorique(newList);
    toast.success("Votre maintenance a été supprimée avec succès");
  }
  function Delete2(id) {
    const newList = Historique2.filter((item) => item.id !== id);
    setHistorique2(newList);
    toast.success("Votre maintenance a été supprimée avec succès");
  }
  return (
    <div className="historique">
      <Toaster />
      <ButtonGroup toggle className="g">
        <Button primary active as="label" onClick={() => setToggle(true)}>
          <Radio autoComplete="off" />
          Historique de maintenance préventive
        </Button>
        <Button secondary as="label" onClick={() => setToggle(false)}>
          <Radio autoComplete="off" />
          Historique de maintenance corrective
        </Button>
      </ButtonGroup>
      {toggle ? (
        <>
          <h3>Historique de maintenance préventive</h3>

          <Example historique={Historique} set={setHistorique} />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Modèle du respirateur d'anesthésie</th>
                <th>Opération de maintenance</th>
                <th>Description de l'intervention</th>
                <th>Pièces remplacées</th>
                <th>Ingénieur/ Technicien responsable</th>
                <th>Durée</th>
                <th>Lieu de l'intervention</th>
                <th>Cocher si OK</th>
                <th>Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {Historique.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.date}</td>
                    <td>{item.modele}</td>
                    <td>{item.operation}</td>
                    <td>{item.description}</td>
                    <td>{item.pieces}</td>
                    <td>{item.responsable}</td>
                    <td>{item.duree}</td>
                    <td>{item.lieu}</td>
                    <td>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </td>
                    <td>
                      <Button
                        className="btn btn-danger"
                        onClick={() => Delete(item.id)}
                      >
                        Supprimer
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      ) : (
        <>
          <h3>Historique de maintenance corrective</h3>
          <Example2 historique={Historique2} set={setHistorique2} />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Modèle du respirateur d'anesthésie</th>
                <th>Panne</th>
                <th id="bigger">Description de l'intervention</th>
                <th>Pièces remplacées</th>
                <th>Ingénieur/ Technicien responsable</th>
                <th>Durée</th>
                <th>Résultats/Observations</th>
                <th>Lieu de l'intervention</th>
                <th>Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {Historique2.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.date}</td>
                    <td>{item.modele}</td>
                    <td>{item.panne}</td>
                    <td>{item.description}</td>
                    <td>{item.pieces}</td>
                    <td>{item.responsable}</td>
                    <td>{item.duree}</td>
                    <td>{item.résultats}</td>
                    <td>{item.lieu}</td>
                    <td>
                      <Button
                        className="btn btn-danger"
                        onClick={() => Delete2(item.id)}
                      >
                        Supprimer
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
}

function Example(props) {
  const { historique, set } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [date, setDate] = useState("");
  const [modele, setModele] = useState("");
  const [operation, setOperation] = useState("");
  const [description, setDescription] = useState("");
  const [pieces, setPieces] = useState("");
  const [responsable, setResponsable] = useState("");
  const [duree, setDuree] = useState("");
  const [lieu, setLieu] = useState("");
  const [id, setId] = useState(historique.length + 1);

  const [historique2, setHistorique2] = useState([]);
  function hundleAdd() {
    historique2.push({
      id: id,
      date: date
        ? date
        : `${new Date().getDate()}/${
            new Date().getMonth() + 1
          }/${new Date().getFullYear()}`,
      modele: modele ? modele : "-",
      operation: operation ? operation : "-",
      description: description ? description : "-",
      pieces: pieces ? pieces : "-",
      responsable: responsable ? responsable : "-",
      duree: duree ? duree : "-",
      lieu: lieu ? lieu : "-",
    });

    set([...historique, ...historique2]);
    setHistorique2([]);
    //rerender the page
    handleClose();
    toast.success("Votre maintenance a été saisie avec succès");
  }

  return (
    <>
      <Button
        variant="secondary"
        className="btn btn-success"
        onClick={handleShow}
      >
        Ajouter une maintenance
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Une maintenance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label for="exampleFormControlInput1" class="form-label">
            Date
          </label>
          <input
            type="date"
            class="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label for="exampleFormControlInput1" class="form-label">
            Modèle du respirateur d'anesthésie
          </label>
          <input
            type="text"
            class="form-control"
            value={modele}
            onChange={(e) => setModele(e.target.value)}
          />
          {/* copilot continue this for all the fields */}
          <label for="exampleFormControlInput1" class="form-label">
            Opération de maintenance
          </label>
          <input
            type="text"
            class="form-control"
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
          />
          <label for="exampleFormControlInput1" class="form-label">
            Description de l'intervention
          </label>
          <input
            type="text"
            class="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label for="exampleFormControlInput1" class="form-label">
            Pièces remplacées
          </label>
          <input
            type="text"
            class="form-control"
            value={pieces}
            onChange={(e) => setPieces(e.target.value)}
          />
          <label for="exampleFormControlInput1" class="form-label">
            Ingénieur/ Technicien responsable
          </label>
          <input
            type="text"
            class="form-control"
            value={responsable}
            onChange={(e) => setResponsable(e.target.value)}
          />
          <label for="exampleFormControlInput1" class="form-label">
            Durée
          </label>
          <input
            type="text"
            class="form-control"
            value={duree}
            onChange={(e) => setDuree(e.target.value)}
          />
          <label for="exampleFormControlInput1" class="form-label">
            Lieu de l'intervention
          </label>
          <input
            type="text"
            class="form-control"
            value={lieu}
            onChange={(e) => setLieu(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-success" onClick={hundleAdd}>
            Ajouter
          </Button>
          <Button className="btn btn-danger" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function Example2(props) {
  const { historique, set } = props;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [date, setDate] = useState("");
  const [modele, setModele] = useState("");
  const [panne, setPanne] = useState("");
  const [description, setDescription] = useState("");
  const [pieces, setPieces] = useState("");
  const [responsable, setResponsable] = useState("");
  const [duree, setDuree] = useState("");
  const [resultats, setResultats] = useState("");
  const [lieu, setLieu] = useState("");
  const [id, setId] = useState(historique.length + 1);

  const [historique2, setHistorique2] = useState([]);
  // let Date = new Date();
  function hundleAdd() {
    historique2.push({
      id: id,
      date: date
        ? date
        : `${new Date().getDate()}/${
            new Date().getMonth() + 1
          }/${new Date().getFullYear()}`,
      modele: modele ? modele : "-",
      panne: panne ? panne : "-",
      description: description ? description : "-",
      pieces: pieces ? pieces : "-",
      responsable: responsable ? responsable : "-",
      duree: duree ? duree : "-",
      resultats: resultats ? resultats : "-",
      lieu: lieu ? lieu : "-",
    });

    set([...historique, ...historique2]);
    setHistorique2([]);
    //rerender the page
    toast.success("Votre maintenance a été saisie avec succès");
    handleClose();
  }

  return (
    <>
      <Button
        variant="secondary"
        className="btn btn-success"
        onClick={handleShow}
      >
        Ajouter une maintenance
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Une maintenance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label for="exampleFormControlInput1" class="form-label">
            Date
          </label>
          <input
            type="date"
            class="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label for="exampleFormControlInput1" class="form-label">
            Modèle du respirateur d'anesthésie
          </label>
          <input
            type="text"
            class="form-control"
            value={modele}
            onChange={(e) => setModele(e.target.value)}
          />

          <label for="exampleFormControlInput1" class="form-label">
            Panne
          </label>
          <input
            type="text"
            class="form-control"
            value={panne}
            onChange={(e) => setPanne(e.target.value)}
          />
          <label for="exampleFormControlInput1" class="form-label">
            Description de l'intervention
          </label>
          <input
            type="text"
            class="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label for="exampleFormControlInput1" class="form-label">
            Pièces remplacées
          </label>
          <input
            type="text"
            class="form-control"
            value={pieces}
            onChange={(e) => setPieces(e.target.value)}
          />
          <label for="exampleFormControlInput1" class="form-label">
            Ingénieur/ Technicien responsable
          </label>
          <input
            type="text"
            class="form-control"
            value={responsable}
            onChange={(e) => setResponsable(e.target.value)}
          />
          <label for="exampleFormControlInput1" class="form-label">
            Durée
          </label>
          <input
            type="text"
            class="form-control"
            value={duree}
            onChange={(e) => setDuree(e.target.value)}
          />
          <label for="exampleFormControlInput1" class="form-label">
            Résultats/Observations
          </label>
          <input
            type="text"
            class="form-control"
            value={resultats}
            onChange={(e) => setResultats(e.target.value)}
          />
          <label for="exampleFormControlInput1" class="form-label">
            Lieu de l'intervention
          </label>
          <input
            type="text"
            class="form-control"
            value={lieu}
            onChange={(e) => setLieu(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-success" onClick={hundleAdd}>
            Ajouter
          </Button>
          <Button className="btn btn-danger" onClick={handleClose}>
          Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

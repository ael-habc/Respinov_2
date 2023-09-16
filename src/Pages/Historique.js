import React from "react";
import Table from "react-bootstrap/Table";

import "./Historique.css";
export default function Historique() {
  const historique = [
    {
        "Numéro de commande": 1,
        "ID responsable": "WafaeYoussfi-953",
        "Numéro de série S/N": "ARZD-0117",
        "Modèle": "WATO EX-35",
        "Type de P.R": "Dôme de clapet anti-retour",
        "Quantité": 2,
        "Date": "10/08/2023",
        "Statut": "Livrée"
    },
    {
        "Numéro de commande": 2,
        "ID responsable": "AyoubBenour-541",
        "Numéro de série S/N": "ARZF-0087",
        "Modèle": "WATO EX-65 Pro",
        "Type de P.R": "Assemblage de contrôle d'aspiration",
        "Quantité": 1,
        "Date": "29/08/2023",
        "Statut": "En cours d'expédition"
    },
    {
        "Numéro de commande": 3,
        "ID responsable": "YoussefBariki-784",
        "Numéro de série S/N": "ARZC-0142",
        "Modèle": "A9",
        "Type de P.R": "Capteur de débit",
        "Quantité": 2,
        "Date": "01/09/2023",
        "Statut": "Confirmée"
    },
    {
        "Numéro de commande": 4,
        "ID responsable": "AliLotfi-256",
        "Numéro de série S/N": "ARZD-0117",
        "Modèle": "WATO EX-35",
        "Type de P.R": "Manomètre des voies respiratoires",
        "Quantité": 3,
        "Date": "07/09/2023",
        "Statut": "En attente"
    }
]
  return (
    <div className="historique">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Numéro de commande</th>
            <th>ID responsable </th>
            <th>Numéro de série S/N:</th>
            <th>Type de P.R (pièce de rechange)</th>
            <th>Quantité</th>
            <th>Date</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {historique.map((item) => (
            <tr>
            <td>{item["Numéro de commande"]}</td>
            <td>{item["ID responsable"]}</td>
            <td>{item["Numéro de série S/N"]}</td> 
            <td>{item["Type de P.R"]}</td>
            <td>{item["Quantité"]}</td>
            <td>{item["Date"]}</td>
            <td>{item["Statut"]}</td>
            </tr>
          ))  
          }
        </tbody>
      </Table>
    </div>
  );
}

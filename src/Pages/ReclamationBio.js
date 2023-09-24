import React from 'react'
import { Table } from 'react-bootstrap'

import './ReclamationBio.css'

export default function ReclamationBio() {
  return (
    <div className='RecalmationBio'>
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
    </div>
  )
}

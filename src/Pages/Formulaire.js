import React from "react";
import { MDBRadio, MDBTextArea } from "mdb-react-ui-kit";
import Button from '@mui/material/Button';
import "./formulaire.css";
import { Toaster ,toast} from "react-hot-toast";

export default function Formulaire() {
  function submit() {
    toast.success('merci de bien vouloir remplir le formulaire' )
  }
  return (
    <div id="formulaire">
      <Toaster/>
      <p>Quelle est votre spécialité médicale ?</p>
      <MDBRadio name="specialite" id="radiox" label="Médecin anesthésiste" />
      <MDBRadio name="specialite" id="radiox" label="Médecin réanimateur" />
      <MDBRadio name="specialite" id="radiox" label="Infirmier anesthésiste" />
      <MDBRadio
        name="specialite"
        id="radiox"
        label=" Autre (veuillez préciser)"
      />
      <hr />
      <p>
        Quelle est la principale raison pour laquelle vous avez choisi
        d&#39;utiliser le respirateur d&#39;anesthésie de Mindray ?
      </p>
      <MDBRadio name="principale" id="radiox" label="Performance supérieure" />
      <MDBRadio name="principale" id="radiox" label="Prix compétitif" />
      <MDBRadio
        name="principale"
        id="radiox"
        label="Recommandation d&#39;un collègue ou d&#39;un expert"
      />
      <MDBRadio
        name="principale"
        id="radiox"
        label=" Autre (veuillez préciser)"
      />
      <hr />
      <p>
        En ce qui concerne la qualité de la ventilation fournie par
        l&#39;appareil
      </p>
      <MDBRadio name="qualité" id="radiox" label="Excellente" />
      <MDBRadio name="qualité" id="radiox" label="Bonne" />
      <MDBRadio name="qualité" id="radiox" label="Moyenne" />
      <MDBRadio name="qualité" id="radiox" label="Médiocre" />
      <MDBRadio name="qualité" id="radiox" label="Mauvaise" />
      <hr />
      <p>
        Comment évaluez-vous la précision des mesures et des lectures fournies
        par l&#39;appareil ?
      </p>
      <MDBRadio name="précision" id="radiox" label="Très précis" />
      <MDBRadio name="précision" id="radiox" label="Précis" />
      <MDBRadio name="précision" id="radiox" label="Neutre" />
      <MDBRadio name="précision" id="radiox" label="Pas très précis" />
      <MDBRadio name="précision" id="radiox" label="Pas du tout précis" />
      <hr />
      <p>
        Quelle est votre opinion sur la réactivité du système d&#39;alarme de
        l&#39;appareil en termes de détection des situations critiques ?
      </p>
      <MDBRadio name="réactivité" id="radiox" label="Très réactif" />
      <MDBRadio name="réactivité" id="radiox" label="Réactif" />
      <MDBRadio name="réactivité" id="radiox" label="Neutre" />
      <MDBRadio name="réactivité" id="radiox" label="Pas très réactif" />
      <MDBRadio name="réactivité" id="radiox" label="Pas du tout réactif" />
      <hr />
      <p>
        Quel aspect du respirateur d&#39;anesthésie a le plus contribué à
        améliorer l&#39;efficacité de votre travail ?
      </p>
      <MDBRadio
        name="aspect"
        id="radiox"
        label="Facilité de configuration des paramètres"
      />
      <MDBRadio
        name="aspect"
        id="radiox"
        label="Précision des mesures et des données"
      />
      <MDBRadio
        name="aspect"
        id="radiox"
        label="Options de ventilation personnalisées"
      />
      <MDBRadio
        name="aspect"
        id="radiox"
        label="Fonctionnalités de sécurité avancées"
      />

      <MDBRadio name="aspect" id="radiox" label=" Autre (veuillez préciser)" />
      <hr />
      <p>
        Évaluez la qualité du système de réclamation des pannes de
        l&#39;appareil dans notre plateforme RespInnov
      </p>
      <MDBRadio name="qSysteme" id="radiox" label="Excellente" />
      <MDBRadio name="qSysteme" id="radiox" label="Bonne" />
      <MDBRadio name="qSysteme" id="radiox" label="Moyenne" />
      <MDBRadio name="qSysteme" id="radiox" label="Médiocre" />
      <MDBRadio name="qSysteme" id="radiox" label="Mauvaise" />
      <hr />
      <p>
        Comment évaluez-vous la qualité des réponses fournies par le chatbot
        pour résoudre les problèmes techniques courants du respirateur ?
      </p>
      <MDBRadio name="qreponse" id="radiox" label="Très utiles" />
      <MDBRadio name="qreponse" id="radiox" label="Utiles" />
      <MDBRadio name="qreponse" id="radiox" label="Neutres" />
      <MDBRadio name="qreponse" id="radiox" label="Pas très utiles" />
      <MDBRadio name="qreponse" id="radiox" label="Pas du tout utiles" />
      <hr />
      <p>
        Évaluez la qualité de la documentation fournie avec l&#39;appareil en
        termes de clarté et de pertinence :
      </p>
      <MDBRadio name="documentation" id="radiox" label="Excellente" />
      <MDBRadio name="documentation" id="radiox" label="Bonne" />
      <MDBRadio name="documentation" id="radiox" label="Moyenne" />
      <MDBRadio name="documentation" id="radiox" label="Médiocre" />
      <MDBRadio name="documentation" id="radiox" label="Mauvaise" />
      <hr />
      <p>
        Dans quelle mesure êtes-vous satisfait(e) de l&#39;efficacité du
        respirateur d&#39;anesthésie dans la gestion des différentes procédures
        d&#39;anesthésie et de sa convivialité générale?
      </p>
      <MDBRadio name="satisfaction" id="radiox" label="Très insatisfait" />
      <MDBRadio name="satisfaction" id="radiox" label="Insatisfait" />
      <MDBRadio name="satisfaction" id="radiox" label="Neutre" />
      <MDBRadio name="satisfaction" id="radiox" label="Satisfait" />
      <MDBRadio name="satisfaction" id="radiox" label="Très satisfait" />

      <hr />
      <p>
        Quels sont les points forts du respirateur d&#39;anesthésie de Mindray,
        selon votre expérience ?
      </p>
      <MDBTextArea id="textAreaExample" rows={4} />
      <hr />
      <p>
        Y a-t-il des fonctionnalités ou des améliorations spécifiques que vous
        aimeriez voir ajoutées ou développées dans le respirateur
        d&#39;anesthésie ?
      </p>
      <MDBTextArea id="textAreaExample" rows={4} />
      <hr />
      <p>
        Décrivez votre expérience concernant la fiabilité et la stabilité du
        respirateur d&#39;anesthésie de Mindray dans des situations cliniques
        variées.
      </p>
      <MDBTextArea id="textAreaExample" rows={4} />
      <hr />
      <p>
        Si vous avez utilisé d&#39;autres respirateurs d&#39;anesthésie par le
        passé, veuillez comparer votre expérience avec le respirateur de Mindray
        en termes de performances et de convivialité.
      </p>
      <MDBTextArea id="textAreaExample" rows={4} />

      <hr />
      <Button id="btnx" variant="contained" color="success"  onClick={submit}>
        Envoyer
      </Button>
      <Toaster/>
    </div>
  );
}

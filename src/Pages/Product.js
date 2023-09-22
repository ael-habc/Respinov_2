import React, { useEffect, useState } from "react";
import data from "../product.json";
import Product from "../Card2";
import "./Product.css";
import { Button, ButtonGroup, Radio } from "bootstrap-4-react";
import { Toaster, toast } from "react-hot-toast";

export default function Products() {
  const [products, setProducts] = useState(data.products);
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [products]);

  const [numeroDeDemande, setNumeroDeDemande] = useState(0);
  const [idResponsable, setIdResponsable] = useState(0);
  const [numeroDeSerie, setNumeroDeSerie] = useState(0);
  const [modele, setModele] = useState("");
  const [type, setType] = useState("Dôme de clapet anti-retour");
  const [quantite, setQuantite] = useState(0);
  const [date, setDate] = useState("");
  const [statut, setstatut] = useState("Intier");

  const hundleSubmit = () => {
    if (
      !numeroDeDemande ||
      !idResponsable ||
      !numeroDeSerie ||
      !modele ||
      !type ||
      !quantite ||
      !date ||
      !statut
    ) {
      alert("Please fill all the fields");
      return;
    } else {
      toast.success("La commande a été saisie avec succès");
    }
  };

  const fillterData = (data, category) => {
    if (category === "all") {
      setProducts(data.products);
      return;
    }
    const newData = data.products.filter((item) => item.category === category);
    setProducts(newData);
  };
  return (
    <div className="pageProduct">
      <Toaster />
      <ButtonGroup toggle>
        <Button primary active as="label" onClick={() => setToggle(true)}>
          <Radio autoComplete="off" />
          Pièces de rechange
        </Button>
        <Button secondary as="label" onClick={() => setToggle(false)}>
          <Radio autoComplete="off" />
          Commande des Pièces de rechange
        </Button>
      </ButtonGroup>
      {toggle ? (
        <>
          <div className="modele">
            <ButtonGroup toggle>
              <Button
                primary
                active
                as="label"
                onClick={() => fillterData(data, "all")}
              >
                <Radio autoComplete="off" />
                Tous les produits
              </Button>
              <Button
                secondary
                as="label"
                onClick={() => fillterData(data, "WATO EX-35")}
              >
                <Radio autoComplete="off" />
                WATO EX-35
              </Button>
              <Button
                secondary
                as="label"
                onClick={() => fillterData(data, "WATO EX-65 Pro")}
              >
                <Radio autoComplete="off" />
                WATO EX-65 Pro
              </Button>
              <Button
                secondary
                as="label"
                onClick={() => fillterData(data, "A9")}
              >
                <Radio autoComplete="off" />
                A9
              </Button>
            </ButtonGroup>
          </div>
          <div className="prooductList2">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </>
      ) : (
        <div className="formDemande">
          <label htmlFor="basic-url" className="form-label">
            Num de commande:
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              value={numeroDeDemande}
              onChange={(e) => setNumeroDeDemande(e.target.value)}
              required
            />
          </div>
          <label htmlFor="basic-url" className="form-label">
            ID responsable :
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              value={idResponsable}
              onChange={(e) => setIdResponsable(e.target.value)}
              required
            />
          </div>
          <label htmlFor="basic-url" className="form-label">
            Numéro de série S/N:
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              value={numeroDeSerie}
              onChange={(e) => setNumeroDeSerie(e.target.value)}
              required
            />
          </div>
          <label htmlFor="basic-url" className="form-label">
            Modèle :
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
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Type de P.R (pièce de rechange) :
          </label>
          <select
            id="inputState"
            className="form-select"
            aria-label="Symptomes Observes"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            {products.map((product) => (
              <option>{product.name}</option>
            ))}
            <option>Autre</option>
          </select>
          <label htmlFor="basic-url" className="form-label">
            Quantité :
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              value={quantite}
              onChange={(e) => setQuantite(e.target.value)}
              required
            />
          </div>
          <label htmlFor="basic-url" className="form-label">
            Date :
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
          <label htmlFor="basic-url" className="form-label">
            Statut :
          </label>
          <select
          id="inputState"
            className="form-select"
            aria-label="Symptomes Observes"
            value={statut}
            onChange={(e) => setstatut(e.target.value)}
            required
          >
            <option>Intier</option>
            <option>En attente</option>
            <option>Confirmée</option>
            <option>En cours d’expédition</option>
            <option>Livrée</option>
            <option>Annulée</option>
          </select>
          <br />
          <button
            type="submit"
            className="btn btn-success btn-lg btn-block"
            onClick={() => hundleSubmit()}
          >
            Valider
          </button>
        </div>
      )}
    </div>
  );
}

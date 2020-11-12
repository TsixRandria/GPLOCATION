import React, {useState, useEffect} from 'react';
import Link from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import ConditionModal from '../../Detail/ConditionModal';
import DetailReserver from '../DetailReserver'

import './paiment.css';
import axios from '../../../../../../axios';
function PaimentEtape1(props) {
    // const [data, setData] = useState({client: []})

    // useEffect(async () => {
       
    //     const client = await axios.get('http://localhost:4000/last_client')                                                                                                                                                                                                                                                                              
    //         .then(response => console.log(response))
    //         .then(client => setData(client.data))
    //         .catch(error => console.error(error));
        
    // });
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
        <div>
            <div className="col-xs-6">
                <div className="b-contacts__address">
                    <div className="transaction text-justify">
                        <div className="login">
                            <form id="formlivraison" action="" method="post">
                                    <h3 class="form-connec-h3">Prise en charge du véhicule</h3>
                                        <div class="ptop10 cc_cursor">
                                                <input type="hidden" name="livraison" value="4" />
                                                <input type="hidden" id="lieu-livraison" name="lieu-livraison" value="Aéroport de la Réunion Roland-Garros" />
                                                    <p class=""><b>Nous vous attendrons dès votre sortie de l'avion, avec votre nom inscrit sur une pancarte.</b></p><br />
                                            <div id="livraison-infosup">
                                        <label id="lab-livr-infosup" htmlFor="livr-infosup">
                                            <p class="paddingp">Merci d'indiquer votre numéro de vol et la compagnie :
                                        <input type="text" id="livr-infosup" name="livr-infosup" /></p><br />
                                        </label>
                                    </div>
                                </div>
                            </form>
                            {console.log(props.client)}
                            <p class="petitp"><strong>Nom :</strong> {(props.client.client.nom)} {(props.client.client.prenom)}- <strong>Téléphone :</strong> {(props.client.client.telephone)}<br />
                                    <strong>Email de réception de la réservation :</strong>{(props.client.client.email)}</p>
                                    <fieldset id="fd_confirm">
                                        <label htmlFor="certifpermis">
                                        <p><input type="checkbox" id="certifpermis" checked="checked" name="certifpermis" /> Je certifie avoir 21 ans et deux ans de permis*
                                        </p>
                                        </label>
                                        <label htmlFor="conditions">
                                        <p><input type="checkbox" id="conditions" checked="checked" name="conditions" /> J'ai lu les conditions générales de location, et j'y adhère sans réserve.* 
                                        
                                            
                                            <Button onClick={() => setModalShow(true)} className="titre-15">
                                            lire
                                            </Button>

                                            <ConditionModal
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                            />
                                        </p>
                                        </label>
                                    </fieldset>
                                <h3 class="form-connec-h3">Total à payer : acompte de 100 €</h3>
                                <p class="paddingp">Puis 188 € à régler à la remise des clés par carte bancaire, espèce ou chèque </p>
                                <h3 class="paiementcarte cc_cursor">Paiement sécurisé par carte bancaire :</h3>
                                <ul id="moyenpaiement">
                                    <li>
                                        <a href="https://mercanet.bnpparibas.net/cgis-payment-mercanet/prod/callpayment">
                                            <img className="img-responsive" src="media/750x300/carte-bancaire.png" alt="jaguar" /></a>
                                    </li>
                                </ul>
                                <h2>Sécurité de paiement</h2>
                                <p class="petitp">Les transactions PayPlug sont effectuées sur un lien HTTPS établi entre le client et le serveur de paiement. Les données sensibles, telles que le numéro de carte bancaire du client et sa date d'expiration, sont entièrement cryptées et protégées grâce à un protocole SSL afin d'empêcher que les informations échangées puissent être interceptées en clair par un tiers au cours de la transaction.</p>
                                <p class="petitp">Les numéros de cartes sont cryptés instantanément et ne sont pas accessibles par GP Location. De plus, PayPlug ne conserve pas les numéros de carte et s'appuie sur une infrastructure sécurisée agréée par Visa, Mastercard, et le Groupement des Cartes Bancaires selon la norme PCI-DSS au même titre que les meilleures solutions de paiement proposées par les autres banques.</p>
                                <p class="petitp">Toutes les pages du site web PayPlug, ainsi que les liens de transmission sont sécurisés en SSL et bénéficient d'un certificat de sécurité Thawte Extended Validation.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaimentEtape1;

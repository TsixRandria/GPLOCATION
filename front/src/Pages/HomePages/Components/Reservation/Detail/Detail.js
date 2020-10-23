import React, { Component } from 'react';
import '../Reservation.css'

class Detail extends Component {
    render() {
        return (
            <div>
                <section className="b-more">
                    <p><strong>Age minimum :</strong> 23 ans</p>
                    <p><strong>Nombre minimum d'année de permis :</strong> 2 ans</p>
                    <p><strong>Moyen de paiement :</strong> 23 ans</p>
                    <div>
                        <p>Acompte suivant le montant de la réservation :</p>
                        <ul class="s-list">
                            <li><span class="fa fa-check"></span>moins de 150€ : paiement de la totalité en ligne par CB</li>
                            <li><span class="fa fa-check"></span>plus de 150€ : acompte de 100€ par tranche de 500€ par CB, le solde une fois sur place par carte bancaire, espèces ou chèque.</li>

                        </ul>
                    </div>

                    <h2 class="s-title">Assurances</h2>
                    <p><strong>Assurance :</strong> Tous risques et vol avec franchise.</p>
                    <p><strong>Montant de la franchise :</strong> 1000€</p>
                    <p><strong>Caution :</strong> 1000€ sur place par pré-autorisation bancaire (non encaissée).</p>
                    <h2 class="s-title">Prise en charges</h2>

                    <p><strong>A l'aéroport Roland Garros :</strong> Votre loueur vous prend en charge personnellement à l'aéroport. Ceci vous évitera d'attendre au comptoir de l'aéroport après de nombreuses heures de vols et de payer la taxe d'aéroport.</p>
                    <p><strong>Sainte-Marie :</strong>  Votre loueur vous prend en charge personnellement à l'aéroport. Ceci vous évitera d'attendre au comptoir de l'aéroport après de nombreuses heures de vols et de payer la taxe d'aéroport.</p>
                    <p><span className="option">Option annulation covid :</span>  En cas d'annulation, l'acompte sera remboursable par le loueur s'il est prévenu jusqu'à 6 heures avant le départ <strong>quelque soit la raison sans justificatif à présenter.</strong> Si elle est payante, cette option ne sera par contre pas remboursée.</p>
                </section>
            </div>
        )
    }
}
export default Detail;
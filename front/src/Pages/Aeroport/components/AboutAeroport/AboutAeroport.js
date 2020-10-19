import React, { Component } from 'react'

 class AboutAeroport extends Component {
    render() {
        return (	
			<>
            <fieldset >
                <div className="item">
                    <center><img src="media/about/best.jpg" alt="sliderImg" width = "1200" height = "500" /></center>
                    
                </div>
            </fieldset>
			<section className="b-best text-justify">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-xs-12">
                            <div className="b-best__info">
                                <header className="s-lineDownLeft b-best__info-head">
                                    <h2 className="wow zoomInUp" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "zoomInUp"}}>L'aéroport de la Réunion Roland-Garros ?</h2>
                                </header>
                               
                                <p >
                                L’aéroport international Roland Garros est situé sur la commune de Sainte-Marie, au nord de l’île de la Réunion. Il a été nommé ainsi en l’honneur du célèbre aviateur, né à Saint-Denis, tout près d'ici.
                                <strong> Dès votre arrivée à l'aéroport, notre agence de location de voiture, GP location, vous prend en charge.</strong> Étant <strong>ouverts sept jours sur sept, y compris les jours fériés</strong>, 
                                nous serons disponibles pour vous accueillir à tout moment de la journée, quelle que soit l'heure de votre arrivée.&nbsp; 
                                <strong>Nous vous attendrons dès votre sortie de l'avion, avec votre nom inscrit sur une pancarte.</strong> Nous vous conduirons à votre véhicule de location et pourrons vous remettre les clés rapidement.
                                Que vous veniez sur l’île de la Réunion pour vos vacances ou pour un voyage d'affaires, vous trouverez un véhicule adapté à vos besoins au sein de notre flotte automobile.&nbsp;
                                <strong>Nos tarifs attractifs comprennent l'assistance sept jours sur sept, ainsi que le kilométrage illimité et une assurance tous risques.</strong> Tout est donc mis en œuvre pour que vous passiez un séjour agréable sur cette île paradisiaque qu’est la Réunion.</p>
                                
                                <a href="/" className="btn m-btn m-readMore wow zoomInUp" data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.5s", animationName: "zoomInUp"}} >list des voitures<span className="fa fa-angle-right"></span></a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
			</>
		
        )
    }
}
export default AboutAeroport;
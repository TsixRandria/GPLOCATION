import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";

const TarifPersonnaliser = () => {
    const [selectedDayRange, setSelectedDayRange] = useState({
        from: null,
        to: null
    });
    return (
        <>
            <div className="p-5">
                <NavLink to="/configuration_agence" >
                    <button class="text-white bg-indigo-500 border-0 hover:bg-indigo-600 font-bold py-2 px-4 rounded">Retour</button>
                </NavLink>
                <h1>Gestion des tarifs personnalisées</h1>
                <div className="container">

                    <div className="text-center">

                        <div >
                            <label>
                                date:
                        </label>
                            <DatePicker
                                value={selectedDayRange}
                                onChange={setSelectedDayRange}
                                inputPlaceholder="Selectionner vos dates"
                                shouldHighlightWeekends
                            />

                        </div>
                        <br />
                        <br />
                        <div>
                            tarif 1 jour: <input type="number" placeholder="£ /jour" className="text-center" />
                        </div>
                        <br />
                        <div>
                            tarif 2 jours: <input type="number" placeholder="£ /jour" className="text-center" />
                        </div>
                        <br />
                        <div>
                            tarif 3 jours: <input type="number" placeholder="£ /jour" className="text-center" />
                        </div>
                        <br />
                        <div>
                            tarif 4 jours: <input type="number" placeholder="£ /jour" className="text-center" />
                        </div>
                        <br />
                        <div>
                            tarif 7 jours: <input type="number" placeholder="£ /jour" className="text-center" />
                        </div>
                        <br />
                        <div>
                            tarif 14 jours: <input type="number" placeholder="£ /jour" className="text-center" />
                        </div>
                        <br />
                        <div>
                            tarif 21 jours: <input type="number" placeholder="£ /jour" className="text-center" />
                        </div>
                        <br />
                        <div>
                            tarif 30 jours: <input type="number" placeholder="£ /jour" className="text-center" />
                        </div>
                        <br />
                        <div>
                            tarif plus de 60 jours: <input type="number" placeholder="£ /jour" className="text-center" />
                        </div>
                        <br />
                    </div>
                </div>
                <div className="shopping-list">
                    <label>
                        rubrique:
                </label>
                    <select>
                        <option>tourisme</option>
                        <option>balade</option>
                        <option>location</option>
                    </select>
                </div>
                <br />
                <br />
                <div className="shopping-list">
                    <label>
                        <strong>ajouter au groupe :</strong>
                    </label>
                    <br />
                    <fieldset>
                        voiture photo
                </fieldset>
                </div>
            </div>
        </>
    );

};

export default TarifPersonnaliser;
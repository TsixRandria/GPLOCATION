AdminUser.create(username:"Tsix", email:"Tsix@gmail.com", password:"1234")

#place: rand(4..5), vitesse: "manuelle", types: Faker::Vehicle.fuel_type, climatiseur: true, status:"occupé", portes: Faker::Vehicle.door_count

    Voiture.create(marque: "renault", model: "clio", status: 0)
    Voiture.create(marque: "renault", model: "megane", status: 0)
    Voiture.create(marque: "citroën", model: "C1", status: 1)
    Voiture.create(marque: "renault", model: "Duster", status: 0)
    
    Tarif.create(prix: 200, voiture_id: 1)
    Tarif.create(prix: 250, voiture_id: 2)
    Tarif.create(prix: 249, voiture_id: 3)
    Tarif.create(prix: 200, voiture_id: 4)



# 5.times do
#     Reservation.create(lieu_depart: Faker::Space.planet , date_depart: Faker::Date.between(from: '2020-09-23', to: '2020-12-27'), heure_depart: Faker::Time.backward(days: 5, period: :morning, format: :short), 
#     lieu_retour: Faker::Space.planet , date_retour: Faker::Date.between(from: '2020-09-23', to: '2020-12-27'), heure_retour: Faker::Time.backward(days: 5, period: :morning, format: :short), 
#     num_vol: Faker::Number.leading_zero_number(digits: 10), compagnie: Faker::Space.planet , montant_total: rand(200..220), tarif_id: rand(1..5))
# end

5.times do
	TarifSupplementaire.create(libelle: "siège bébé", prix: rand(8..9), tarif_id: rand(1..5))
end

5.times do
	ReservationOption.create(quantity: rand(1..3), tarif_supplementaire_id: rand(1..5), reservation_id: rand(1..5))
end
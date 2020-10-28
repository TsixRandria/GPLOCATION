class CreateReservations < ActiveRecord::Migration[6.0]
  def change
    create_table :reservations do |t|
      t.string :lieu_depart
      t.datetime :date_depart
      t.datetime :heure_depart
      t.string :lieu_retour
      t.datetime :date_retour
      t.datetime :heure_retour
      t.string :num_vol
      t.string :compagnie
      t.integer :montant_total
      #t.belongs_to :user, index: true
      t.belongs_to :tarif, index: true

      t.timestamps
    end
  end
end

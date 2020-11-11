class CreateReservations < ActiveRecord::Migration[6.0]
  def change
    create_table :reservations do |t|
      t.string :lieuDepart
      t.string :lieuRetour
      t.date :dateDepart
      t.date :dateRetour
      t.time :heureDepart
      t.time :heureRetour

      t.timestamps
    end
  end
end

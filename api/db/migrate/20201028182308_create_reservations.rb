class CreateReservations < ActiveRecord::Migration[6.0]
  def change
    create_table :reservations do |t|
      t.string :lieuDepart
      t.string :lieuRetour
      t.string :dateDepart
      t.string :dateRetour
      t.string :heureDepart
      t.string :heureRetour

      t.timestamps
    end
  end
end

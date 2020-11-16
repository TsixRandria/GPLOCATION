class CreateAdminReservations < ActiveRecord::Migration[6.0]
  def change
    create_table :admin_reservations do |t|
      t.date :dateDepart
      t.date :dateRetour
      t.time :heureDepart
      t.time :heureRetour
      t.string :description

      t.timestamps
    end
  end
end

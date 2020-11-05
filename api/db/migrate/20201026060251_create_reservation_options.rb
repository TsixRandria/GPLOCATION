class CreateReservationOptions < ActiveRecord::Migration[6.0]
  def change
    create_table :reservation_options do |t|
      t.integer :quantity
      t.belongs_to :tarif_supplementaire, index: true
      t.belongs_to :reservation, index: true

      t.timestamps
    end
  end
end

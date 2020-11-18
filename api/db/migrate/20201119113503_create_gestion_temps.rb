class CreateGestionTemps < ActiveRecord::Migration[6.0]
  def change
    create_table :gestion_temps do |t|
      t.string :jour
      t.integer :surplus

      t.timestamps
    end
  end
end

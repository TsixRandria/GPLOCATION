class CreateTarifDetails < ActiveRecord::Migration[6.0]
  def change
    create_table :tarif_details do |t|
      t.integer :duree
      t.integer :prix
     
     t.references :tarif, null: false, foreign_key: true

      t.timestamps
    end
  end
end

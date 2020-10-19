class CreateTarifs < ActiveRecord::Migration[6.0]
  def change
    create_table :tarifs do |t|
      t.integer :prix
      t.references :voiture, null: false, foreign_key: true

      t.timestamps
    end
  end
end

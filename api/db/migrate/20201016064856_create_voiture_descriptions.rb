class CreateVoitureDescriptions < ActiveRecord::Migration[6.0]
  def change
    create_table :voiture_descriptions do |t|
      t.string :libelle
      t.string :valeur
      t.references :voiture, null: false, foreign_key: true
      t.integer :order
     

      t.timestamps
    end
  end
end

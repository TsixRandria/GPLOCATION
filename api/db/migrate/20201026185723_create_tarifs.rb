class CreateTarifs < ActiveRecord::Migration[6.0]
  def change
    create_table :tarifs do |t|
      t.date :date_debut
      t.date :date_fin
      t.belongs_to :category, index: true
      
      t.timestamps
    end
  end
end

class CreateTarifs < ActiveRecord::Migration[6.0]
  def change
    create_table :tarifs do |t|
      t.datetime :date_debut
      t.datetime :date_fin
      t.belongs_to :category, index: true
      
      t.timestamps
    end
    
  end
end

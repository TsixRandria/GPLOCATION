class CreateTarifs < ActiveRecord::Migration[6.0]
  def change
    create_table :tarifs do |t|
      t.string :prix

      t.timestamps
    end
  end
end

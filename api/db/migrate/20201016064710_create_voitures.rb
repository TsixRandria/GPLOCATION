class CreateVoitures < ActiveRecord::Migration[6.0]
  def change
    create_table :voitures do |t|
      t.string :marque
      t.string :model
      t.integer :status

      t.timestamps
    end
  end
end

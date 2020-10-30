class CreateVoitures < ActiveRecord::Migration[6.0]
  def change
    create_table :voitures do |t|
      t.string :image, :json
      t.string :marque
      t.string :model
      t.integer :status
      #t.belongs_to :category

      t.timestamps
    end
  end
end

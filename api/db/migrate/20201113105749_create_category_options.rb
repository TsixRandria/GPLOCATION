class CreateCategoryOptions < ActiveRecord::Migration[6.0]
  def change
    create_table :category_options do |t|
    t.integer :quantity
    t.string :libelle
    t.integer :prix
    t.string :status
    t.integer :stock

      t.timestamps
    end
  end
end

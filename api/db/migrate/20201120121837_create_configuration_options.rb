class CreateConfigurationOptions < ActiveRecord::Migration[6.0]
  def change
    create_table :configuration_options do |t|
      t.integer :quantity
      t.integer :prix
      t.belongs_to :option

      t.timestamps
    end
  end
end

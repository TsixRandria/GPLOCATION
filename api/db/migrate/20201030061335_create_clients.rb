class CreateClients < ActiveRecord::Migration[6.0]
  def change
    create_table :clients do |t|
      t.string :nom
      t.string :prenom
      t.string :telephone
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end

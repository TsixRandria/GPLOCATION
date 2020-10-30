class Voiture < ApplicationRecord
    # model association
    has_many :voiture_description, dependent: :destroy

    mount_uploader :image, ImageUploader 
   

    # validations
    validates_presence_of :marque, :model
    #belongs_to :categorie
end

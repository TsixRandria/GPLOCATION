class Voiture < ApplicationRecord

    mount_uploader :image, ImageUploader 
   

    # validations
    validates_presence_of :image, :marque, :model, :places, :type, :climatisation, :vitesse, :portes, :stocks
    #belongs_to :categorie
end

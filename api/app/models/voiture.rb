class Voiture < ApplicationRecord
    # model association
    has_many :voiture_description, dependent: :destroy
    has_one :tarif

    # validations
    validates_presence_of :marque, :model
end

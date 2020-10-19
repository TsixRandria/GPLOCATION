class VoitureDescription < ApplicationRecord
  belongs_to :voiture

  # validation
  validates_presence_of :libelle, :valeur
end

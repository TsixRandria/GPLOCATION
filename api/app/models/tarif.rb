class Tarif < ApplicationRecord
  belongs_to :voiture

  validates_presence_of :prix
end

class Tarif < ApplicationRecord
  belongs_to :voiture
  has_many :reservations

  validates_presence_of :prix
end

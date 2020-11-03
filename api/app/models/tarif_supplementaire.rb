class TarifSupplementaire < ApplicationRecord
  belongs_to :tarif
  has_many :reservation_options
end

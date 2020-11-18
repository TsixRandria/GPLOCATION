class Tarif < ApplicationRecord

  belongs_to :category
  #has_many :reservations

  # validates_presence_of :prix


end

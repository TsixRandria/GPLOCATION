class Reservation < ApplicationRecord
    #belongs_to :user
    belongs_to :tarif
	has_many :reservation_options
end

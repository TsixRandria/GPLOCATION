class ReservationOption < ApplicationRecord
    belongs_to :tarif_supplementaire
	belongs_to :reservation
end

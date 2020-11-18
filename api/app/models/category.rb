class Category < ApplicationRecord
    has_many :voitures
    has_many :options
end

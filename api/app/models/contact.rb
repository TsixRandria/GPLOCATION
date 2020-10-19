class Contact < ApplicationRecord

    # validations
    validates_presence_of :nom, :prenom, :email, :telephone, :message
end

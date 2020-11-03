class Client < ApplicationRecord
    has_secure_password

    validates :nom, format: {with: /\A[a-zA-Z]{4,20}\z/, message: 'ne doit contenir que des lettres'}
    validates :prenom, format: {with: /\A[a-zA-Z]{4,20}\z/, message: 'ne doit contenir que des lettres'}
    validates :telephone, format: {with: /\A[0-9]{4,20}\z/, message: ' ne doit contenir que des chiffres'}
    validates :email, format: {with: /\A[^@\s]+@([^@.\s]+\.)+[^@.\s]+\z/, message: 'incorect'}
    validates_presence_of :password_digest

   
end


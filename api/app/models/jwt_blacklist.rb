class JwtBlacklist < ApplicationRecord
    include Devise
    self.table_name = 'jwt_blacklists'
end

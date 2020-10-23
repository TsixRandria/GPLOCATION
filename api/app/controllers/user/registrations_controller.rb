# frozen_string_literal: true

class User::RegistrationsController < Devise::RegistrationsController
  
  respond_to :json
  def create

    user = User.new(user_params)
    if user.save
      render :json=> user.as_json(:auth_token=>user.authentication_token, :email=>user.email, :nom=>user.nom, :prenom=>user.prenom, :telephone=>user.telephone), :status=>200
      return
      json_response(@user, :created)
    else
      warden.custom_failure!
      render :json=> user.errors, :status=>422
    end
  end

  def user_params
    params.permit(:nom, :prenom, :telephone, :email, :password)
  end
end

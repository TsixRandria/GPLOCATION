# frozen_string_literal: true

class User::SessionsController < Devise::SessionsController
  
  prepend_before_action :require_no_authentication, :only => [:create ]
  include Devise::Controllers::Helpers
  
  before_action :ensure_params_exist

  respond_to :json
  
  def create
    
    resource = User.where(email: params[:email]).first
    return invalid_login_attempt unless resource

    if resource.valid_password?(password: params[:password])
      sign_in("user", resource)
      render :json=> {success: true, authentication_token: resource.authentication_token, login: resource.email}
      return
    end
    invalid_login_attempt
  end
  
  def destroy
    sign_out(resource_name)
  end

  protected
  def ensure_params_exist
    return unless params[:email].blank?
    render(json: {success: false, message: "missing email parameter"}, status: 422)
    return unless params[:password].blank?
    render(json: {success: false, message: "missing password parameter"}, status: 422)
  end

  def invalid_login_attempt
    warden.custom_failure!
    render :json=> {:success=>false, :message=>"Error with your login or password"}, :status=>401
  end

  private
    def create_params
      params.permit(:email, :password, :authentication_token)
    end
end

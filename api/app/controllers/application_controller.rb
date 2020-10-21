class ApplicationController < ActionController::API
    include Response
    include ExceptionHandler
    include ActionController::MimeResponds
    before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:nom, :prenom, :telephone, :email, :password])
    json_response(@user, :created)
  end
end

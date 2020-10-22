class ApplicationController < ActionController::API
    include Response
    include ExceptionHandler
    include ActionController::MimeResponds
  before_action :configure_devise_parameters, if: :devise_controller?

  protected

  def configure_devise_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:nom, :prenom, :telephone, :email, :password) }
    
  end
end

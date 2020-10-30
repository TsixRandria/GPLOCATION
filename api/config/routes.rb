Rails.application.routes.draw do
  resources :clients, only: [:create, :destroy, :update]
  post "/client_login", to: "clients#login"
  resources :contacts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :voitures do
  #   resources :voiture_descriptions
  # end

  resources :contacts


  
  #client session et registration
  # post "/client_session", to: "clients#login"
  # post "/client_registration", to: "clients#create"
  
  resources :admin_users

  post "/login", to: "admin_users#login"
  get "/auto_login", to: "admin_users#auto_login"

end

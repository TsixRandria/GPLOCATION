Rails.application.routes.draw do

  #client sessio et registration
  resources :clients, only: [:create, :destroy, :update, :index]
  post "/client_login", to: "clients#login"
  resources :contacts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :voitures do
  #   resources :voiture_descriptions
  # end

  resources :contacts

  resources :admin_users

  post "/login", to: "admin_users#login"
  get "/auto_login", to: "admin_users#auto_login"

end

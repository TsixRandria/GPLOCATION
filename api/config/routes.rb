Rails.application.routes.draw do


  #client sessio et registration
  resources :clients, only: [:create, :destroy, :update, :index]
  post "/client_login", to: "clients#login"

  resources :reservations

  resources :categories
  resources :tarifs


  resources :contacts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :voitures do
    resources :voiture_descriptions
  end

  resources :contacts

  resources :admin_users

  post "/login", to: "admin_users#login"
  get "/auto_login", to: "admin_users#auto_login"


  get '/reservations', to: 'reservations#index'
  post '/reservations', to: 'reservations#create'
  get '/reservations/:id', to: 'reservations#show'
  put '/reservations/:id', to: 'reservations#update'
  delete '/reservations/:id', to: 'reservations#destroy'

  resources :tarif_supplementaires
  resources :tarifs
  resources :reservation_options
  
end

Rails.application.routes.draw do


  #client sessio et registration
  resources :clients, only: [:create, :destroy, :update, :index]
  post "/client_login", to: "clients#login"

 

  #routes categories
  get '/categories', to: 'categories#index'
  post '/categories', to: 'categories#create'
  get '/categories/:id', to: 'categories#show'
  put '/categories/:id', to: 'categories#update'
  delete '/categories/:id', to: 'categories#destroy'

  #resources :categories do  
    resources :voitures 
  #end 


  #routes tarifs de base
  resources :tarifs
  resources :tarif_details


  resources :contacts
  
  
  resources :contacts
  resources :admin_users

  #routes admin
  post "/login", to: "admin_users#login"
  get "/auto_login", to: "admin_users#auto_login"

  # #routes reservations
  # get '/reservations', to: 'reservations#index'
  # post '/reservations', to: 'reservations#create'
  # get '/reservations/:id', to: 'reservations#show'
  # put '/reservations/:id', to: 'reservations#update'
  # delete '/reservations/:id', to: 'reservations#destroy'
  resources :reservations

  resources :tarif_supplementaires
  resources :tarifs
  resources :reservation_options
  
end

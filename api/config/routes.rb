Rails.application.routes.draw do


  #client sessio et registration
  resources :clients, only: [:create, :destroy, :update, :index]
  post "/client_login", to: "clients#login"

  resources :reservations

  #routes categories
  get '/categories', to: 'categories#index'
  post '/categories', to: 'categories#create'
  get '/categories/:id', to: 'categories#show'
  put '/categories/:id', to: 'categories#update'
  delete '/categories/:id', to: 'categories#destroy'

  #resources :categories do  
    resources :voitures 
  #end 

  resources :tarifs


  resources :contacts
  
  
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

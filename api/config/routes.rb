Rails.application.routes.draw do
  resources :categories
  resources :tarifs
  resources :contacts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :voitures do
    resources :voiture_descriptions
  end

  resources :contacts

  

  # resources :contacts

  
  
  resources :admin_users

  post "/login", to: "admin_users#login"
  get "/auto_login", to: "admin_users#auto_login"

end

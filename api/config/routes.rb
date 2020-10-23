Rails.application.routes.draw do
  resources :contacts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :voitures do
  #   resources :voiture_descriptions
  # end
<<<<<<< HEAD
  resources :contacts
=======

>>>>>>> 39b40e6389c53f19aba4ac7f1dd2cefe1d71d330

  # resources :contacts

  devise_for :users, controllers: {
    sessions: 'user/sessions',
    registrations: 'user/registrations'
  }
               

  
  resources :admin_users

  post "/login", to: "admin_users#login"
  get "/auto_login", to: "admin_users#auto_login"

end

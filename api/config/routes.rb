Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :voitures do
  #   resources :voiture_descriptions
  # end

  # resources :contacts

  devise_for :users, controllers: {
    sessions: 'user/sessions',
    registrations: 'user/registrations'
  }
               
end

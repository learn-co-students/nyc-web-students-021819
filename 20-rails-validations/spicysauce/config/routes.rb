Rails.application.routes.draw do
  resources :sauces, only: [:index, :show, :new, :create]
  # get '/sauces/new', to:"sauces#new", as:"new_sauce"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

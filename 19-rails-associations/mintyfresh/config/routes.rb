Rails.application.routes.draw do
  # resources :toids

  # post "/toids", to:"toids#create"
  # get '/toids/new', to:"toids#new"
  get '/toids/:id', to:"toids#show"
  get '/toids', to:"toids#index"
  resources :students
  # get '/mintyfresh', to:"toids#all_the_toids"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

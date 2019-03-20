Rails.application.routes.draw do


  resources :revengers
  # root to:"revengers#welcome"
  get '/', to:"revengers#welcome"
  #index
  # get '/revengers', to:"revengers#index"
  # get '/revengers/new', to:"revengers#new"
  # get '/revengers/:id', to:"revengers#show"
  # get '/revengers/:id/edit', to:"revengers#edit"
  #
  # post '/revengers', to:"revengers#create"
  # delete '/revengers', to:"revengers#destroy"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

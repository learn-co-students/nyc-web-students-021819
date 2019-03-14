Rails.application.routes.draw do
  # http_verb 'path', to: controller#action

  # resources :vehicles
  get '/vehicles', to: 'vehicles#index'
  get '/vehicles/new', to: 'vehicles#new'
  get '/vehicles/:id', to: 'vehicles#show', as: 'vehicle'
  post '/vehicles', to: 'vehicles#create'
  get '/vehicles/:id/edit', to: 'vehicles#edit'
  patch '/vehicles/:id', to: 'vehicles#update'
  delete '/vehicles/:id', to: 'vehicles#delete'

  # get '/icecream', to: 'icecreams#reallycold', as: 'icecream'
end

Rails.application.routes.draw do
  resources :energies
  # get '/energies', to:"energies#index"
  # get '/energies/new', to:"energies#new", as:"new_energy"
  #
  # post "/energies", to:"energies#create"
  # #
  # get '/energies/:id/edit', to:"energies#edit", as:"energy"
  # patch '/energies/:id', to:"energies#update"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

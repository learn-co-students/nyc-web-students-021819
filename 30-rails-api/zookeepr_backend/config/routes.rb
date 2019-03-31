Rails.application.routes.draw do
  # get 'animals/create'
  #
  # get 'animals/show'
  #
  # get 'animals/index'
  resources :animals, only: [:create, :show, :index, :destroy]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

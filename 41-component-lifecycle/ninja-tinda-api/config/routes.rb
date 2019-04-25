Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      get '/users/:id', to: "users#show"
      get '/turtles', to: "turtles#index"
    end
  end
end

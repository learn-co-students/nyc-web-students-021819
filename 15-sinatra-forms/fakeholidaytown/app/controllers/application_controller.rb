require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :method_override, true
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    # model nahhh

    #response
    erb :"welcome"
  end

end

class ApplicationController < Sinatra::Base
  set :views, 'app/views'
  # set :method_override, true

  # TODO create a route to root/home render home
  get '/' do
    puts "YEET"
    # "<h1>Hello World</h1>"
    erb :index
  end

  get '/yaboi' do
    erb :index
  end

  # INDEX
  get '/books' do
    # model
    @books = Book.all

    # response
    erb :index
  end

  # SHOW
  get '/books/:dragonface' do
    # model
    binding.pry
    @book = Book.find(params[:id])

    # response
    erb :show
  end


end

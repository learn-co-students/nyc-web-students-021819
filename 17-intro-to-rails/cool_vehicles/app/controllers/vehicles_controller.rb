class VehiclesController < ApplicationController
  # # SINATRA INDEX PAGE
  # get '/vehicles' do
  #   #some code here
  # end
  def index
    @vehicles = Vehicle.all
    @longest_name = Vehicle.longest_name
    render :index
  end

  def show
    @vehicle = Vehicle.find(params[:id])
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end
end

class ToidsController < ApplicationController


  #index
  def index
    #model
    @toids = Toid.all
    #response
    render :index
  end

  # get '/toids/:id'
  def show
    #model
    @toid = Toid.find(params[:id])
    #resp
    render :show
  end


  # get '/toids/new'
  def new
    # model
    @toid = Toid.new
    #response
    render :new
  end

  def create
    # model

    Toid.create(toid_params)
    # response
    redirect_to toids_path
  end

  # delete '/toids/:id'
  def destroy
    #model
    @toid = Toid.find(params[:id])
    @toid.destroy
    #response
    redirect_to toids_path
  end


  private

  # there are "bad people" please SPECIFICALLY whitelist your attributes
  def toid_params
    params.require(:toid).permit(:flavor, :curious, :student_id)
  end

end

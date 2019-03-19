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
    @stuents = Student.all
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
  def give_evans_the_toids
    #model
    @toid = Toid.find(params[:id])
    evans_toid = Toid.find_by(street_name: "yaboi")
    if @toid.student == []
      @toid.destroy
    else
      @toid.update_attribute(student_id: evans_toid.id)
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

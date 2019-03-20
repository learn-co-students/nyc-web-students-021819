class RevengersController < ApplicationController
  before_action :find_the_revenger, only: [:show, :edit, :destroy]

  def index
    #model
    @revengers = Revenger.all
    #resp
    #render :index
  end

  def welcome
    #render :welcome
  end

  def new
    @revenger = Revenger.new
    @orgz = Organization.all
    # render :new
  end

  def create
    revenger = Revenger.create(revenger_params)
    if revenger.valid?
      redirect_to revengers_path
    else
      #store the errors for one more request thanks FLASH ⚡️
      flash[:errors] = revenger.errors.full_messages
      redirect_to new_revenger_path
    end

  end

  def show
    render :show
  end

  # get '/revengers/:id/edit'
  def edit
    #model

    @orgz = Organization.all
    # response
    render :edit
  end

  # delete '/revengers/:id'
  def destroy
    @revenger.destroy
    redirect_to revengers_path
  end

  private

  def revenger_params
    params.require(:revenger).permit(:alias, :planet, :organization_id)
  end


  def find_the_revenger
    @revenger = Revenger.find(params[:id])
  end
end

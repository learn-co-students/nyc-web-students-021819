class EnergiesController < ApplicationController

  def index
    # model
    @energies = Energy.all

    # response
    render :index
  end

  # GET to the FORM
  # get '/energies/new'
  def new
    #model
      @energy = Energy.new
    #response
    render :new
  end


  # TAKE DATA from Da FORM and create
  def create
    e = Energy.create(energy_params)
    redirect_to armystrong_path(e.id)
  end


  #get 'energies/:id/edit'
  def edit
    #model
    @energy = Energy.find(params[:id])
    #response
    #render :edit
  end

  def update

  end

  def vickyHWAAAANG

  end

  private

  # STRONG PARAMS 💪
  # WHITE LIST specific attributes because the internet is scary
  # and full of HaX0rZ
  def energy_params
    params.require(:energy).permit(:color, :powerful)
  end
end

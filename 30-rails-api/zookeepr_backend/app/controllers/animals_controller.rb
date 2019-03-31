class AnimalsController < ApplicationController
  def create
    @species = Species.find_or_create_by(name: params[:species_name])
    @animal = Animal.new(name: params[:name], species: @species, diet: params["diet"].to_i)

    if @animal.save
      render json: @animal
    else
      render json: @animal.errors.full_messages, status: 422
    end
  end

  def show
    @animal = Animal.find(params[:id])

    render json: @animal
  end

  def index
    @animals = Animal.all

    render json: @animals
  end

  def destroy
    @animal = Animal.find(params[:id])
    @animal.destroy

    render json: @animal
  end

  # def animal_params
  #   # {animal => {name => '', diet => 0}}
  #   params.require(:animal).permit(:name, :diet)
  # end
end

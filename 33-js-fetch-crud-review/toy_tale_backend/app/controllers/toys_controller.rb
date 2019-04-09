class ToysController < ApplicationController
  before_action :find_toy, only: [:show, :update, :destroy]

  def index
    @toys = Toy.all
    render json: @toys
  end

  def show
    render json: @toy
  end

  def create
    @toy = Toy.create(toy_params)
    render json: @toy
  end

  def update
    @toy.update(toy_params)
    render json: @toy
  end

  def destroy
    @toy.destroy
    render json: @toy
  end

  private

  def find_toy
    @toy = Toy.find(params[:id])
  end

  def toy_params
    params.require(:toy).permit(:name, :image, :likes)
  end
end

class Api::V1::TurtlesController < ApplicationController

  def index
    render json: Turtle.all
  end

  def create
    turtle = Turtle.create(turtle_params)

    render json: turtle
  end

  private 

  def turtle_params
    params.permit(:name, :terrestrial, :age, :image_url)
  end
end

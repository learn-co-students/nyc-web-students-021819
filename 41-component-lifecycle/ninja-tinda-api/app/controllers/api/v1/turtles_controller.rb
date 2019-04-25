class Api::V1::TurtlesController < ApplicationController

  def index
    render json: Turtle.all
  end
end

class NachosController < ApplicationController
  before_action :find_nacho, only: [:show]
  before_action :find_the_nachos, only: :index

  def index # /nachos
    @nachos = Nacho.all
    # @nachos_in_my_cart =??
    # find_the_nachos
    render(:index)
  end

  def show
    #before_action called first
    render(:show)
  end

  private

  def find_nacho
    @nacho = Nacho.find(params[:id])
  end
end

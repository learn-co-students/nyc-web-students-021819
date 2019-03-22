class CartController < ApplicationController
  def update
    # byebug
    n = Nacho.find(params[:id])
    flash[:notice] = "YO! add the #{params[:name]} to your cart lolz"
    # session[:cart] = []
    # session[:cart] << n
    add_nacho_to_the_cart(params[:id])
    redirect_to nachos_path
  end

  def empty
    session[:cart] = nil
    redirect_to nachos_path
  end

end

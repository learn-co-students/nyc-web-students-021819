class ApplicationController < ActionController::Base


  # need to hold all my nacho id's
  def cart
    session[:cart] ||= []
    # if session[:cart] == nil
    #   session[:cart] = []
    # else
    #   session[:cart]
    # end
  end

  # method to add a nacho to a cart
  def add_nacho_to_the_cart(nacho_id)
    cart << nacho_id
  end

  # get the nacho instance from all the id's
  #pass them into the view
  def find_the_nachos
    @nachos_in_my_cart = Nacho.find(cart)
  end

end

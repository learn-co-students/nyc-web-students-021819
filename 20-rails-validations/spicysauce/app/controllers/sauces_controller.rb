class SaucesController < ApplicationController

  def index
    @sauces = Sauce.all
    #code
    render :index
  end

  def show
    #code
    @sauce = Sauce.find(params[:id])
    render :show
  end

  def new
    @sauce = Sauce.new
    #code
    render :new
  end


 #if the sauce saves then throw the user to the #{index}

 # otherwise let them know the errors
 # show them the new page AGAIN with the ERRORZ
  def create
    sauce = Sauce.create(sauce_params)
    if sauce.valid?
      redirect_to "/sauces"

    else
      flash[:you_done_goofed] = sauce.errors.full_messages

      redirect_to new_sauce_path
    end

  end

  def edit
    #code
  end

  def update
    #code
  end

  def destroy
    #code
  end


  private

  def sauce_params
    params.require(:sauce).permit(:flavor,:brand,:heat)
  end

end

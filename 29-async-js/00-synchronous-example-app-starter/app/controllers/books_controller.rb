class BooksController < ApplicationController

  def index
    if params[:search]
      @books = Book.fuzzy_search(params[:search])
    else
      @books = Book.all
    end
  end

  def show
    @book = Book.find_by(id: params[:id])
  end
end

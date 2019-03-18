class StudentsController < ApplicationController

  def show
    @student = Student.find(params[:id])

    render :show
  end
end

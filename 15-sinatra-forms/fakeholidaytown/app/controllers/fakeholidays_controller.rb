class FakeholidaysController < ApplicationController

  # GET: /fakeholidays
  # INDEX
  get "/fakeholidays" do
    # model
    @holidays = FakeHoliday.all
    # response
    erb :"/fakeholidays/index"
  end

  # GET: /fakeholidays/new
  # NEW
  get "/fakeholidays/new" do
    # model

    # response
    erb :"/fakeholidays/new.html"
  end
  # GET: /fakeholidays/10
  # SHOW
  get "/fakeholidays/:id" do
    #model
    @holiday = FakeHoliday.find(params[:id])
    # binding.pry

    #response
    erb :"/fakeholidays/show.html"
  end

  # POST: /fakeholidays
  # CREATE
  post "/fakeholidays" do
    fh = FakeHoliday.create(params)
    redirect "/fakeholidays/#{fh.id}"
  end


  # GET: /fakeholidays/5/edit
  # EDIT
  get "/fakeholidays/:id/edit" do
    # model
    @holiday = FakeHoliday.find(params[:id])

    # response
    erb :"/fakeholidays/edit.html"
  end

  # PATCH: /fakeholidays/5
  # UPDATE
  patch "/fakeholidays/:id" do
    # binding.pry
    fh = FakeHoliday.find(params[:id])
    fh.update(params[:holiday])
    redirect "/fakeholidays/#{fh.id}"
  end

  # DELETE: /fakeholidays/5/delete
  delete "/fakeholidays/:id/delete" do
    redirect "/fakeholidays"
  end
end

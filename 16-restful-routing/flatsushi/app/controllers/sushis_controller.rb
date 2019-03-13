class SushisController < ApplicationController

  # GET: /sushis
  get "/sushis" do
    # model
    @sushis = Sushi.all
    # response
    erb :"/sushis/index"
  end

  # GET: /sushis/new
  get "/sushis/new" do
    # response
    erb :"/sushis/new"
  end

  # POST: /sushis
  post "/sushis" do
    # model
    @sushi = Sushi.create(params[:sushi])
    # response
    redirect "/sushis/#{@sushi.id}"
  end

  # GET: /sushis/5
  get "/sushis/:id" do
    # model
    @sushi = Sushi.find_by(id: params[:id])
    # response
    erb :"/sushis/show"
  end

  # GET: /sushis/5/edit
  get "/sushis/:id/edit" do
    # model
    @sushi = Sushi.find_by(id: params[:id])
    # response
    erb :"/sushis/edit"
  end

  # PATCH: /sushis/5
  patch "/sushis/:id" do
    # model
    @sushi = Sushi.find_by(id: params[:id])
    @sushi.update(params[:sushi])
    # response
    redirect "/sushis/#{@sushi.id}"
  end

  # DELETE: /sushis/5
  delete "/sushis/:id" do
    # model
    @sushi = Sushi.find_by(id: params[:id])
    @sushi.destroy
    # response
    redirect "/sushis"
  end
end

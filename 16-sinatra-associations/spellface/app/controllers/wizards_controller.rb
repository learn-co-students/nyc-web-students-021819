class WizardsController < ApplicationController

  # GET: /wizards
  get "/wizards" do
    erb :"/wizards/index.html"
  end

  # GET: /wizards/new
  get "/wizards/new" do
    erb :"/wizards/new.html"
  end

  # POST: /wizards
  post "/wizards" do
    redirect "/wizards"
  end

  # GET: /wizards/5
  get "/wizards/:id" do
    erb :"/wizards/show.html"
  end

  # GET: /wizards/5/edit
  get "/wizards/:id/edit" do
    erb :"/wizards/edit.html"
  end

  # PATCH: /wizards/5
  patch "/wizards/:id" do
    redirect "/wizards/:id"
  end

  # DELETE: /wizards/5/delete
  delete "/wizards/:id/delete" do
    redirect "/wizards"
  end
end

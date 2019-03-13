class SpellsController < ApplicationController

  # GET: /spells
  get "/spells" do
    erb :"/spells/index.html"
  end

  # GET: /spells/new
  get "/spells/new" do
    @wizards = Wizard.all
    erb :"/spells/new.html"
  end

  # POST: /spells
  post "/spells" do
    binding.pry
    redirect "/spells"
  end

  # GET: /spells/5
  get "/spells/:id" do
    erb :"/spells/show.html"
  end

  # GET: /spells/5/edit
  get "/spells/:id/edit" do
    erb :"/spells/edit.html"
  end

  # PATCH: /spells/5
  patch "/spells/:id" do
    redirect "/spells/:id"
  end

  # DELETE: /spells/5/delete
  delete "/spells/:id/delete" do
    redirect "/spells"
  end
end

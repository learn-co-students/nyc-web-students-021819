class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :diet, :species_name
  # belongs_to :species

  def species_name
    self.object.species.name
  end
end


# render json: @animal

# AnimalSerializer.new(@animal)

# class ActiveModel::Serializer
  # attr_reader :object

  # def initialize(object)
  #   @object = object
  # end

# end

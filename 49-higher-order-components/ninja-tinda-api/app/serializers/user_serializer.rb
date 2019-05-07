class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :ninja_turtles
end

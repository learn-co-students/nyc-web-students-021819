class NinjaTurtleSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user
  belongs_to :weapon
  belongs_to :turtle
end

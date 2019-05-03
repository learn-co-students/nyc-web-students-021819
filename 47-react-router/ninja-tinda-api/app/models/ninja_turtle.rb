class NinjaTurtle < ApplicationRecord
  belongs_to :user
  belongs_to :turtle
  belongs_to :weapon
end

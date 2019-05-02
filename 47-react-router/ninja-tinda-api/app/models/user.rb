class User < ApplicationRecord
  has_many :ninja_turtles
  has_many :turtles, through: :ninja_turtles

  has_secure_password
end

class Animal < ApplicationRecord
  belongs_to :species, optional: true
  enum diet: [:carnivore, :herbivore, :omnivore]
end

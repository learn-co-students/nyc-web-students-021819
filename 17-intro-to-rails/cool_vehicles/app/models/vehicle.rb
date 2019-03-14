class Vehicle < ApplicationRecord

  def self.longest_name
    self.all.sort_by do |vehicle|
      vehicle.name.length
    end.last
  end
end

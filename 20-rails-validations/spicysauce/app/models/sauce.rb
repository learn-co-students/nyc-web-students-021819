class Sauce < ApplicationRecord

  validates :brand,:heat,:flavor, presence: true

    validate :heat_needs_to_be_real


  def heat_needs_to_be_real
    if self.heat < 0
      errors.add(:heat, "come on naw, that heat tho")
    end
  end

end

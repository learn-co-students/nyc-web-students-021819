class Revenger < ApplicationRecord
  belongs_to :organization
  validate :custom_method_right_here


  def custom_method_right_here
    if (self.alias == "")
      errors[:base] << "This person is invalid because NOT OKAY 2019"
    end
  end


end

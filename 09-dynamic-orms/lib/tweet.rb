class Tweet < ActiveRecord::Base

  belongs_to :user
  # def user
  #
  #   # return the user associated with this tweet
  #   # AR .find .find_by .where (pay attention the return value)
  #   User.find(self.user_id)
  # end
end

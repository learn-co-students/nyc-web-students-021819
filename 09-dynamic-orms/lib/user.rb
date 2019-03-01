class User < ActiveRecord::Base
  has_many :tweets
  # def tweets
  #   Tweet.where(user_id: self.id)
  # end
end

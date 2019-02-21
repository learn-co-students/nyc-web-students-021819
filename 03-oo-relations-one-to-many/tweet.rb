class Tweet
  @@all = []
  attr_reader :message, :user
  # def message
  #   @message
  # end

  def initialize(message, user)
    @message = message
    @user = user
    # add this newly created tweet, that is being created right now
    # to the array of all of the tweets
    @@all << self
  end

  def username
    self.user.username
  end

  def self.all
    @@all
  end

end

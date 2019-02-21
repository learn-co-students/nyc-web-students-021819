class User
  attr_reader :username

  def initialize(username)
    @username = username
    # @tweets = []
  end

  def tweets
    # @tweets
    # We are asking the Tweet class a Question
    # @ what tweets belong to me? (this current user)

    #look through a list of all of the tweets
    # choose the ones that belong to myself
    # and return those ones
    binding.pry
  end

  def post_tweet(message)
    new_tweet = Tweet.new(message, self)
    # @tweets << new_tweet
  end
end

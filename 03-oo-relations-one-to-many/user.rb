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
    Tweet.all.select do |tweet|
      tweet.user == self
    end
    # Appointment.all.select do |appointment|
    #   appointment.doctor == self
    # end
  end

  def post_tweet(message)
    | id | message | user_id
    Tweet.new(message, self)
    # @tweets << new_tweet
  end
end

class Tweet
  attr_reader :message, :user
  # def message
  #   @message
  # end
  def initialize(message, user)
    @message = message
    @user = user
  end

end

class Tweet
  attr_accessor :message, :user_id
  attr_reader :id

  # ALL = []
  # ALL << "new thing" # this is fine
  # ALL = "new thing" # this will break
  # @@all = []

  def self.all
    sql = "SELECT * FROM tweets"
    results = DB[:conn].execute(sql)
    binding.pry

    # results is an array of hashes,
    # i want this method to return an array of Tweet instances

    # (with the id set if possible)
    # ALL
  end

  def initialize(attributes={})
    @message = attributes['message']
    @user_id = attributes['user_id']
  end

  def save
    # self.class.all << self
  end

end

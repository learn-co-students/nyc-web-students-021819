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
    # binding.pry

    results.map do |row|
      # binding.pry
      # Tweet.new({"message" => row["message"], "user_id" => row["user_id"]})
      Tweet.new(row)
    end

    # results is an array of hashes,
    # i want this method to return an array of Tweet instances

    # (with the id set if possible)
    # ALL
  end

  def initialize(attributes={})
    @message = attributes['message']
    @user_id = attributes['user_id']

    @id = attributes['id']
  end

  def save

    # if persisted?
      # update it
    # else (its brand new)
    # do the stuff below
    sql = <<-SQL
      INSERT INTO tweets
      (user_id, message)
      VALUES (?, ?)
    SQL

    # binding.pry

    DB[:conn].execute(sql, self.user_id, self.message)
  end

  def persisted?
    !!self.id
  end

end

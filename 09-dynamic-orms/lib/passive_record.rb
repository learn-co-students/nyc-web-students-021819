class PassiveRecord
  attr_reader :id

  # ALL = []
  # ALL << "new thing" # this is fine
  # ALL = "new thing" # this will break
  # @@all = []

  def self.table_name
    self.to_s.downcase + "s"
  end

  def self.all
    # Dog => dogs
    # Tweet => tweets
    # User => users
    sql = "SELECT * FROM #{self.table_name}"
    results = DB[:conn].execute(sql)
    # binding.pry

    results.map do |row|
      # binding.pry
      # Tweet.new({"message" => row["message"], "user_id" => row["user_id"]})
      self.new(row)
    end

    # results is an array of hashes,
    # i want this method to return an array of Tweet instances

    # (with the id set if possible)
    # ALL
  end

  def initialize(attributes={})
    self.class.column_names.each do |col_name|
      # self.col_name = attributes[col_name]
      self.class.send(:attr_accessor, col_name)
      self.send("#{col_name}=", attributes[col_name])
    end
    # self.message = attributes['message']
    # self.user_id = attributes['user_id']

    @id = attributes['id']
  end

  def save
    # if the tweet is coming from the DB
    # update it
    if persisted?
      update_record
    else
      # otherwise, if its brand new
      # insert into the db
      insert_record
    end
  end

  def persisted?
    !!self.id
  end

  private

  def self.column_names
    DB[:conn].execute("PRAGMA TABLE_INFO (#{self.table_name})").map do |col_hash|
      col_hash["name"]
    end.reject do |col_name|
      col_name == "id"
    end
  end

  def insert_record
    # sql = "INSERT INTO tweets (message, user_id) VALUES ('my latest tweet', 2)"
    # sql = "INSERT INTO tweets (message, user_id) VALUES ('#{self.message}', #{self.user_id})"
    sql = <<-SQL
    INSERT INTO tweets
    (message, user_id)
    VALUES (?, ?);
    SQL
    # binding.pry
    DB[:conn].execute(sql, self.message, self.user_id)

    last_row_sql = <<-SQL
    SELECT *
    FROM tweets
    ORDER BY id DESC
    LIMIT 1
    SQL
    @id = DB[:conn].execute(last_row_sql)[0]["id"]
    self
  end

  def update_record
    sql = <<-SQL
    UPDATE tweets
    SET message = ?, user_id = ?
    WHERE id = #{self.id}
    SQL

    DB[:conn].execute(sql, self.message, self.user_id)
    self
  end

end

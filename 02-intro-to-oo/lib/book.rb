class Book

  def initialize(title, author)
    @title = title
    @author = author
  end

  def title
    @title.split(" ").map do |word|
      word.capitalize
    end.join(" ")
  end

  def author
    @author.split(" ").map do |word|
      word.capitalize
    end.join(" ")
  end


  def self.my_method
    puts "I am a class method"
  end



  def cover_page

    # cover_page should return a String that is formatted like this:
    # "Title Of The Book"
    #   by
    # Author Name
    # capitalized_title = @title.split(" ").map do |word|
    #   word.capitalize
    # end.join(" ")

    # capitalized_author = @author.split(" ").map do |word|
    #   word.capitalize
    # end.join(" ")

    # self is the implicit receiver
    "\"#{self.title}\"\n\tby\n#{self.author}"
  end

end

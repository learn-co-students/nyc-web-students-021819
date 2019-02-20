class Book

  def initialize(title, author)
    @title = title
    @author = author
  end

  def title
    @title
  end

  def author
    @author
  end

  def cover_page
    binding.pry
    # "Title Of The Book"
    #   by
    # Author Name
  end

end

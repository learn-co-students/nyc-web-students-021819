# Adapter::GoogleBooks.new('dogs').fetch_books
# Adapter::Amazon.new('dogs').fetch_books

module GoogleBooks

  class Adapter

    BASE_URL = "https://www.googleapis.com/books/v1/volumes"
    # per the api docs 40 is the max resuls per page
    MAX_RESULTS = 40

    attr_reader :term

    def initialize(term = nil)
      @term = term
    end


    def fetch_books(start_index = 0)
      # make a request to api
      if self.term
        url = "#{BASE_URL}?q=#{self.term}"
      else
        url = "#{BASE_URL}?q=subject:fiction&startIndex=#{start_index}&maxResults=#{MAX_RESULTS}"
      end

      response = RestClient.get(url)
      data = JSON.parse(response.body)

      #iterate over all the books in that response
      books = data['items'].map do |book_data|
        book = Book.find_or_initialize_by(title: book_data['volumeInfo']['title'], description: book_data['volumeInfo']['description'])
        book.pages = book_data['volumeInfo']['pageCount']
        image_links = book_data['volumeInfo']['imageLinks']
        book.image_url = image_links['thumbnail'] if image_links

        if  book_data['volumeInfo']['authors']
          author_name =  book_data['volumeInfo']['authors'].first
          author = Author.find_or_create_by(name: author_name)
        end

        # create and save the book objects and associated authors
        book.author = author
        book.save
        book
      end
    end

    def seed_db
      start_index = 0

      while start_index < 500
        self.fetch_books(start_index)
        start_index += MAX_RESULTS
      end
    end

  end
end

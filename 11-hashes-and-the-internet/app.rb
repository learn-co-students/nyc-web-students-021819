# 'https://www.googleapis.com/books/v1/volumes?q=ruby+programming'

require 'rest-client'
# faraday, httparty, open uri
require 'json'
require 'pry'

# * Write an application that takes a search term from a user
puts "Welcome to the Book Searcher"
puts "Enter the term you would like to search for:"

search_term = gets.chomp

# * Make a Request to the GoogleBooks API and get back some results
#   * https://www.googleapis.com/books/v1/volumes?q=ruby+programming

url = "https://www.googleapis.com/books/v1/volumes?q=#{search_term}"
response = RestClient.get(url)

# this is a string
response_string = response.body

# turn this string into a hash
results = JSON.parse(response_string)

books = results["items"]


books.each do |book|
#   # * Display the titles, author names, and description for each book
  # binding.pry
 title = book["volumeInfo"]["title"]
 authors = book["volumeInfo"]["authors"]
 description = book["volumeInfo"]["description"]

  if authors.nil?
    author_text = "No Authors for this book"
  else
    author_text = authors.join(" & ")
  end

  if description.nil?
    description_text = "No Description found"
  else
    description_text = description[0..100]
  end

  puts "Title: #{title}"
  puts "Authors: #{author_text}"
  puts "Description: #{description_text}..."


 puts "*" * 15
end



# Single Responsibility Principle

# Classes

# Models
# Authors, Book, Genre
#
# class GoogleBooksAdapter
#
#   def initialize(search_term)
#     @search_term = search_term
#   end
#
#   def fetch_books
#     url = "https://www.googleapis.com/books/v1/volumes?q=#{@search_term}"
#     response = RestClient.get(url)
#
#     # this is a string
#     response_string = response.body
#
#     # turn this string into a hash
#     results = JSON.parse(response_string)
#
#     books = results["items"]
#     # turn into these book objects
#   end
#
# end
#
# GoogleBooksAdapter.new('dogs').fetch_books

# responsible for getting user input, and puts-ing out outut
# #welcome
# #get_search_term
# CLI.new.start

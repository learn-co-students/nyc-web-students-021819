# 'https://www.googleapis.com/books/v1/volumes?q=ruby+programming'

require 'rest-client'
# faraday, httparty, open uri
require 'json'
require 'pry'

# * Write an application that takes a search term from a user

# * Make a Request to the GoogleBooks API and get back some results
#   * https://www.googleapis.com/books/v1/volumes?q=ruby+programming
response = RestClient.get('https://www.googleapis.com/books/v1/volumes?q=ruby programming')

# this is a string
response_string = response.body

# turn this string into a hash
results = JSON.parse(response_string)

books = results["items"]


books.each do |book|
#   # * Display the titles, author names, and description for each book
 title = book["volumeInfo"]["title"]

 puts "Title: #{title}"
 # puts "Authors: " print the author names separted by an &
 # puts "Description: " print the first 100 chars followed by ...


 puts "*" * 15
end

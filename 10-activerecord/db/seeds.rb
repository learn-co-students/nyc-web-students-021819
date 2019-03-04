url = "https://www.googleapis.com/books/v1/volumes?q=fiction"
response = RestClient.get(url)

# this is a string
response_string = response.body

# turn this string into a hash
results = JSON.parse(response_string)

books = results["items"]


books.each do |book|

 title = book["volumeInfo"]["title"]
 authors = book["volumeInfo"]["authors"]
 description = book["volumeInfo"]["description"]

 # Create some booke objects. Add the to the Database
 Book.create(title: title, description: description)



end

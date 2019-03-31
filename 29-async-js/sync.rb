require 'rest-client'
require 'json' #JavaScript Object Notation
require 'pry'

puts "brb"

# begin
#   this_is_not_a_variable
# rescue NameError
#   puts 'saved u'
# end

sleep(3)

puts "im back"

puts "Making an HTTP GET request with RestClient"

response = RestClient.get('https://swapi.co/api/planets')
puts "Request is complete"
puts response.inspect

puts "Parsing the JSON from the response"
planets = JSON.parse(response.body)

puts 'printing some results'
puts planets["results"].map { |planet| "* #{planet["name"]}"}

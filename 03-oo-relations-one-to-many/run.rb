require 'pry'
require_relative './user.rb'
require_relative './tweet.rb'

coffee_dad = User.new('coffee_dad')
coffee_dad.post_tweet('havin some coffee')

Pry.start

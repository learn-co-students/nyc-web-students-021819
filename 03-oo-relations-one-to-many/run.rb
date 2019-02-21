require 'pry'
require_relative './user.rb'
require_relative './tweet.rb'

coffee_dad = User.new('coffee_dad')
tea_mom = User.new('tea_mom')

coffee_dad.post_tweet('havin some coffee')
tea_mom.post_tweet('T T T T')
coffee_dad.post_tweet('more coffee')
coffee_dad.post_tweet('coffee coffee')
tea_mom.post_tweet('nice tea')

Pry.start

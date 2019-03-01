# puts "hello"
# squirrel1 = Squirrel.create(name: 'squirrely')
# Squirrel.create(name: 'rocky')
# Squirrel.create(name: 'scrappy')
# Squirrel.create(name: 'scooby')


data = {
  "squirrels": [
    {
      "name": "scooby"
      "weight": "10"
    },
    {
      "name": "whatever",
      "weight": "12"
    },
    {
      "name": "scrappy",
      "weight": 13
    },
  ]
}

data["squirrels"].each do |squ_data|
  Squirell.find_or_create_by(name: squ_data["name"])
end

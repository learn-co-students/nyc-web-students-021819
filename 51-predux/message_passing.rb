@turtles = [
  "Norman",
  "Julia",
  "Shelby",
  "Ulrich",
  "Pam"
]

def menu
  puts "What would you like to do?"
  puts "1. See all turtles"
  puts "2. Create a turtle"
  puts "3. Delete a turle"

  user_input = gets.chomp.to_i

  router(user_input)
end

def router(route, params = {})
  case route
  when 1
    print_turtles
  when 2
    new_turtle
  when 3
    select_turtle
  when 4
    create_turtle(params[:name])
  when 5
    delete_turtle(params[:name])
  end

  menu
end



def print_turtles
  @turtles.each { |turtle| puts turtle }
end

def new_turtle
  puts "What's the name of your turtle?"
  name = gets.chomp
  router(4, {name: name})
end

def create_turtle(name)
  @turtles << name
end

def select_turtle
  puts "Which turtle do you want to destroy?"
  name = gets.chomp
  router(5, {name: name})
end

def delete_turtle(name)
  @turtles = @turtles.select { |turtle| turtle != name }
end

menu
class Cat < Pet
  attr_reader :num_lives
  include Walkable::InstanceMethods
  extend Walkable::ClassMethods
  include Pescatarianable

  # extend Walkable extend is for class methods
  # include Walkable include is for instance methods

  def initialize(*args)
    super
    @num_lives = 9
  end

  def meow
    "meow"
  end

end

# Only a Cat and a Dog can do, but not a Fish
# go_on_a_walk
# Walkable
# _able

# Only a Cat and a Fish can do, but not a Dog
# eat_another_fish
# Pescatarianable

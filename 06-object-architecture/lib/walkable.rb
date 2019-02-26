module Walkable

  module InstanceMethods
    def go_on_a_walk
      "Im going on a walk"
    end
  end

  module ClassMethods
    def is_a_class_method
      "Im a class method"
    end
  end

end

# Encapsualte behavior,
# a collection of methods (behaviors)
# that kind of go together


# CANNOT make a new instance a module
# Cat.new

# Walkable.new T_T

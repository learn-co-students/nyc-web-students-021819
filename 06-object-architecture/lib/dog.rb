class Dog < Pet
  include Walkable::InstanceMethods
  extend Walkable::ClassMethods
end

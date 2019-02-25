class Planet
  attr_reader :name

  def initialize(name)
    @name = name
  end

  # has many colonies
  def colonies
    # Let's go ask the Colony model a question
    # what are the colonies that belong to me?
    Colony.all.select do |colony|
      colony.planet == self
    end
  end

  # has many aliens through colonies
  def aliens
    # Add code here
    # this should return an Array of Planet Objects that this alien has colonies on
    self.colonies.map do |name|
      # colony.alien
    end
  end
end

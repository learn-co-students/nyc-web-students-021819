class Colony

  attr_reader :alien, :planet
  @@all = []

  def initialize(alien, planet)
    @alien = alien
    @planet = planet

    @@all << self
  end

  def self.all
    @@all
  end

end

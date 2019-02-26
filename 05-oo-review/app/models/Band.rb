class Band
  attr_accessor :name, :genre

  @@all = []

  def initialize(name, genre)
    @name = name
    @genre = genre
    @@all << self
  end

  def self.all
    @@all
  end

  def concerts
    Concert.all.select do |concert|
      concert.band == self
    end
  end

  def venues
    self.concerts.map do |concert|
      concert.venue
    end.uniq
  end

  def add_concert(date, venue)
    Concert.new(date, self, venue)
  end

  def update_attendance(concert, number)
    if concert.band == self
      concert.attendance = number
    else
      puts 'THIS IS NOT YOUR CONCERT'
    end
  end

  #try to write out the last three Band deliverables here!
end

class Concert
  attr_reader :attendance
  attr_accessor :date, :band, :venue

  @@all = []

  def initialize(date, band, venue, attendance = 0)
    @date = date
    @band = band
    @venue = venue
    self.attendance = attendance

    @@all << self
  end

  def self.all
    @@all
  end

  def attendance=(num)
    if num > self.venue.capacity
      puts "SORRY, SOLD OUT"
      @attendance = self.venue.capacity
    elsif num < 0
      puts "SORRY, THAT'S IMPOSSIBLE"
      @attendance = 0
    else
      @attendance = num
    end
  end

  def self.highest_attendance
    sorted_concerts = self.all.sort_by do |concert|
      concert.attendance
    end

    sorted_concerts.last
  end
end

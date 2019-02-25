class Venue
  attr_accessor :name, :location, :capacity

  @@all = []

  def initialize(name, location, capacity)
    @name = name
    @location = location
    @capacity = capacity
    @@all << self
  end

  def self.all
    @@all
  end

  def self.find_by_location(location)
    self.all.select do |venue|
      venue.location == location
    end
  end

  def self.find_by_name(name)
    self.all.find do |venue|
      venue.name == name
    end
  end

  def concerts
    Concert.all.select do |concert|
      concert.venue == self
    end
  end

  def bands
    bands = concerts.map do |concert|
      concert.band
    end

    bands.uniq
  end

  def concert_dates
    concerts.map do |concert|
      concert.date
    end.uniq
  end

  def average_attendance
    # attendances = concerts.map do |concert|
    #   concert.attendance
    # end
    #
    # attendances.inject(:+) / attendances.length

    attendance_total = concerts.inject(0) do |result, concert|
      result + concert.attendance
    end

    attendance_total.to_f / concerts.length.to_f
  end
end

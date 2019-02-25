require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

# make some test data here!
# e.g. kooks = Band.new('The Kooks', 'Rock')
blink182 = Band.new('Blink 182', 'Pop Punk')
boyz = Band.new('Boyz II Men', 'Boy Band')
xx = Band.new("The XX", "British Alt")

msg = Venue.new('Madison Square Garden', 'NYC', 20789)
barclays = Venue.new('Barclays Center', 'Alaska', 19000)
bowery = Venue.new('The Bowery Ballroom', 'NYC', 575)

concert1 = Concert.new('1/1', blink182, bowery, 1000)
concert2 = Concert.new('1/2', blink182, bowery, 200)
concert3 = Concert.new('1/3', blink182, barclays, 8000)
concert4 = Concert.new('1/2', boyz, msg, 10)
concert5 = Concert.new('1/5', boyz, barclays, 2500)
concert6 = Concert.new('1/4', boyz, barclays, -50)
concert7 = Concert.new('1/1', xx, msg, 500)
concert8 = Concert.new('1/3', xx, barclays, 800)
concert9 = Concert.new('1/9', xx, barclays, 700)

Pry.start #change to binding.pry if needed
0

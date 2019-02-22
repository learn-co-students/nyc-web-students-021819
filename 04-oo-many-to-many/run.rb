require 'pry'
require_relative './alien.rb'
require_relative './colony.rb'
require_relative './planet.rb'


# # Aliens

# alien has many colonies (Alien.new('human').colonies)
# alien has many planets through colonies (alien.planets)
#
# # Colony
# colonoy belongs to alien
# colony belongs to planet
#
# # Planets
# planet has many colonies
# planet has many aliens through colonies

earth = Planet.new('earth')
mars = Planet.new('mars')


humans = Alien.new('humans')
preds= Alien.new('Predators')
zorps = Alien.new('Zorplings')

humans.colonize_planet(earth)
zorps.colonize_planet(mars)
humans.colonize_planet(mars)
preds.colonize_planet(earth)

Pry.start

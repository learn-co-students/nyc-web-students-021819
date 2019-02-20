# player = {
#   player_name: "Alan Anderson",
#   number: 0,
#   shoe: 16,
#   points: 22,
#   rebounds: 12,
#   assists: 12,
#   steals: 3,
#   blocks: 1,
#   slam_dunks: 1
# }
require 'pry'

class Player

  #macro, code that writes code for us
  attr_accessor :name, :number, :shoe, :points, :rebounds, :assists
  # attr_reader :name, :number, :shoe, :points, :rebounds, :assists
  # attr_writer :name, :number, :shoe, :points, :rebounds, :assists

  def initialize(player_name, number, shoe, points, rebounds, assists)
    @name = player_name
    @number = number
    @shoe = shoe
    @points = points
    @rebounds = rebounds
    @assists = assists
  end

  # def points=(new_points)
  #   @points = new_points
  # end

  # def name
  #   @name
  # end
  #
  # def number
  #   @number
  # end

end

player = Player.new("Alan Anderson", 0, 16, 22, 12, 12)

binding.pry
"k bye"

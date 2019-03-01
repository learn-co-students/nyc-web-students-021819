class Squirrel < ActiveRecord::Base
  has_many :acorns
  # SELECT "acorns".* FROM "acorns" WHERE "acorns"."squirrel_id" = #{self.id}

  # has_many :spots
  # This is how AR would think our tables are setup
  # SELECT * FROM "spots" WHERE "spots"."squirrel_id" = #{self.id}

  # has_many :spots, through: :acorns
  has_many :spots, :through => :acorns
  # SELECT * FROM spots
  # JOIN acorns ON acorns.squirrel_id = squirrels.id
  # JOIN spots ON acorns.spot_id = spots.id
end

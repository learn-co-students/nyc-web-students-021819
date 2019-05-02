# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Making Users"
User.create(
  username: "TurtleLover",
  password: "shell"
)

weapons = [
  {name: "nun-chucks", image_url: "https://images-na.ssl-images-amazon.com/images/I/61sGOP4veiL._SX425_.jpg"},
  {name: "ninja stars", image_url: "https://www.tbotech.com/images/90-16.jpg"},
  {name: "spoon", image_url: "https://images-na.ssl-images-amazon.com/images/I/31MB-LUFFDL.jpg"},
  {name: "sword", image_url: "https://www.karatemart.com/images/products/large/medieval-squire-sword-1548898.jpg"},
  {name: "taser", image_url: "https://cdn1.bigcommerce.com/server3600/j7nzh/products/466/images/1703/TASER_X26P_without_cartridge-min__01826.1515605669.500.750.jpg?c=2"},
  {name: "crowbar", image_url: "https://www.picclickimg.com/d/l400/pict/252802893734_/Brand-New-12-Hardware-Crowbar-Tool-Garage-Straight.jpg"},
  {name: "pen and paper", image_url: "http://www.officexpress.co.uk/wp-content/uploads/2014/03/Pen-and-Pad-of-Paper460x300.jpg"},
  {name: "knowledge", image_url: "https://pbs.twimg.com/profile_images/985460916274708480/i8YCRckY.jpg"},
  {name: "guitar", image_url: "https://media.guitarcenter.com/is/image/MMGS7/LX1E-Little-Martin-Acoustic-Electric-Guitar-Natural/J29802000001000-00-500x500.jpg"},
  {name: "smaller turtles", image_url: "https://theturtlehub.com/wp-content/uploads/2018/03/small-pet-turtles-that-stay-small.jpg"},
  {name: "Evans", image_url: "https://secure.meetupstatic.com/photos/member/c/7/5/c/member_273771036.jpeg"}
]

puts "Making Weapons"
weapons.each do |weapon|
  Weapon.create(weapon)
end

turtles = [
  {
    name: "Jasper",
    image_url: "https://images.csmonitor.com/csm/2017/10/1005-SeaTurtle.jpg?alias=standard_900x600",
    age: 1,
    terrestrial: false
  },
  {
    name: "Smee",
    image_url: "https://www.phnompenhpost.com/sites/default/files/styles/image_780x440/public/field/image/the-asian-giant-softshell-turtle-was-thought-to-be-extinct-in-the-kratie-area-until-the-species-was-rediscovered-in-2007.-wildlife-conservation-society.jpg?itok=-KskbJ9t",
    age: 5,
    terrestrial: false
  },
  {
    name: "Drogo",
    image_url: "https://www.mass.gov/files/styles/embedded_half_width/public/eastern_box_turtle_mike_jones_4_0.jpg?itok=AZwlbbLz",
    age: 13,
    terrestrial: true
  },
  {
    name: "The Dude",
    image_url: "https://static01.nyt.com/images/2018/04/21/science/21OBS-Quote-INYT/13TURTLE-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    age: 37,
    terrestrial: false
  },
  {
    name: "Sapphire",
    image_url: "https://cdn.shopify.com/s/files/1/2037/1329/products/IMG_6849_large.jpg?v=1517774838",
    age:  3,
    terrestrial: true
  },
  {
    name: "Jam",
    image_url: "https://i.ytimg.com/vi/p4Jj9QZFJvw/hqdefault.jpg",
    age: 2,
    terrestrial: true
  },
  {
    name: "Troy",
    image_url: "https://www.telegraph.co.uk/content/dam/science/2018/03/28/166438_trans_NvBQzQNjv4BqZgEkZX3M936N5BQK4Va8RWtT0gK_6EfZT336f62EI5U.jpg?imwidth=450",
    age: 34,
    terrestrial: false
  },
  {
    name: "Loki",
    image_url: "https://images-na.ssl-images-amazon.com/images/I/81fxiz3Y24L._SX425_.jpg",
    age: 2,
    terrestrial: true
  },
  {
    name: "Norman",
    image_url: "https://static01.nyt.com/images/2018/01/16/science/11SEATURTLES2/11SEATURTLES2-facebookJumbo.jpg",
    age: 87,
    terrestrial: false
  },
  {
    name: "Kevin",
    image_url: "https://waterlifeaquarium.com.au/wp-content/uploads/2018/03/baby-turtles-1.jpg",
    age: 4,
    terrestrial: false
  },
  {
    name: "Ashley",
    image_url: "https://longboardtoday666.files.wordpress.com/2013/09/578219_471323596275057_1119683871_n.jpg",
    age: 8,
    terrestrial: true
  },
  {
    name: "Randy",
    image_url: "https://caldwellzoo.org/wp-content/uploads/2017/04/ALLIGATOR-SNAPPING-TURTLE-web.jpg",
    age: 38,
    terrestrial: true
  },
  {
    name: "Piglet",
    image_url: "https://media.pri.org/s3fs-public/styles/story_main/public/story/images/animals-pignosedturtle-slide4-web.jpg?itok=qCeZxAgz",
    age: 18,
    terrestrial: false
  },
  {
    name: "Katarina",
    image_url: "https://i1.wp.com/theverybesttop10.com/wp-content/uploads/2014/08/Top-10-Rare-and-Unusual-Turtles-and-Tortoises-4.jpg?fit=724%2C520&ssl=1",
    age: 20,
    terrestrial: true
  },
  {
    name: "Boris",
    image_url: "https://vcahospitals.com/-/media/vca/images/lifelearn-images/turtlesaquaticdiseases2scaler.ashx?la=en&hash=5A70664EF4C9E5DC741497061FD85FFD",
    age: 15,
    terrestrial: false
  },
  {
    name: "Maisie",
    image_url: "https://i.kym-cdn.com/photos/images/original/000/985/925/2a9.jpg",
    age: 74,
    terrestrial: false
  },
  {
    name: "Vladd",
    image_url: "https://www.gannett-cdn.com/-mm-/a0410b651d647eb088e9ca98836e8e597ad9633d/c=0-0-1064-800/local/-/media/2017/11/14/USATODAY/USATODAY/636462622919101045-Alligator-snapping-turtle.jpg?width=534&height=401&fit=crop",
    age: 27,
    terrestrial: true
  },
  {
    name: "Margery",
    image_url: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/03/15/snapping-turtle.jpg?w968h681",
    age: 45,
    terrestrial: true
  },
  {
    name: "Frank",
    image_url: "https://www.factzoo.com/sites/all/img/reptiles/galapagos-giant-turtle-saddleback.jpg",
    age: 64,
    terrestrial: true
  },
  {
    name: "Laura",
    image_url: "https://i.pinimg.com/originals/a4/dc/3e/a4dc3e74ba803af9fce138715548a4e2.jpg",
    age: 23,
    terrestrial: false
  },
  {
    name: "Martin",
    image_url: "https://pbs.twimg.com/media/BLdhFn0CYAA4OBG.jpg",
    age: 1,
    terrestrial: true
  },
  {
    name: "Chukwa",
    image_url: "https://i.imgur.com/vUjWC7V.jpg",
    age: 9999,
    terrestrial: true
  }
]


puts "Making Turtles"
turtles.each do |turtle|
  Turtle.create(turtle)
end


20.times do
  NinjaTurtle.create(
    weapon: Weapon.all.sample,
    turtle: Turtle.all.sample,
    user: User.first
  )
end
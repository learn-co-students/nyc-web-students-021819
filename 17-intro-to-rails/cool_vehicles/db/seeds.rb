# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Vehicle.create(sentience: false, lights: 8, veh_type: 'Car', plate_number: 'boring', name: 'Just your regular car')
Vehicle.create(sentience: true, lights: 20000, veh_type: 'Bicycle', plate_number: 'radical', name: 'Old Faith')
Vehicle.create(sentience: false, lights: 10, veh_type: 'Scooter', plate_number: 'kidzrule', name: 'Scooter')
Vehicle.create(sentience: true, lights: 180, veh_type: 'Horse', plate_number: 'lucky', name: 'Lucky')
Vehicle.create(sentience: true, lights: 94, veh_type: 'Herby', plate_number: 'view', name: 'Little Mooey')

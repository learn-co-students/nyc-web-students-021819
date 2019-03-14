class CreateVehicles < ActiveRecord::Migration[5.2]
  def change
    create_table :vehicles do |t|
      t.boolean :sentience
      t.integer :lights
      t.string :veh_type
      t.string :plate_number
      t.string :name

      t.timestamps
    end
  end
end

class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.integer :lat
      t.integer :long
      t.timestamps
    end
  end
end

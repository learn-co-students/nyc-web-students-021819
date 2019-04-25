class CreateTurtles < ActiveRecord::Migration[5.2]
  def change
    create_table :turtles do |t|
      t.string :name
      t.string :image_url
      t.integer :age
      t.boolean :terrestrial

      t.timestamps
    end
  end
end

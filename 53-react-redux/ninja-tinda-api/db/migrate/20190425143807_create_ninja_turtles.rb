class CreateNinjaTurtles < ActiveRecord::Migration[5.2]
  def change
    create_table :ninja_turtles do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :turtle, foreign_key: true
      t.belongs_to :weapon, foreign_key: true

      t.timestamps
    end
  end
end

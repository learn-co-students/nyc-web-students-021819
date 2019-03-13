class CreateSushis < ActiveRecord::Migration
  def change
    create_table :sushis do |t|
      t.string :name
      t.decimal :price
      t.string :image

      t.timestamps null: false
    end
  end
end

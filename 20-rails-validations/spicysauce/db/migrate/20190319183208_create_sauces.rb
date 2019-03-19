class CreateSauces < ActiveRecord::Migration[5.2]
  def change
    create_table :sauces do |t|
      t.string :brand
      t.string :flavor
      t.integer :heat

      t.timestamps
    end
  end
end

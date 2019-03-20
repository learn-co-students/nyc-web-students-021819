class CreateRevengers < ActiveRecord::Migration[5.2]
  def change
    create_table :revengers do |t|
      t.string :alias
      t.string :planet
      t.integer :organization_id

      t.timestamps
    end
  end
end

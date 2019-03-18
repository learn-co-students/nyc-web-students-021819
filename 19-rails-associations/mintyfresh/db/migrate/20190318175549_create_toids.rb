class CreateToids < ActiveRecord::Migration[5.2]
  def change
    create_table :toids do |t|
      t.string :flavor
      t.boolean :curious
      t.integer :student_id

      t.timestamps
    end
  end
end

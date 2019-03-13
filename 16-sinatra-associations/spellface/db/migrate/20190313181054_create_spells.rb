class CreateSpells < ActiveRecord::Migration
  def change
    create_table :spells do |t|
      t.string :name
      t.string :element
      t.integer :wizard_id
      t.timestamps null: false
    end
  end
end

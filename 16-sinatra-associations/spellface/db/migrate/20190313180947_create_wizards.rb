class CreateWizards < ActiveRecord::Migration
  def change
    create_table :wizards do |t|
      t.string :name
      t.integer :beardlength
      
      t.timestamps null: false
    end
  end
end

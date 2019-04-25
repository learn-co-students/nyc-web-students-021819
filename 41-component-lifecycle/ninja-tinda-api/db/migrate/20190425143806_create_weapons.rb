class CreateWeapons < ActiveRecord::Migration[5.2]
  def change
    create_table :weapons do |t|
      t.string :name
      t.string :image_url

      t.timestamps
    end
  end
end

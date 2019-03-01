class CreateAcorns < ActiveRecord::Migration[5.2]
  def change
    create_table :acorns do |t|
      t.integer :squirrel_id
    end
  end
end

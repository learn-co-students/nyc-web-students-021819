class CreateFakeHolidays < ActiveRecord::Migration
  def change
    create_table :fake_holidays do |t|
      t.string :name
      t.string :date
      t.boolean :fun  
      t.timestamps null: false
    end
  end
end

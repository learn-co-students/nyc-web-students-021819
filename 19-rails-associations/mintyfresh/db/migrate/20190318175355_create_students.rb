class CreateStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :students do |t|
      t.boolean :smelly_breath
      t.string :street_name

      t.timestamps
    end
  end
end

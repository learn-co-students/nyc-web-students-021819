class CreateSquirrels < ActiveRecord::Migration[5.2]
  def change
    create_table :squirrels do |t|
      t.string :name
      t.string :color
      t.integer :age

      t.timestamps
    end
  end
end

# def create_table(table_name)
#   yield(TableBuilder.new)
# end
#
# class TableBuilder
#   def string(col_name)
#   end
# end
#
# def my_each(arr)
#   counter = 0
#   while counter < arr.length
#     yield(arr[counter])
#     counter += 1
#   end
# end



# CreateSquirrels.new.change

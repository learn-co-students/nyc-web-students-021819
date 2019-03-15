class CreateEnergies < ActiveRecord::Migration[5.2]
  def change
    create_table :energies do |t|
      t.string :color
      t.integer :powerful

      t.timestamps
    end
  end
end

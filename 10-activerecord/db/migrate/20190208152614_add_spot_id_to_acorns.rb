class AddSpotIdToAcorns < ActiveRecord::Migration[5.2]
  def change
    add_column :acorns, :spot_id, :integer 
  end
end

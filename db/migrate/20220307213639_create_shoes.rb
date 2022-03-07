class CreateShoes < ActiveRecord::Migration[7.0]
  def change
    create_table :shoes do |t|
      t.string :brand
      t.string :style
      t.integer :price

      t.timestamps
    end
  end
end

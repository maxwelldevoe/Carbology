class AddDescription < ActiveRecord::Migration[5.1]
  def change
    add_column :recipes, :description, :string, null: false
  end
end

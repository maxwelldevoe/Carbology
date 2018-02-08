class ChangeListColumns < ActiveRecord::Migration[5.1]
  def up
    change_column :recipes, :ingredients, :text, null: false
    change_column :recipes, :instructions, :text, null: false
  end

  def down
    change_column :recipes, :ingredients, :string, null: false
    change_column :recipes, :instructions, :string, null: false
  end
end

class CreateRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :recipes do |t|
      t.string :title, null: false
      t.string :ingredients, null: false
      t.string :instructions, null: false
    end
  end
end

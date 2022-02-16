class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.references :user, null: false, foreign_key: true
      t.string :char_name
      t.string :race
      t.integer :str
      t.integer :dex
      t.integer :vit
      t.integer :luk
      t.integer :def

      t.timestamps
    end
  end
end
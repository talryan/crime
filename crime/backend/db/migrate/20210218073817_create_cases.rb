class CreateCases < ActiveRecord::Migration[6.1]
  def change
    create_table :cases do |t|
      t.string :name
      t.boolean :victim
      t.text :bio
      t.boolean :solved
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end

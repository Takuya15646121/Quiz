class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.integer :user_id
      t.string :title
      t.boolean :is_started
      t.boolean :is_ended

      t.timestamps
    end
  end
end

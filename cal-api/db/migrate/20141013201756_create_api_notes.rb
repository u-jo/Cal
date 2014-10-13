class CreateApiNotes < ActiveRecord::Migration
  def change
    create_table :api_notes do |t|
      t.string :content
      t.integer :user_id

      t.timestamps
    end
    add_index :api_notes, [:user_id, :created_at]
  end
end

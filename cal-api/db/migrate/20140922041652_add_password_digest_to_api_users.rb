class AddPasswordDigestToApiUsers < ActiveRecord::Migration
  def change
    add_column :api_users, :password_digest, :string
  end
end

class Api::Note < ActiveRecord::Base
	belongs_to :user
	validates :user_id, presence: true
	validates :content, length: { maximum: 1000 }
end

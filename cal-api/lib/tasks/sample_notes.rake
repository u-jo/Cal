namespace :db do 
	desc "Fill database with sample note data"
	task populate: :environment do
		users = User.all(limit: 6)
		50.times do
			content = Faker::Lorem.sentence(5)
			users.each { |user| user.api_notes.create!(content: content) }
		end
	end
	
end
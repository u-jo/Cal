class Api::CsrfResponderController < ApplicationController
	skip_before_filter :authenticate_user!
	skip_before_filter :authenticate_user_from_token!
	RESPONSE = "verified"
	def index
		response = Hash.new
		response[:response] = RESPONSE
		respond_to do |format|
			format.json { render json:  response }
		end
	end

end

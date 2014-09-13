class Api::CsrfResponderController < ApplicationController
	RESPONSE = "verified"
	def index
		response = Hash.new
		response[:response] = RESPONSE
		respond_to do |format|
			format.json { render json:  response }
		end
	end
end

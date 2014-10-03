class ApplicationController < ActionController::Base
	# Prevent CSRF attacks by raising an exception.
	# For APIs, you may want to use :null_session instead.
	respond_to :json
	protect_from_forgery with: :null_session, :if => Proc.new { |c| c.request.format == 'application/json'}
	#before_filter :authenticate  
	before_filter :authenticate_user_from_token!
	after_filter  :set_csrf_cookie_for_ng
	def default_serializer_options
		{ root: false }
	end

	def set_csrf_cookie_for_ng
		cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
	end

	def authenticate_user_from_token!
	    user_email = request.headers["X-API-EMAIL"].presence
	    user_auth_token = request.headers["X-API-TOKEN"].presence
	    user = user_email && User.find_by_email(user_email)

	    # Notice how we use Devise.secure_compare to compare the token
	    # in the database with the token given in the params, mitigating
	    # timing attacks.
	    if user && Devise.secure_compare(user.authentication_token, user_auth_token)
	      sign_in(user, store: false)
	    end
	  end


	protected
	  def verified_request?
	    super || form_authenticity_token == request.headers['X-XSRF-TOKEN']
	  end  
end
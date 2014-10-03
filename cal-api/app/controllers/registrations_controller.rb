class RegistrationsController < Devise::RegistrationsController
 
  def new
    build_resource({})
    self.resource.user = User.new
    respond_with self.resource
  end
 
  def create
  	user = User.new(sign_up_params)
    if (user.save!) 
    	respond_to do |format|
	    	format.json {
	    		render :json => { sucess: true, status: 200, user: { auth_token: user.authentication_token, email: user.email, id: user.id }}
	    	}
   		end
   	else
   		respond_to do |format|
	    	format.json {
	    		render :json => { success: false, status: :unprocessible_entity}
	    	}
   		end
    end
  end
 
  private
	  def sign_up_params
	    allow = [:email, :password, :password_confirmation]
	    params.require(:user).permit(allow)
	  end
 
end
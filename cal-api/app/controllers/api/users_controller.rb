class Api::UsersController < ApplicationController
  def new
  end

  def show_note
	@user = User.find(params[:id])
	@api_notes = @user.api_notes.paginate(page :params[:page])
  end

end

class Api::NotesController < ApplicationController

  def create
  	@api_note = current_user.api_notes.build(api_note_params)
  end

  def destroy
  end


 private

    def api_note_params
      params.require(:api_note).permit(:content)
    end

    def correct_user
      @api_note = current_user.api_notes.find_by(id: params[:id])
    end
end

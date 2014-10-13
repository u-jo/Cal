class NotesController < ApplicationController

  def create
  	@note = current_user.notes.build(note_params)
  end

  def destroy
  	@note.destroy
  	
  end


 private

    def note_params
      params.require(:note).permit(:content)
    end

    def correct_user
      @note = current_user.notes.find_by(id: params[:id])
    end
end

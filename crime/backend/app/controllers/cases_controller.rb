class CasesController < ApplicationController

  def index
    cases = Case.all

    render json: cases,  :include => :category, :status => 200
  end

  # GET /cases/1
  def show
    case = Case.find(params[:id])
    render json: case, :include => :category , :status => 200
  end

  # POST /cases
  def create 
      category = Category.find_by(name: params[:category])
    case = Case.create(name: params[:name], victim: params[:victim], bio: params[:bio], solved: [:solved], category: category)
    if case.name != ""
        render json: case, :include => :category, :status => 201
    end 
end 



 
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_case
      @case = Case.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def case_params
      params.require(:case).permit(:criminal, :charge, :bio, :solved, :category_id)
    end
end

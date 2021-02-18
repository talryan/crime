class CategoriesController < ApplicationController

  # GET /categories
  def index
    categories = Category.all

    render json: categories, :include => :cases, :status => 200
  end
end

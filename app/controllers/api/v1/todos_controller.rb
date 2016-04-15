class Api::V1::TodosController < ApplicationController
  def index
    @todos = Todo.all
    respond_with :api, :v1, @todos
  end

  def create
    @todo = Todo.new(todo_params)
    @todo.save
    respond_with :api, :v1, @todo
  end

  private
  def todo_params
    params.require(:todo).permit(:title)
  end
end

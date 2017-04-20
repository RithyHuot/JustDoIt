class Api::GroupsController < ApplicationController
  def create
    @group = Group.new(group_params)

    if @group.save
      render '/api/groups/show', group: @group
    else
      render :error, status: 422
    end
  end

  def index
    @groups = Group.all
    render :index
  end

  def show
    @group = Group.find(params[:id])
    if @group
      render :show
    else
      render :error, status: 422
    end
  end

  def destroy
    @group = Group.find(params[:id])

    if @group.destroy
      render '/api/groups/show', group: @group
    else
      render :error, status: 422
    end
  end

  def update
    @group = Group.find(params[:id])

    if @group.update(group_params)
      render '/api/groups/show', group: @group
    else
      render :error, status: 422
    end
  end

  private

  def group_params
    params.require(:group).permit(:name, :category, :founded, :description, :location, :image_url)
  end
end

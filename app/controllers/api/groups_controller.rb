class Api::GroupsController < ApplicationController
  before_action :require_login, except: [:index, :show, :search]

  def search
    search_query = params[:search]
    @groups =
      Group
      .includes(:users, :organizer_users)
      .where(['name ILIKE ? or location ILIKE ?', "%#{params[:search]}%", "%#{params[:search]}%"])

      # .where(['name ILIKE ?', "%#{search_query}%"])
    if @groups.length > 0
        render :index
    else
      render(json: ["No Result"], status: 404)
    end

  end

  def adduser
    @group = Group.includes(:users, :organizer_users).find(params[:id])
    unless @group.user_ids.include?(current_user.id)
      @group.user_ids = @group.user_ids.push(current_user.id)

      render '/api/groups/show', group: @group
    else
      render(json: ["Can't find user"], status: 404)
    end
  end

  def removeuser
    @group = Group.includes(:users, :organizer_users).find(params[:id])
    if @group.user_ids.include?(current_user.id)
      user_ids = @group.user_ids
      user_ids.delete(current_user.id)
      @group.user_ids = user_ids

      render '/api/groups/show', group: @group
    else
      render(json: ["Can't find user"], status: 404)
    end
  end

  def create
    @group = current_user.organizer_groups.create(group_params)
    if @group.errors.full_messages.length < 1
      @group.user_ids = @group.user_ids.push(current_user.id)
      render '/api/groups/show', group: @group
    else
      render :error, status: 422
    end
  end

  def index
    @groups = Group.includes(:users, :organizer_users).all
    render :index
  end

  def show
    @group = Group.includes(:users, :organizer_users).find(params[:id])
    if @group
      render :show
    else
      render(json: ["Can't find group"], status: 404)
    end
  end

  def destroy
    @group = Group.find(params[:id])

    if @group.destroy
      render '/api/groups/show', group: @group
    else
      render(json: ["Can't find group"], status: 404)
    end
  end

  def update
    @group = Group.includes(:users, :organizer_users).find(params[:id])

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

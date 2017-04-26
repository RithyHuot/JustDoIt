class Api::EventsController < ApplicationController
  before_action :require_login, except: [:index, :show]

  def index

    @events = Event.includes(:users)
      .where(group_id: params[:group_id])
  
    render :index
  end

  def create
    @event = current_user.events.create(event_params)
    if @event.errors.full_messages.length < 1
      render '/api/events/show', event: @event
    else
      render :error, status: 422
    end
  end

  def show
    @event = Event.includes(:users).find(params[:id])

    if @event
      render :show
    else
      render(json: ["Can't find event"], status: 404)
    end
  end

  def destroy
    @event = Event.includes(:users).fine(params[:id])

    if @event.destroy
      render '/api/events/show', event: @event
    else
      render(json: ["Can't find event"], status: 404)
    end
  end

  def update
    @event = Event.includes(:users).find(params[:id])

    if @event.update(event_params)
      render '/api/events/show', event: @event
    else
      render :error, status: 422
    end
  end

  def adduser
    @event = Event.includes(:users).find(params[:id])
    unless @event.user_ids.include?(current_user.id)
      @event.user_ids = @event.user_ids.push(current_user.id)

      render '/api/events/show', event: @event
    else
      render(json: ["Can't find user"], status: 404)
    end
  end

  def removeuser
    @event = Event.includes(:users).find(params[:id])
    if @event.user_ids.include?(current_user.id)
      user_ids = @event.user_ids
      user_ids.delete(current_user.id)
      @event.user_ids = user_ids

      render '/api/events/show', event: @event
    else
      render(json: ["Can't find user"], status: 404)
    end
  end

  private

  def event_params
    params.require(:event).permit(:name, :group_id, :date, :description, :locaiton)
  end
end

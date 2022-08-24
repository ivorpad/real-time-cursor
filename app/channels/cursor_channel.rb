class CursorChannel < ApplicationCable::Channel
  def subscribed
    stream_from "cursor_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def update(data)
    p data
    ActionCable.server.broadcast 'cursor_channel', data
  end
end

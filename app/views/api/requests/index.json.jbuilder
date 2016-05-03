json.sent_requests do
  json.array! @sent_requests, partial: 'request', as: :request
end

json.received_requests do
  json.array! @received_requests, partial: 'request', as: :request
end

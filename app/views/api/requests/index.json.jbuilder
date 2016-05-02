
json.sent_requests do
  json.array! @sent_requests
end

json.received_requests do
  json.array! @received_requests
end

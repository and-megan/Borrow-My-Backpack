class RequestNotification < ActiveRecord::Base


  belongs_to(
  :recipient,
  primary_key: :id,
  foreign_key: :recipient_id,
  class_name: 'User'
  )

  belongs_to(
  :request,
  primary_key: :id,
  foreign_key: :request_id,
  class_name: 'Request'
  )

end

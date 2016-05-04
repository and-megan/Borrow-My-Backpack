# json.sporting_goods do
#   json.array! @sporting_goods, partial: 'sporting_good', as: :sporting_good
# end

json.array! @sporting_goods do |sporting_good|
  json.id sporting_good.id
  json.user_id sporting_good.user_id
  json.lat sporting_good.lat
  json.lng sporting_good.lng
  json.description sporting_good.description
  json.category sporting_good.category
  json.pic_url sporting_good.pic_url
end

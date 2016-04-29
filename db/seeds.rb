# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create!(
  id: 1001,
  email: "borrow@backpack.com",
  password: "password"
)
User.create!(
  id: 1002,
  email: "travel@explore.com",
  password: "password"
)



SportingGood.create!(
id: 1001,
user_id: 1001,
description: "Lime green. Seats two.",
category: "kayak",
lat: 37.769996,
lng: -122.511281,
pic_url: "unsplash.com/photos/eRQPWFijcx4"
)

SportingGood.create!(
id: 1002,
user_id: 1001,
description: "Large. It is worn, but reliable. It fits a backpacking tent, sleeping bag, and minimal cooking equipment.",
category: "backpack",
lat: 37.769996,
lng: -122.511281,
pic_url: "unsplash.com/photos/XYOOG4j9OUQ"
)

SportingGood.create!(
id: 1003,
user_id: 1002,
description: "3 years old. I can lend you boots, too.",
category: "snowboard",
lat: 37.786049,
lng: -122.481804,
pic_url: "unsplash.com/photos/pOwhy6PDorE"
)

SportingGood.create!(
id: 1004,
user_id: 1002,
description: "Rain fly included. The outermost pocket has a broken zipper, but in great shape other than that. It holds 38L. It would most comfortably fit someone between 5 foot 5 inches and 5 foot 10 inches.",
category: "backpack",
lat: 37.786049,
lng: -122.481804,
pic_url: "unsplash.com/photos/tvicgTdh7Fg"
)

SportingGood.create!(
id: 1005,
user_id: 1002,
description: "I'm out of town until September, so I'm hoping my surfboard can get a little love.",
category: "surfboard",
lat: 37.786049,
lng: -122.481804,
pic_url: "unsplash.com/photos/5rh8fzL0hI8"
)

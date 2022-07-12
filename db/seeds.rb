# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding from Yelp API"

response = RestClient.get('https://api.yelp.com/v3/businesses/search?location=NYC&categories=food', headers={"Authorization": "Bearer 1VIdemIfFsjAn_ajOM8MKMXOncUiIyOqXHkCUaZEzEstl2O759maRXmqQ4Lc_8bEqwypqZsVWrSbrXtEFWsXZbYJgkG8MqstvYBB8pyc78bOtlCswRBo9qtpMha7YnYx"})
json = JSON.parse(response)

if !json.nil?
    json["businesses"].map do |restaurant|
        Restaurant.create(
            name: "#{restaurant["name"]}", 
            address: "#{restaurant["location"]["display_address"]}", 
            image: "#{restaurant["image_url"]}", 
            price: "#{restaurant["price"]}", 
            category: "#{restaurant["categories"].first["title"]}",
            username: Faker::Internet.username,
            password: "12345"
        )
    end
    else
        puts "error"
end

puts "Seeding users"

30.times do 
    User.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        image: Faker::Avatar.image(slug: "my-own-slug", size: "500x500"),
        bio: Faker::Quote.famous_last_words,
        phone: Faker::PhoneNumber.phone_number,
        email: Faker::Internet.email,
        admin: false,
        username: Faker::Internet.username,
        password: '12345'
    )
end

100.times do 
    Worker.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        image: Faker::Avatar.image(slug: "my-own-slug", size: "500x500"),
        bio: Faker::Quote.famous_last_words,
        restaurant_id: rand(1..Restaurant.last.id)
    )
end

400.times do 
    WorkerReview.create(
        review: Faker::Quote,
        star: rand(1..5),
        user_id: rand(1..User.last.id),
        worker_id: rand(1..Worker.last.id)
    )
end

100.times do 
    RestaurantReview.create(
        review: Faker::Quote,
        star: rand(1..5),
        user_id: rand(1..User.last.id),
        restaurant_id: rand(1..Restaurant.last.id)
    )
end

puts "Seeding Done"
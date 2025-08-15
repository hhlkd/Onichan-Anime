// json data
const animeData = {
    "Slider" : [
        {
            // image url
            "image": "/Assets/Images/slider_1.jpg",
        },
        {
            "image": "/Assets/Images/slider_2.jpg",
        },
        {
            "image": "/Assets/Images/slider_3.jpg",
        },
        {
            "image": "/Assets/Images/slider_4.jpg",
        },
        {
            "image": "/Assets/Images/slider_5.jpg",
        },
        {
            "image": "/Assets/Images/slider_6.jpg",
        },
        {
            "image": "/Assets/Images/slider_7.jpg",
        },
        {
            "image": "/Assets/Images/slider_8.jpg",
        },
        {
            "image": "/Assets/Images/slider_9.jpg",
        }
        

    ],
    "Trending slider" : [
        {
            "title": "One Piece",
            "image": "/Assets/Images/Trending01.jpg",
            "score": 8.55,
            "episodes": 1000,
            "status": "Airing",
            "type": "TV"
        },
        {
            "title": "The beginning after the end",
            "image": "/Assets/Images/Trending02.jpg",
            "score": 9.12,
            "episodes": 16,
            "status": "Airing",
            "type": "TV"
        },
        {
            "title": "The sword of demon hunter : Kijin Gentosho",
            "image": "/Assets/Images/Trending03.jpg",
            "score": 8.95,
            "episodes": 11,
            "status": "Airing",
            "type": "TV"
        },
        {
            "title": "Naruto: Shippuden",
            "image": "/Assets/Images/Trending04.jpg",
            "score": 9.12,
            "episodes": 16,
            "status": "Airing",
            "type": "TV"
        },
        {
            "title": "The Unaware Atelier Master",
            "image": "/Assets/Images/Trending05.jpg",
            "score": 8.88,
            "episodes": 24,
            "status": "Airing",
            "type": "TV"
        },
        {
            "title": "From Old Country Bumpkin to Master Swordsman",
            "image": "/Assets/Images/Trending06.jpg",
            "score": 9.12,
            "episodes": 16,
            "status": "Airing",
            "type": "TV"
        },
        {
            "title": "The Children of Shiunji Family",
            "image": "/Assets/Images/Trending07.jpg",
            "score": 8.95,
            "episodes": 11,
            "status": "Airing",
            "type": "TV"
        },
        {
            "title": "Please Put Them On, Takamine-san",
            "image": "/Assets/Images/Trending08.jpg",
            "score": 9.12,
            "episodes": 16,
            "status": "Airing",
            "type": "TV"
        },
        {
            "title": "Wind Breaker",
            "image": "/Assets/Images/Trending09.jpg",
            "score": 8.88,
            "episodes": 24,
            "status": "Airing",
            "type": "TV"
        }
    ],
    "Top Airing " : [
        {
            "title": "One Piece",
            "image": "/Assets/Images/Trending01.jpg",
            "score": 8.88,
            "episodes": 24,
            "status": "Airing",
            "type": "TV"
        },
        {
            "title": "Sakamoto Days",
            "image": "/Assets/Images/Sakamoto.jpg",
            "score": 8.66,
            "episodes": 12,
            "status": "Airing",
            "type": "TV"
        },
        {
            "title": "Wind Breaker",
            "image": "/Assets/Images/Trending09.jpg",
            "score": 8.45,
            "episodes": 24,
            "status": "Airing",
            "type": "TV"
        }
    ],
    "Most Popular" : [
        {
            "title": "One Piece",
            "image": "/Assets/Images/Trending01.jpg",
            "score": 9.12,
            "episodes": 16,
            "status": "Airing",
            "type": "TV"
        },
        {
            "title": "Naruto: Shippuden",
            "image": "/Assets/Images/Trending04.jpg",
            "score": 8.95,
            "episodes": 11,
            "status": "Airing",
            "type": "TV"
        },
        {
            "title": "Bleach: Thousand-Year Blood War",
            "image": "/Assets/Images/Bleach.jpg",
            "score": 8.78,
            "episodes": 25,
            "status": "Airing",
            "type": "TV"
        }
    ],
    "Most Favorited" : [
        {
            "title": "One Piece",
            "image": "/Assets/Images/Trending01.jpg",
            "score": 9.25,
            "episodes": 64,
            "status": "Finished Airing",
            "type": "TV"
        },
        {
            "title": "Jujutsu Kaisen",
            "image": "/Assets/Images/jujutsu_kaisen.jpg",
            "score": 9.17,
            "episodes": 24,
            "status": "Finished Airing",
            "type": "TV"
        },
        {
            "title": "Demon Slayer",
            "image": "/Assets/Images/demon_slayer.png",
            "score": 8.98,
            "episodes": 37,
            "status": "Finished Airing",
            "type": "TV"
        }
    ],
    "Most Completed" : [
        {
            "title": "Attack on Titan",
            "image": "/Assets/Images/attack_on_titan.jpg",
            "score": 8.65,
            "episodes": 500,
            "status": "Finished Airing",
            "type": "TV"
        },
        {
            "title": "The Unaware Atelier Master",
            "image": "/Assets/Images/Trending05.jpg",
            "score": 8.55,
            "episodes": 1000,
            "status": "Airing",
            "type": "TV"
        },
        {
            "title": "Fureru",
            "image": "/Assets/Images/Fureru.jpg",
            "score": 8.75,
            "episodes": 52,
            "status": "Airing",
            "type": "TV"
        }
    ],
    "Last Episodes" : [
        {
      "title": "Tales of herding gods",
      "image": "/Assets/Images/tales_of_herding_gods.jpg",
      "score": 8.88,
      "episodes": 24,
      "status": "Airing",
      "type": "TV",
      "updated": new Date().toISOString().split('T')[0] // Today's date
    },
    {
      "title": "To be hero X",
      "image": "/Assets/Images/to_be_hero_X.jpg",
      "score": 8.66,
      "episodes": 12,
      "status": "Airing",
      "type": "TV",
      "updated": new Date(Date.now() - 86400000).toISOString().split('T')[0] // Yesterday
    },
    {
      "title": "Wind Breaker",
      "image": "/Assets/Images/Trending09.jpg",
      "score": 8.45,
      "episodes": 24,
      "status": "Airing",
      "type": "TV",
      "updated": new Date(Date.now() - 86400000 * 2).toISOString().split('T')[0] // 2 days ago
    },
    {
      "title": "The Beginning After the End",
      "image": "/Assets/Images/Trending02.jpg",
      "score": 9.12,
      "episodes": 16,
      "status": "Airing",
      "type": "TV",
      "updated": new Date(Date.now() - 86400000 * 3).toISOString().split('T')[0] // 3 days ago
    },
    {
      "title": "Uma Musume",
      "image": "/Assets/Images/uma_musume.jpg",
      "score": 8.95,
      "episodes": 11,
      "status": "Airing",
      "type": "TV",
      "updated": new Date(Date.now() - 86400000 * 4).toISOString().split('T')[0] // 4 days ago
    },
    {
      "title": "Embers",
      "image": "/Assets/Images/embers.jpg",
      "score": 8.78,
      "episodes": 25,
      "status": "Airing",
      "type": "TV",
      "updated": new Date(Date.now() - 86400000 * 5).toISOString().split('T')[0] // 5 days ago
    },
    {
      "title": "The Sword of Demon Hunter: Kijin Gentosho",
      "image": "/Assets/Images/Trending03.jpg",
      "score": 8.88,
      "episodes": 24,
      "status": "Airing",
      "type": "TV",
      "updated": new Date(Date.now() - 86400000 * 6).toISOString().split('T')[0] // 6 days ago
    },
    {
      "title": "The Children of Shiunji Family",
      "image": "/Assets/Images/Trending07.jpg",
      "score": 8.95,
      "episodes": 11,
      "status": "Airing",
      "type": "TV",
      "updated": new Date(Date.now() - 86400000 * 7).toISOString().split('T')[0] // 1 week ago
    },
    {
      "title": "Please Put Them On, Takamine-san",
      "image": "/Assets/Images/Trending08.jpg",
      "score": 9.12,
      "episodes": 16,
      "status": "Airing",
      "type": "TV",
      "updated": new Date(Date.now() - 86400000 * 10).toISOString().split('T')[0] // 10 days ago
    },
    {
      "title": "Lingwu Continent",
      "image": "/Assets/Images/Lingwu_continent.jpg",
      "score": 8.88,
      "episodes": 24,
      "status": "Airing",
      "type": "TV",
      "updated": new Date(Date.now() - 86400000 * 14).toISOString().split('T')[0] // 2 weeks ago
    },
    {
      "title": "From Old Country Bumpkin to Master Swordsman",
      "image": "/Assets/Images/Trending06.jpg",
      "score": 8.88,
      "episodes": 24,
      "status": "Airing",
      "type": "TV",
      "updated": new Date(Date.now() - 86400000 * 21).toISOString().split('T')[0] // 3 weeks ago
    },
    {
      "title": "Beyblade X",
      "image": "/Assets/Images/beyblade_x.png",
      "score": 8.95,
      "episodes": 11,
      "status": "Airing",
      "type": "TV",
      "updated": new Date(Date.now() - 86400000 * 28).toISOString().split('T')[0] // 4 weeks ago
    },
    {
      "title": "Fire Force",
      "image": "/Assets/Images/fire_force.jpg",
      "score": 9.12,
      "episodes": 16,
      "status": "Airing",
      "type": "TV",
      "updated": new Date(Date.now() - 86400000 * 35).toISOString().split('T')[0] // 5 weeks ago
    },
    {
      "title": "Can boy and girl friendship hold up",
      "image": "/Assets/Images/can_boy_and_girl_friendship.jpg",
      "score": 8.88,
      "episodes": 24,
      "status": "Airing",
      "type": "TV",
      "updated": new Date(Date.now() - 86400000 * 42).toISOString().split('T')[0] // 6 weeks ago
    },
    {
      "title": "The Brillian healer",
      "image": "/Assets/Images/The_brillian_healer.jpg",
      "score": 8.95,
      "episodes": 11,
      "status": "Airing",
      "type": "TV",
      "updated": new Date(Date.now() - 86400000 * 49).toISOString().split('T')[0] // 7 weeks ago
    },
    {
      "title": "Yu-Gi-Oh! Cards Game",
      "image": "/Assets/Images/Yu_Gi_oh_cardgame.jpg",
      "score": 8.78,
      "episodes": 25,
      "status": "Airing",
      "type": "TV",
      "updated": new Date(Date.now() - 86400000 * 56).toISOString().split('T')[0] // 8 weeks ago
    },
    {
      "title": "Samurai 7",
      "image": "/Assets/Images/samurai_7.jpg",
      "score": 8.78,
      "episodes": 25,
      "status": "Airing",
      "type": "TV",
      "updated": new Date(Date.now() - 86400000 * 63).toISOString().split('T')[0] // 9 weeks ago
    }

    ]
}
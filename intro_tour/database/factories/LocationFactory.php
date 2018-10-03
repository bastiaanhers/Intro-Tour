<?php

use Faker\Generator as Faker;

$factory->define(App\Location::class, function (Faker $faker) {
    return [
        'name' => str_random(10),
        'description' => str_random(20),
        'radius' => [
            "type" => "circle",
            "data" => 12
        ],
        'longitude' => 51,
        'latitude' => 4
    ];
});

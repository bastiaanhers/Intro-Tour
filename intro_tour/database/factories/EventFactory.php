<?php

use Faker\Generator as Faker;

$factory->define(App\Event::class, function (Faker $faker) {
    return [
        'trigger' => [
            "type" => "location",
            "data" => [
                "location_id" => $faker->randomElement([1, 2])
            ]
        ],
        'action' => [
            "type" => "question",
            "data" => [
                "question_id" => $faker->randomElement([1, 2, 3])
            ]
        ]
    ];
});

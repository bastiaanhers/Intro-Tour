<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user')->insert
        ([
            [
            'name' => "henk",
            'team_id' => 1,
            'role' => "master",
            ],[
            'name' => "harry",
            'team_id' => 1,
            'role' => "peasants",
            ],[
            'name' => "yea",
            'team_id' => 2,
            'role' => "master",
            ],[
            'name' => "boi",
            'team_id' => 2,
            'role' => "peasants",
            ]
        ]);
        
        DB::table('teams')->insert
        ([
            [
            'team_name' => "team1",
            'tour_id' => 1,
            ],[
            'team_name' => "team2",
            'tour_id' => 1,
            ]
        ]);

        DB::table('admins')->insert
        ([
            [
            'username' => "NekoBot",
            'password' => "$2y$12\$hmcfHQzfFLZtVXfdGqQ6Z.PI7C395xWux0CJWtFvHeTJiCufdpxCe",
            ],[
            'username' => "KeemStar",
            'password' => "$2y$12\$hmcfHQzfFLZtVXfdGqQ6Z.PI7C395xWux0CJWtFvHeTJiCufdpxCe",
            ]
        ]);
        DB::table('admin_tour')->insert
        ([
            [
            'admin_id' => 1,
            'tour_id' => 1,
            ],[
            'admin_id' => 2,
            'tour_id' => 1,
            ]
        ]);
    }
}

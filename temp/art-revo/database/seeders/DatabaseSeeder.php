<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Admin',
            'email' => 'a',
            'password' => bcrypt('A'),
        ]);
        $this->call(CategorySeeder::class);

        // \App\Models\User::factory(10)->create();
    }
}

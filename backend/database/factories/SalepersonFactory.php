<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Person;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Saleperson>
 */
class SalepersonFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'person_id'=> function () {
                Person::factory(1)->create();
                return Person::orderBy('id', 'desc')->first()->id;
            },
        ];
    }
}

<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Image>
 */
class ImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public static $counter = 0;

    public function definition(): array
    {
        $i = $this::$counter += 1;

        //$faker = \Faker\Factory::create();
        //$faker->addProvider(new \Smknstd\FakerPicsumImages\FakerPicsumImagesProvider($faker));

        return [
            'title'=> $this->faker->sentence(1,6),
            'picture_jpg' => file_get_contents($this->faker->imageUrl(360, 360, 'beauty', true, 'makeup', true, 'jpg')),
            'picture_webp'=> file_get_contents($this->faker->imageUrl(360, 360, 'beauty', true, 'makeup', true, 'jpg')),
            /*
             'picture_jpg' => file_get_contents($faker->imageUrl(360, 360, null, true, false, null, 'jpg')),
            'picture_webp'=> file_get_contents($faker->imageUrl(360, 360, null, true, false, null, 'webp')),
            */
            'product_id' => $i,
            //'treatment_id',
            //'category_id'
        ];
    }
}

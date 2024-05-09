<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\PersonController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\AddressController;
use App\Http\Controllers\API\ImageController;
use App\Http\Controllers\API\PriceController;
use App\Http\Controllers\API\TreatmentController;
use App\Http\Controllers\API\SalepersonController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\ProductVariationController;
use App\Http\Controllers\API\UserTreatmentController;
use App\Http\Controllers\API\AppointmentController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\OrderController;
use App\Http\Controllers\API\MailController;

use App\Mail\Contact;



Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::prefix('person')->group(function () {
    Route::get('/',[ PersonController::class, 'getAll']);
    Route::get('/email/{email}',[ PersonController::class, 'getByEmail']);
    Route::post('/',[ PersonController::class, 'create']);
    Route::delete('/{id}',[ PersonController::class, 'delete']);
    Route::get('/{id}',[ PersonController::class, 'get']);
    Route::put('/{id}',[ PersonController::class, 'update']);
});

Route::prefix('user')->group(function () {
    Route::get('/',[ UserController::class, 'getAll']);
    Route::post('/login',[ UserController::class, 'getLogin']);
    Route::get('/{id}',[ UserController::class, 'getById']);
    Route::post('/',[ UserController::class, 'create']);
    Route::delete('/{id}',[ UserController::class, 'delete']);
    Route::put('/{id}',[ UserController::class, 'update']);
});

Route::prefix('address')->group(function () {
    Route::get('/',[ AddressController::class, 'getAll']);
    Route::get('/user/{idUser}',[ AddressController::class, 'getByIdUser']);
    Route::post('/',[ AddressController::class, 'create']);
    Route::delete('/{id}',[ AddressController::class, 'delete']);
    Route::get('/{id}',[ AddressController::class, 'get']);
    Route::put('/{id}',[ AddressController::class, 'update']);
});

Route::prefix('order')->group(function () {
    Route::get('/',[ OrderController::class, 'getAll']);
    Route::get('/user/{user}',[ OrderController::class, 'getByIdUser']);
    Route::post('/',[ OrderController::class, 'create']);
    Route::delete('/{id}',[ OrderController::class, 'delete']);
    Route::get('/{id}',[ OrderController::class, 'get']);
    Route::put('/{id}',[ OrderController::class, 'update']);
});

Route::prefix('appointment')->group(function () {
    Route::get('/',[ AppointmentController::class, 'getAll']);
    Route::get('/user/{user}',[ AppointmentController::class, 'getByUserId']);
    Route::post('/',[ AppointmentController::class, 'create']);
    Route::delete('/{id}',[ AppointmentController::class, 'delete']);
    Route::get('/{id}',[ AppointmentController::class, 'get']);
    Route::put('/{id}',[ AppointmentController::class, 'update']);
});

Route::prefix('user_treatment')->group(function () {
    Route::get('/',[ UserTreatmentController::class, 'getAll']);
    Route::get('/user/{user}',[ UserTreatmentController::class, 'getByUserId']);
    Route::post('/',[ UserTreatmentController::class, 'create']);
    Route::delete('/{id}',[ UserTreatmentController::class, 'delete']);
    Route::get('/{id}',[ UserTreatmentController::class, 'get']);
    Route::put('/{id}',[ UserTreatmentController::class, 'update']);
});






Route::prefix('category')->group(function () {
    Route::get('/',[ CategoryController::class, 'getAll']);
    Route::get('/department/{department}',[ CategoryController::class, 'getByDepartment']);
    Route::get('/categories/{url}',[ CategoryController::class, 'getByCategoriesByUrl']);
    Route::get('/category/{url}',[ CategoryController::class, 'getCategoryByUrl']);
    Route::get('/name/{url}',[ CategoryController::class, 'getCategoryNamebyUrl']);
    Route::get('/{id}',[ CategoryController::class, 'getCategoryById']);
    Route::post('/',[ CategoryController::class, 'create']);
    Route::delete('/{id}',[ CategoryController::class, 'delete']);
    Route::put('/{id}',[ CategoryController::class, 'update']);
});

Route::prefix('treatment')->group(function () {
    Route::get('/',[ TreatmentController::class, 'getAll']);
    Route::get('/treatment/{url}',[ TreatmentController::class, 'getTratmentByUrl']);
    Route::post('/',[ TreatmentController::class, 'create']);
    Route::delete('/{id}',[ TreatmentController::class, 'delete']);
    Route::get('/{id}',[ TreatmentController::class, 'getTreatmentById']);
    Route::put('/{id}',[ TreatmentController::class, 'update']);
});


Route::prefix('product')->group(function () {
    Route::get('/',[ ProductController::class, 'getAll']);
    Route::get('/trend',[ ProductController::class, 'getInTrend']);
    Route::get('/offer',[ ProductController::class, 'getInOffer']);
    Route::get('/forsale',[ ProductController::class, 'getForSale']);
    Route::get('/forsale/{id}',[ ProductController::class, 'getProductForSale']);
    Route::get('/new/{quantity}',[ ProductController::class, 'getNewProducts']);
    Route::get('/category/{id}',[ ProductController::class, 'getProductsByCategory']);
    Route::get('/{id}',[ ProductController::class, 'getProduct']);
    Route::post('/',[ ProductController::class, 'create']);
    Route::delete('/{id}',[ ProductController::class, 'delete']);
    Route::put('/{id}',[ ProductController::class, 'update']);
});

Route::prefix('product_variation')->group(function () {
    Route::get('/',[ ProductVariationController::class, 'getAll']);
    Route::post('/',[ ProductVariationController::class, 'create']);
    Route::delete('/{id}',[ ProductVariationController::class, 'delete']);
    Route::get('/{id}',[ ProductVariationController::class, 'get']);
    Route::put('/{id}',[ ProductVariationController::class, 'update']);
});



Route::prefix('image')->group(function () {
    Route::get('/',[ ImageController::class, 'getAll']);
    Route::get('/product/{product_id}',[ ImageController::class, 'getByProduct']);
    Route::get('/treatment/{treatment_id}',[ ImageController::class, 'getByTreatment']);
    Route::get('/category/{category_id}',[ ImageController::class, 'getByCategory']);
    Route::post('/',[ ImageController::class, 'create']);
    Route::delete('/{id}',[ ImageController::class, 'delete']);
    Route::get('/{id}',[ ImageController::class, 'get']);
    Route::put('/{id}',[ ImageController::class, 'update']);
});


Route::prefix('price')->group(function () {
    Route::get('/',[ PriceController::class, 'getAll']);
    Route::post('/',[ PriceController::class, 'create']);
    Route::delete('/{id}',[ PriceController::class, 'delete']);
    Route::get('/{id}',[ PriceController::class, 'get']);
    Route::put('/{id}',[ PriceController::class, 'update']);
});



Route::prefix('salperson')->group(function () {
    Route::get('/',[ SalepersonController::class, 'getAll']);
    Route::post('/',[ SalepersonController::class, 'create']);
    Route::delete('/{id}',[ SalepersonController::class, 'delete']);
    Route::get('/{id}',[ SalepersonController::class, 'get']);
    Route::put('/{id}',[ SalepersonController::class, 'update']);
});











Route::prefix('mail')->group(function () {
    Route::post('/',[ MailController::class, 'send']);
});
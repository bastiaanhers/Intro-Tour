<?php

use Illuminate\Http\Request;
use App\Participant;
use App\Admin;
use App\Tour;
use App\Team;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

/* Auth */
// Route::group([
//     'prefix' => 'auth'
// ], function () {
//     Route::post('login', 'AuthController@login');
//     Route::post('signup', 'AuthController@signup');
  
//     Route::group([
//       'middleware' => 'auth:api'
//     ], function() {
//         Route::get('logout', 'AuthController@logout');
//         Route::get('user', 'AuthController@user');
//     });
// });

/* Participants routes */
Route::get('participants', 'ParticipantController@index');
Route::get('participants/{id}', 'ParticipantController@show');
Route::post('participants', 'ParticipantController@store');
Route::put('participants/{id}', 'ParticipantController@update');
Route::delete('participants/{id}', 'ParticipantController@delete');

/* Admins */
Route::get('admins', 'AdminController@index');
Route::get('admins/{id}', 'AdminController@show');
Route::post('admins', 'AdminController@store');
Route::put('admins/{id}', 'AdminController@update');
Route::delete('admins/{id}', 'AdminController@delete');

/* Tours */
Route::get('tours', 'TourController@index');
Route::get('tours/{id}', 'TourController@show');
Route::post('tours', 'TourController@store');
Route::put('tours/{id}', 'TourController@update');
Route::delete('tours/{id}', 'TourController@delete');

/* Teams */
Route::get('teams', 'TeamController@index');
Route::get('teams/{id}', 'TeamController@show');
Route::post('teams', 'TeamController@store');
Route::put('teams/{id}', 'TeamController@update');
Route::delete('teams/{id}', 'TeamController@delete');

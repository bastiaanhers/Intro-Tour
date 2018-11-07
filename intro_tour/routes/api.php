<?php

use Illuminate\Http\Request;
use App\Participant;
use App\Admin;
use App\Tour;
use App\Team;
use App\Event;
use App\Location;
use App\Question;

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
Route::get('participants/{participant}', 'ParticipantController@show');
Route::post('participants', 'ParticipantController@store');
Route::put('participants/{participant}', 'ParticipantController@update');
Route::delete('participants/{participant}', 'ParticipantController@delete');

/* Admins */
Route::get('admins', 'AdminController@index');
Route::get('admins/{admin}', 'AdminController@show');
Route::post('admins', 'AdminController@store');
Route::put('admins/{admin}', 'AdminController@update');
Route::delete('admins/{admin}', 'AdminController@delete');

/* Tours */
Route::get('tours', 'TourController@index');
Route::get('tours/{tour}', 'TourController@show');
Route::post('tours', 'TourController@store');
Route::put('tours/{tour}', 'TourController@update');
Route::delete('tours/{tour}', 'TourController@delete');

/* Teams */
Route::get('teams', 'TeamController@index');
Route::get('teams/{team}', 'TeamController@show');
Route::post('teams', 'TeamController@store');
Route::put('teams/{team}', 'TeamController@update');
Route::delete('teams/{team}', 'TeamController@delete');

/* Events */
Route::get('events', 'EventController@index');

/* locations */
Route::get('locations', 'LocationController@index');
Route::get('locations/{id}', 'LocationController@show');

/* questions */
Route::get('questions/{id}', 'QuestionController@show');

/*File Upload*/
Route::get('mediafile/{id}', 'MediaFileController@show');
Route::post('mediafileupload', 'MediaFileController@store');

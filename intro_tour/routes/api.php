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
Route::get('participants', function() {
    // If the Content-Type and Accept headers are set to 'application/json', 
    // this will return a JSON structure. This will be cleaned up later.
    return Participant::all();
});
 
Route::get('participants/{id}', function($id) {
    return Participant::find($id);
});

Route::post('participants', function(Request $request) {
    return Participant::create($request->all());
});

Route::put('participants/{id}', function(Request $request, $id) {
    $participant = Participant::findOrFail($id);
    $participant->update($request->all());

    return $participant;
});

Route::delete('participants/{id}', function($id) {
    Participant::find($id)->delete();

    return 204;
});

/* Admins */
Route::get('admins', function() {
    // If the Content-Type and Accept headers are set to 'application/json', 
    // this will return a JSON structure. This will be cleaned up later.
    return Admin::all();
});
 
Route::get('admins/{id}', function($id) {
    return Admin::find($id);
});

Route::post('admins', function(Request $request) {
    return Admin::create($request->all);
});

Route::put('admins/{id}', function(Request $request, $id) {
    $admin = Admin::findOrFail($id);
    $admin->update($request->all());

    return $admin;
});

Route::delete('admins/{id}', function($id) {
    Admin::find($id)->delete();

    return 204;
});

/* Tours */
Route::get('tours', function() {
    // If the Content-Type and Accept headers are set to 'application/json', 
    // this will return a JSON structure. This will be cleaned up later.
    return Tour::all();
});
 
Route::get('tours/{id}', function($id) {
    return Tour::find($id);
});

Route::post('tours', function(Request $request) {
    return Tour::create($request->all());
});

Route::put('tours/{id}', function(Request $request, $id) {
    $tour = Tour::findOrFail($id);
    $tour->update($request->all());

    return $tour;
});

Route::delete('tours/{id}', function($id) {
    Tour::find($id)->delete();

    return 204;
});

/* Teams */
Route::get('teams', function() {
    // If the Content-Type and Accept headers are set to 'application/json', 
    // this will return a JSON structure. This will be cleaned up later.
    return Team::all();
});
 
Route::get('teams/{id}', function($id) {
    return Team::find($id);
});

Route::post('teams', function(Request $request) {
    return Team::create($request->all());
});

Route::put('teams/{id}', function(Request $request, $id) {
    $team = Team::findOrFail($id);
    $team->update($request->all());

    return $team;
});

Route::delete('teams/{id}', function($id) {
    Team::find($id)->delete();

    return 204;
});
<?php

use Illuminate\Http\Request;
use App\Participant;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('participants', function() {
    // If the Content-Type and Accept headers are set to 'application/json', 
    // this will return a JSON structure. This will be cleaned up later.
    return Participant::all();
});
 
Route::get('participants/{id}', function($id) {
    return Participant::find($id);
});

Route::post('participants', function(Request $request) {
    return Participant::create($request->all);
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
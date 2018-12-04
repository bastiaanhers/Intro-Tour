<?php

namespace App\Http\Controllers;

use App\Admin;
use Illuminate\Http\Request;
use App\tour_admin;
use App\Tour;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Admin::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $admin = Admin::create($request->all());

        return response()->json($admin, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function show(Admin $admin)
    {
        return $admin;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Admin $admin)
    {
        $admin->update($request->all());

        return response()->json($admin, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function delete(Admin $admin)
    {
        $admin->delete();

        return response()->json(null, 204);
    }
    
    public function gettours($id){
        $tourIds = [];
        $tourAdmin = tour_admin::with('tour')->with('admin')->where('admin_id', '=', $id)->get();

        foreach ($tourAdmin as $tourId) {
            $tourInfo = Tour::where('tour_code', '=', $tourId['tour_id'])->get();
            array_push($tourIds, $tourInfo);    
        }

        return $tourIds;
    }
}

<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

Use App\Models\Appointment;
Use Log;

class AppointmentController extends Controller {

    public function getAll(){
        $data = Appointment::get();
        return response()->json($data, 200);
    }

    public function create(Request $request){
        $data['date'] = $request['date'];
        $data['state'] = $request['state'];
        $data['user_treatment_id'] = $request['user_treatment_id'];
        Appointment::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
    }

    public function delete($id){
        $res = Appointment::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
    }

    public function get($id){
      $data = Appointment::find($id);
      return response()->json($data, 200);
    }

    public function update(Request $request,$id){
        $data['date'] = $request['date'];
        $data['state'] = $request['state'];
        $data['user_treatment_id'] = $request['user_treatment_id'];
        Appointment::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
    }
}

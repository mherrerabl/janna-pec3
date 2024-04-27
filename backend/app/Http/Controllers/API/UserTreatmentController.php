<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\UserTreatment;
Use Log;

class UserTreatmentController extends Controller {

    public function getAll(){
        $data = UserTreatment::get();
        return response()->json($data, 200);
    }

    public function create(Request $request){
        $data['user_id'] = $request['user_id'];
        $data['state'] = $request['state'];
        $data['sessions'] = $request['sessions'];
        $data['category_id'] = $request['category_id'];
        $data['treatment_id'] = $request['treatment_id'];
        UserTreatment::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
    }

    public function delete($id){
        $res = UserTreatment::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
    }

    public function get($id){
      $data = UserTreatment::find($id);
      return response()->json($data, 200);
    }

    public function update(Request $request,$id){
        $data['user_id'] = $request['user_id'];
        $data['state'] = $request['state'];
        $data['sessions'] = $request['sessions'];
        $data['category_id'] = $request['category_id'];
        $data['treatment_id'] = $request['treatment_id'];
        UserTreatment::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
    }
}

<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

Use App\Models\Treatment;
Use Log;

class TreatmentController extends Controller {

    public function getAll(){
        $data = Treatment::get();
        return response()->json($data, 200);
    }

    public function create(Request $request){
        $data['name'] = $request['name'];
        $data['description'] = $request['description'];
        $data['sessions'] = $request['sessions'];
        $data['duration'] = $request['duration'];
        $data['price_id'] = $request['price_id'];
        Treatment::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
    }

    public function delete($id){
        $res = Treatment::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
    }

    public function get($id){
      $data = Treatment::find($id);
      return response()->json($data, 200);
    }

    public function update(Request $request,$id){
        $data['name'] = $request['name'];
        $data['description'] = $request['description'];
        $data['sessions'] = $request['sessions'];
        $data['duration'] = $request['duration'];
        $data['price_id'] = $request['price_id'];
        Treatment::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
    }
}

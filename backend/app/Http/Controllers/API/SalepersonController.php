<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

Use App\Models\Saleperson;
Use Log;

class SalepersonController extends Controller {

    public function getAll(){
        $data = Saleperson::get();
        return response()->json($data, 200);
    }

    public function create(Request $request){
        $data['person_id'] = $request['person_id'];
        Saleperson::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
    }

    public function delete($id){
        $res = Saleperson::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
    }

    public function get($id){
      $data = Saleperson::find($id);
      return response()->json($data, 200);
    }

    public function update(Request $request,$id){
        $data['person_id'] = $request['person_id'];
        Saleperson::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
    }
}

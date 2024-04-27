<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

Use App\Models\Order;
Use Log;

class OrderController extends Controller {

    public function getAll(){
        $data = Order::get();
        return response()->json($data, 200);
    }

    public function create(Request $request){
        $data['user_id'] = $request['user_id'];
        $data['total_price'] = $request['total_price'];
        $data['state'] = $request['state'];
        $data['modification_date'] = $request['modification_date'];
        Order::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
    }

    public function delete($id){
        $res = Order::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
    }

    public function get($id){
      $data = Order::find($id);
      return response()->json($data, 200);
    }

    public function update(Request $request,$id){
        $data['user_id'] = $request['user_id'];
        $data['total_price'] = $request['total_price'];
        $data['state'] = $request['state'];
        $data['modification_date'] = $request['modification_date'];
        Order::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
    }
}

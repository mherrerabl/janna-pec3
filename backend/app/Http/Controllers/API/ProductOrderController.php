<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


Use App\Models\ProductOrder;
Use Log;

class ProductOrderController extends Controller {

    public function getAll(){
        $data = ProductOrder::get();
        return response()->json($data, 200);
    }

    public function create(Request $request){
        $data['sate'] = $request['state'];
        $data['product_id'] = $request['product_id'];
        $data['price_id'] = $request['price_id'];
        $data['order_id'] = $request['order_id'];
        ProductOrder::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
    }

    public function delete($id){
        $res = ProductOrder::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
    }

    public function get($id){
      $data = ProductOrder::find($id);
      return response()->json($data, 200);
    }

    public function update(Request $request,$id){
        $data['sate'] = $request['state'];
        $data['product_id'] = $request['product_id'];
        $data['price_id'] = $request['price_id'];
        $data['order_id'] = $request['order_id'];
        ProductOrder::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
    }
}

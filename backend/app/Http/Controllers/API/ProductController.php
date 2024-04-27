<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

Use App\Models\Product;
Use Log;

class ProductController extends Controller {

    public function getAll(){
        $data = Product::get();
        return response()->json($data, 200);
    }

    public function create(Request $request){
        $data['name'] = $request['name'];
        $data['brand'] = $request['brand'];
        $data['category_id'] = $request['category_id'];
        $data['description'] = $request['description'];
        $data['routine'] = $request['routine'];
        $data['use'] = $request['use'];
        $data['benefits'] = $request['benefits'];
        $data['saleperson_id'] = $request['saleperson_id'];
        $data['stock'] = $request['stock'];
        $data['price_id'] = $request['price_id'];
        $data['purchasePrice'] = $request['purchasePrice'];
        $data['trend'] = $request['trend'];
        $data['forSale'] = $request['forSale'];
        $data['treatment_id'] = $request['treatment_id'];
        Product::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
    }

    public function delete($id){
        $res = Product::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
    }

    public function get($id){
      $data = Product::find($id);
      return response()->json($data, 200);
    }

    public function update(Request $request,$id){
        $data['name'] = $request['name'];
        $data['brand'] = $request['brand'];
        $data['category_id'] = $request['category_id'];
        $data['description'] = $request['description'];
        $data['routine'] = $request['routine'];
        $data['use'] = $request['use'];
        $data['benefits'] = $request['benefits'];
        $data['saleperson_id'] = $request['saleperson_id'];
        $data['stock'] = $request['stock'];
        $data['price_id'] = $request['price_id'];
        $data['purchasePrice'] = $request['purchasePrice'];
        $data['trend'] = $request['trend'];
        $data['forSale'] = $request['forSale'];
        $data['treatment_id'] = $request['treatment_id'];
        Product::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
    }
}

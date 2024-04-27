<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


Use App\Models\Image;
Use Log;

class ImageController extends Controller {

    public function getAll(){
        $data = Image::get();
        return response()->json($data, 200);
    }

    public function create(Request $request){
        $data['title'] = $request['title'];
        $data['picture_jpg'] = $request['picture_jpg'];
        $data['picture_webp'] = $request['picture_webp'];
        $data['product_id'] = $request['product_id'];
        $data['treatment_id'] = $request['treatment_id'];
        $data['category_id'] = $request['category_id'];
        Image::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
    }

    public function delete($id){
        $res = Image::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
    }

    public function get($id){
      $data = Image::find($id);
      return response()->json($data, 200);
    }

    public function update(Request $request,$id){
        $data['title'] = $request['title'];
        $data['picture_jpg'] = $request['picture_jpg'];
        $data['picture_webp'] = $request['picture_webp'];
        $data['product_id'] = $request['product_id'];
        $data['treatment_id'] = $request['treatment_id'];
        $data['category_id'] = $request['category_id'];
        Image::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
    }
}
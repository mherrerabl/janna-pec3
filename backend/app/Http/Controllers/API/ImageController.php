<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


Use App\Models\Image;

Use Log;

class ImageController extends Controller {

    public function getAll(){
        $data = Image::get();
        $newData = [];

        for ($i=0; $i < count($data); $i++) { 
            $newData[$i]['id'] = $data[$i]['id'];
            $newData[$i]['title'] = $data[$i]['title'];
            $newData[$i]['picture_jpg'] = utf8_encode($data[$i]['picture_jpg']);
            $newData[$i]['picture_webp'] = utf8_encode($data[$i]['picture_webp']);
            $newData[$i]['product_id'] = $data[$i]['product_id'];
            $newData[$i]['treatment_id'] = $data[$i]['treatment_id'];
            $newData[$i]['category_id'] = $data[$i]['category_id'];            
        }
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function getByProduct($product_id){
        $data = Image::get()->where('product_id', $product_id)->get();
        $newData = [];

        for ($i=0; $i < count($data); $i++) { 
            $newData[$i]['id'] = $data[$i]['id'];
            $newData[$i]['title'] = $data[$i]['title'];
            $newData[$i]['picture_jpg'] = utf8_encode($data[$i]['picture_jpg']);
            $newData[$i]['picture_webp'] = utf8_encode($data[$i]['picture_webp']);
            $newData[$i]['product_id'] = $data[$i]['product_id'];
            $newData[$i]['treatment_id'] = $data[$i]['treatment_id'];
            $newData[$i]['category_id'] = $data[$i]['category_id'];            
        }
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function getByTreatment($treatment_id){
        $data = Image::where('treatment_id', $treatment_id)->get();
        $newData = [];

        for ($i=0; $i < count($data); $i++) { 
            $newData[$i]['id'] = $data[$i]['id'];
            $newData[$i]['title'] = $data[$i]['title'];
            $newData[$i]['picture_jpg'] = utf8_encode($data[$i]['picture_jpg']);
            $newData[$i]['picture_webp'] = utf8_encode($data[$i]['picture_webp']);
            $newData[$i]['product_id'] = $data[$i]['product_id'];
            $newData[$i]['treatment_id'] = $data[$i]['treatment_id'];
            $newData[$i]['category_id'] = $data[$i]['category_id'];            
        }
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }
    public function getByCategory($category_id){
        $data = Image::where('category_id', $category_id)->get()[0];
        $newData = [];

            $newData['id'] = $data['id'];
            $newData['title'] = $data['title'];
            $newData['picture_jpg'] = utf8_encode($data['picture_jpg']);
            $newData['picture_webp'] = utf8_encode($data['picture_webp']);
            $newData['product_id'] = $data['product_id'];
            $newData['treatment_id'] = $data['treatment_id'];
            $newData['category_id'] = $data['category_id'];            
            
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
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

      $newData['id'] = $data['id'];
      $newData['title'] = $data['title'];
      $newData['picture_jpg'] = utf8_encode($data['picture_jpg']);
      $newData['picture_webp'] = utf8_encode($data['picture_webp']);
      $newData['product_id'] = $data['product_id'];
      $newData['treatment_id'] = $data['treatment_id'];
      $newData['category_id'] = $data['category_id'];

      return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
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
<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

Use App\Models\Treatment;
Use App\Models\Price;
Use App\Models\Category;
Use App\Models\Image;
Use Log;

class TreatmentController extends Controller {

    public function getAll(){
        $data = Treatment::get();
        return response()->json($data, 200);
    }

    public function getTreatmentById($id) {
        $data = Treatment::where('id', $id)->get()[0];
        $newData = [];

        $img = Image::where('treatment_id', $data['id'])->get();


        $newData['id'] = $data['id'];
        $newData['name'] = $data['name'];
        $newData['description'] = $data['description'];
        $newData['sessions'] = $data['sessions'];
        $newData['duration'] = $data['duration'];
        $newData['price_id'] = $data['price_id'];
        $newData['price'] = Price::where('id', $data['price_id'])->get()[0];
    
        for ($i=0; $i < count($img); $i++) {
            $newData['images'][$i]['id'] = $img[$i]['id'];
            $newData['images'][$i]['title'] = $img[$i]['title'];
            $newData['images'][$i]['picture_jpg'] = base64_encode($img[$i]['picture_jpg']);
            $newData['images'][$i]['picture_webp'] = base64_encode($img[$i]['picture_webp']);
            $newData['images'][$i]['product_id'] = $img[$i]['product_id'];
            $newData['images'][$i]['treatment_id'] = $img[$i]['treatment_id'];
            $newData['images'][$i]['category_id'] = $img[$i]['category_id'];       
        }
             
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function getTratmentByUrl($url) {
        $name = Category::where('url', $url)->get()[0]['name'];
        $data = Treatment::where('name', $name)->get()[0];
        $newData = [];

        $img = Image::where('treatment_id', $data['id'])->get();


        $newData['id'] = $data['id'];
        $newData['name'] = $data['name'];
        $newData['description'] = $data['description'];
        $newData['sessions'] = $data['sessions'];
        $newData['duration'] = $data['duration'];
        $newData['price_id'] = $data['price_id'];
        $newData['price'] = Price::where('id', $data['price_id'])->get()[0];
    
        for ($i=0; $i < count($img); $i++) {
            $newData['images'][$i]['id'] = $img[$i]['id'];
            $newData['images'][$i]['title'] = $img[$i]['title'];
            $newData['images'][$i]['picture_jpg'] = base64_encode($img[$i]['picture_jpg']);
            $newData['images'][$i]['picture_webp'] = base64_encode($img[$i]['picture_webp']);
            $newData['images'][$i]['product_id'] = $img[$i]['product_id'];
            $newData['images'][$i]['treatment_id'] = $img[$i]['treatment_id'];
            $newData['images'][$i]['category_id'] = $img[$i]['category_id'];       
        }     
       
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
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

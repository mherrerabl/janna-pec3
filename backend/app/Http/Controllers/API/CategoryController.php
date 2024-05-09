<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

Use App\Models\Category;
Use App\Models\Image;
Use Log;

class CategoryController extends Controller {

    public function getAll(){
        $data = Category::get();
        return response()->json($data, 200);
    }

    public function getByDepartment($department){
        $data = Category::where('department', $department)->where('category_id', null)->get();
        $newData = [];

        for ($i=0; $i < count($data); $i++) {
            $img = Image::where('category_id', $data[$i]['id'])->get()[0];
            $idCat = Category::where('url', $data[$i]['url'])->get()[0]['id'];
            $isParent = Category::where('category_id', $idCat)->get();

            $newData[$i]['id'] = $data[$i]['id'];
            $newData[$i]['name'] = $data[$i]['name'];
            $newData[$i]['department'] = $data[$i]['department'];
            $newData[$i]['url'] = $data[$i]['url'];
            $newData[$i]['category_id'] = $data[$i]['category_id'];
            $newData[$i]['isParent'] = count($isParent) > 0;
            $newData[$i]['image'] = Image::where('category_id', $data[$i]['id'])->get()[0];
            $newData[$i]['image']['id'] = $img['id'];
            $newData[$i]['image']['title'] = $img['title'];
            $newData[$i]['image']['picture_jpg'] = base64_encode($img['picture_jpg']);
            $newData[$i]['image']['picture_webp'] = base64_encode($img['picture_webp']);
            $newData[$i]['image']['product_id'] = $img['product_id'];
            $newData[$i]['image']['treatment_id'] = $img['treatment_id'];
            $newData[$i]['image']['category_id'] = $img['category_id'];       

       }
       
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
        
    }

    public function getByCategoriesByUrl($url){
        $id = Category::where('url', $url)->get()[0]['id'];
        $data = Category::where('category_id', $id)->get();
        $newData = [];

        for ($i=0; $i < count($data); $i++) {
            $img = Image::where('category_id', $data[$i]['id'])->get()[0];
            $idCat = Category::where('url', $data[$i]['url'])->get()[0]['id'];
            $isParent = Category::where('category_id', $idCat)->get();

            $newData[$i]['id'] = $data[$i]['id'];
            $newData[$i]['name'] = $data[$i]['name'];
            $newData[$i]['department'] = $data[$i]['department'];
            $newData[$i]['url'] = $data[$i]['url'];
            $newData[$i]['category_id'] = $data[$i]['category_id'];
            $newData[$i]['isParent'] = count($isParent) > 0;
            $newData[$i]['image'] = Image::where('category_id', $data[$i]['id'])->get()[0];
            $newData[$i]['image']['id'] = $img['id'];
            $newData[$i]['image']['title'] = $img['title'];
            $newData[$i]['image']['picture_jpg'] = base64_encode($img['picture_jpg']);
            $newData[$i]['image']['picture_webp'] = base64_encode($img['picture_webp']);
            $newData[$i]['image']['product_id'] = $img['product_id'];
            $newData[$i]['image']['treatment_id'] = $img['treatment_id'];
            $newData[$i]['image']['category_id'] = $img['category_id'];     

       }
       
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function getCategoryByUrl($url){
        $data = Category::where('url', $url)->get()[0];
        $newData = [];

        $img = Image::where('category_id', $data['id'])->get()[0];

        $newData['id'] = $data['id'];
        $newData['name'] = $data['name'];
        $newData['department'] = $data['department'];
        $newData['url'] = $data['url'];
        $newData['category_id'] = $data['category_id'];
        $newData['image'] = Image::where('category_id', $data['id'])->get()[0];
        $newData['image']['id'] = $img['id'];
        $newData['image']['title'] = $img['title'];
        $newData['image']['picture_jpg'] = base64_encode($img['picture_jpg']);
        $newData['image']['picture_webp'] = base64_encode($img['picture_webp']);
        $newData['image']['product_id'] = $img['product_id'];
        $newData['image']['treatment_id'] = $img['treatment_id'];
        $newData['image']['category_id'] = $img['category_id'];            
       
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function getCategoryById($id){
        $data = Category::where('id', $id)->get()[0];
        $newData = [];

        $img = Image::where('category_id', $data['id'])->get()[0];

        $newData['id'] = $data['id'];
        $newData['name'] = $data['name'];
        $newData['department'] = $data['department'];
        $newData['url'] = $data['url'];
        $newData['category_id'] = $data['category_id'];
        $newData['image'] = Image::where('category_id', $data['id'])->get()[0];
        $newData['image']['id'] = $img['id'];
        $newData['image']['title'] = $img['title'];
        $newData['image']['picture_jpg'] = base64_encode($img['picture_jpg']);
        $newData['image']['picture_webp'] = base64_encode($img['picture_webp']);
        $newData['image']['product_id'] = $img['product_id'];
        $newData['image']['treatment_id'] = $img['treatment_id'];
        $newData['image']['category_id'] = $img['category_id'];            
       
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }


    public function getCategoryNamebyUrl($url) {
        $data = Category::where('url', $url)->get()[0];
        $newData['name'] = $data['name'];
        $newData['url'] = $data['url'];

        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function create(Request $request){
        $data['name'] = $request['name'];
        $data['department'] = $request['department'];
        $data['url'] = $request['url'];
        $data['category_id'] = $request['category_id'];
       ;
        Category::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
    }

    public function delete($id){
        $res = Category::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
    }

    public function update(Request $request,$id){
        $data['name'] = $request['name'];
        $data['department'] = $request['department'];
        $data['url'] = $request['url'];
        $data['category_id'] = $request['category_id'];
        Category::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
    }
}
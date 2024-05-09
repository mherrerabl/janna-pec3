<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

Use App\Models\Product;
Use App\Models\Price;
Use App\Models\Category;
Use App\Models\Image;
Use App\Models\ProductVariation;


Use Log;

class ProductController extends Controller {

    public function getAll(){
        $data = Product::get();
        $newData = [];

        for ($i=0; $i < count($data); $i++) {
            $images = Image::where('product_id', $data[$i]['id'])->get();
            $price = Price::where('id', $data[$i]['price_id'])->get()[0];
            $variations = ProductVariation::where('product_id', $data[$i]['id'])->get();

            $newData[$i]['id'] = $data[$i]['id'];
            $newData[$i]['name'] = $data[$i]['name'];
            $newData[$i]['brand'] = $data[$i]['brand'];
            $newData[$i]['category_id'] = $data[$i]['category_id'];
            $newData[$i]['description'] = $data[$i]['description'];
            $newData[$i]['routine'] = $data[$i]['routine'];
            $newData[$i]['use'] = $data[$i]['use'];
            $newData[$i]['benefits'] = $data[$i]['benefits'];
            $newData[$i]['saleperson_id'] = $data[$i]['saleperson_id'];
            $newData[$i]['stock'] = $data[$i]['stock'];
            $newData[$i]['price_id'] = $data[$i]['price_id'];
            $newData[$i]['purchasePrice'] = $data[$i]['purchasePrice'];
            $newData[$i]['trend'] = $data[$i]['trend'];
            $newData[$i]['forSale'] = $data[$i]['forSale'];
            $newData[$i]['treatment_id'] = $data[$i]['treatment_id'];
            $newData[$i]['creation_date'] = $data[$i]['creation_date'];
         
            
            $newData[$i]['price']['id'] = $price['id'];
            $newData[$i]['price']['price'] = $price['price'];
            $newData[$i]['price']['offer'] = $price['offer'];
            $newData[$i]['price']['discount'] = $price['discount'];

            for ($x=0; $x < count($variations); $x++) {
                $priceVariation = Price::where('id', $variations[$x]['price_id'])->get()[0];
                $newData[$i]['variations'][$x] = $variations[$x];
                $newData[$i]['variations'][$x]['price'] = $priceVariation;

                $variationColor = ProductVariation::where('product_variation_id', $variations[$x]['id'])->get();
                
                if (count($variationColor) > 0) {
                    $newData[$i]['variations'][$x]['variations'] = $variationColor;
                }
            }    
            
            for ($x=0; $x < count($images); $x++) {
                $newData[$i]['images'][$x] = $images[$x];
                $newData[$i]['images'][$x]['picture_jpg'] = base64_encode($images[$x]['picture_jpg']);
                $newData[$i]['images'][$x]['picture_webp'] = base64_encode($images[$x]['picture_webp']);
            }     

       }
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function getForSale(){
        $data = Product::where('forSale', 1)->get();
        $newData = [];

        for ($i=0; $i < count($data); $i++) {
            $images = Image::where('product_id', $data[$i]['id'])->get();
            $price = Price::where('id', $data[$i]['price_id'])->get()[0];
            $variations = ProductVariation::where('product_id', $data[$i]['id'])->get();

            $newData[$i]['id'] = $data[$i]['id'];
            $newData[$i]['name'] = $data[$i]['name'];
            $newData[$i]['brand'] = $data[$i]['brand'];
            $newData[$i]['category_id'] = $data[$i]['category_id'];
            $newData[$i]['description'] = $data[$i]['description'];
            $newData[$i]['routine'] = $data[$i]['routine'];
            $newData[$i]['use'] = $data[$i]['use'];
            $newData[$i]['benefits'] = $data[$i]['benefits'];
            $newData[$i]['saleperson_id'] = $data[$i]['saleperson_id'];
            $newData[$i]['stock'] = $data[$i]['stock'];
            $newData[$i]['price_id'] = $data[$i]['price_id'];
            $newData[$i]['purchasePrice'] = $data[$i]['purchasePrice'];
            $newData[$i]['trend'] = $data[$i]['trend'];
            $newData[$i]['forSale'] = $data[$i]['forSale'];
            $newData[$i]['treatment_id'] = $data[$i]['treatment_id'];
            $newData[$i]['creation_date'] = $data[$i]['creation_date'];
         
            $newData[$i]['price']['id'] = $price['id'];
            $newData[$i]['price']['price'] = $price['price'];
            $newData[$i]['price']['offer'] = $price['offer'];
            $newData[$i]['price']['discount'] = $price['discount'];

            for ($x=0; $x < count($variations); $x++) {
                $priceVariation = Price::where('id', $variations[$x]['price_id'])->get()[0];
                $newData[$i]['variations'][$x] = $variations[$x];
                $newData[$i]['variations'][$x]['price'] = $priceVariation;

                $variationColor = ProductVariation::where('product_variation_id', $variations[$x]['id'])->get();
                
                if (count($variationColor) > 0) {
                    $newData[$i]['variations'][$x]['variations'] = $variationColor;
                }
            }    

            for ($x=0; $x < count($images); $x++) {
                $newData[$i]['images'][$x] = $images[$x];
                $newData[$i]['images'][$x]['picture_jpg'] = base64_encode($images[$x]['picture_jpg']);
                $newData[$i]['images'][$x]['picture_webp'] = base64_encode($images[$x]['picture_webp']);  
            }     

       }
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }


    public function getInTrend(){
        $data = Product::where('trend', 1)->get();
        $newData = [];

        for ($i=0; $i < count($data); $i++) {
            $images = Image::where('product_id', $data[$i]['id'])->get();
            $price = Price::where('id', $data[$i]['price_id'])->get()[0];
            $variations = ProductVariation::where('product_id', $data[$i]['id'])->get();

            $newData[$i]['id'] = $data[$i]['id'];
            $newData[$i]['name'] = $data[$i]['name'];
            $newData[$i]['brand'] = $data[$i]['brand'];
            $newData[$i]['category_id'] = $data[$i]['category_id'];
            $newData[$i]['description'] = $data[$i]['description'];
            $newData[$i]['routine'] = $data[$i]['routine'];
            $newData[$i]['use'] = $data[$i]['use'];
            $newData[$i]['benefits'] = $data[$i]['benefits'];
            $newData[$i]['saleperson_id'] = $data[$i]['saleperson_id'];
            $newData[$i]['stock'] = $data[$i]['stock'];
            $newData[$i]['price_id'] = $data[$i]['price_id'];
            $newData[$i]['purchasePrice'] = $data[$i]['purchasePrice'];
            $newData[$i]['trend'] = $data[$i]['trend'];
            $newData[$i]['forSale'] = $data[$i]['forSale'];
            $newData[$i]['treatment_id'] = $data[$i]['treatment_id'];
            $newData[$i]['creation_date'] = $data[$i]['creation_date'];
         

            $newData[$i]['price']['id'] = $price['id'];
            $newData[$i]['price']['price'] = $price['price'];
            $newData[$i]['price']['offer'] = $price['offer'];
            $newData[$i]['price']['discount'] = $price['discount'];

            for ($x=0; $x < count($variations); $x++) {
                $priceVariation = Price::where('id', $variations[$x]['price_id'])->get()[0];
                $newData[$i]['variations'][$x] = $variations[$x];
                $newData[$i]['variations'][$x]['price'] = $priceVariation;

                $variationColor = ProductVariation::where('product_variation_id', $variations[$x]['id'])->get();
                
                if (count($variationColor) > 0) {
                    $newData[$i]['variations'][$x]['variations'] = $variationColor;
                }
            }    

            for ($x=0; $x < count($images); $x++) {
                $newData[$i]['images'][$x] = $images[$x];
                $newData[$i]['images'][$x]['picture_jpg'] = base64_encode($images[$x]['picture_jpg']);
                $newData[$i]['images'][$x]['picture_webp'] = base64_encode($images[$x]['picture_webp']); 
            }     

       }
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    
    public function getInOffer(){
        $allProducts = Product::get();
        $data = [];

        for ($i=0; $i < count($allProducts); $i++) {
            $price = Price::where('id', $allProducts[$i]['price_id'])->get()[0];
            $variations = ProductVariation::where('product_id', $allProducts[$i]['id'])->get();

            if ($price['offer'] == null || $price['discount'] != null) {
                $data[$i]['id'] = $allProducts[$i]['id'];
                $data[$i]['name'] = $allProducts[$i]['name'];
                $data[$i]['brand'] = $allProducts[$i]['brand'];
                $data[$i]['category_id'] = $allProducts[$i]['category_id'];
                $data[$i]['description'] = $allProducts[$i]['description'];
                $data[$i]['routine'] = $allProducts[$i]['routine'];
                $data[$i]['use'] = $allProducts[$i]['use'];
                $data[$i]['benefits'] = $allProducts[$i]['benefits'];
                $data[$i]['saleperson_id'] = $allProducts[$i]['saleperson_id'];
                $data[$i]['stock'] = $allProducts[$i]['stock'];
                $data[$i]['price_id'] = $allProducts[$i]['price_id'];
                $data[$i]['purchasePrice'] = $allProducts[$i]['purchasePrice'];
                $data[$i]['trend'] = $allProducts[$i]['trend'];
                $data[$i]['forSale'] = $allProducts[$i]['forSale'];
                $data[$i]['treatment_id'] = $allProducts[$i]['treatment_id'];
                $data[$i]['creation_date'] = $allProducts[$i]['creation_date'];
            }
        }

        $newData = [];

        for ($i=0; $i < count($data); $i++) {
            $images = Image::where('product_id', $data[$i]['id'])->get();
            $price = Price::where('id', $data[$i]['price_id'])->get()[0];

            $newData[$i]['id'] = $data[$i]['id'];
            $newData[$i]['name'] = $data[$i]['name'];
            $newData[$i]['brand'] = $data[$i]['brand'];
            $newData[$i]['category_id'] = $data[$i]['category_id'];
            $newData[$i]['description'] = $data[$i]['description'];
            $newData[$i]['routine'] = $data[$i]['routine'];
            $newData[$i]['use'] = $data[$i]['use'];
            $newData[$i]['benefits'] = $data[$i]['benefits'];
            $newData[$i]['saleperson_id'] = $data[$i]['saleperson_id'];
            $newData[$i]['stock'] = $data[$i]['stock'];
            $newData[$i]['price_id'] = $data[$i]['price_id'];
            $newData[$i]['purchasePrice'] = $data[$i]['purchasePrice'];
            $newData[$i]['trend'] = $data[$i]['trend'];
            $newData[$i]['forSale'] = $data[$i]['forSale'];
            $newData[$i]['treatment_id'] = $data[$i]['treatment_id'];
            $newData[$i]['creation_date'] = $data[$i]['creation_date'];
         
            
            $newData[$i]['price']['id'] = $price['id'];
            $newData[$i]['price']['price'] = $price['price'];
            $newData[$i]['price']['offer'] = $price['offer'];
            $newData[$i]['price']['discount'] = $price['discount'];

            for ($x=0; $x < count($variations); $x++) {
                $priceVariation = Price::where('id', $variations[$x]['price_id'])->get()[0];
                $newData[$i]['variations'][$x] = $variations[$x];
                $newData[$i]['variations'][$x]['price'] = $priceVariation;

                $variationColor = ProductVariation::where('product_variation_id', $variations[$x]['id'])->get();
                
                if (count($variationColor) > 0) {
                    $newData[$i]['variations'][$x]['variations'] = $variationColor;
                }
            }    


            for ($x=0; $x < count($images); $x++) {
                $newData[$i]['images'][$x] = $images[$x];
                $newData[$i]['images'][$x]['picture_jpg'] = base64_encode($images[$x]['picture_jpg']);
                $newData[$i]['images'][$x]['picture_webp'] = base64_encode($images[$x]['picture_webp']);
            }     

       }
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }


    
    public function getProductsByCategory($categoryUrl){
        $categoryId = Category::where('url', $categoryUrl)->get()[0]['id'];
        $data = Product::where('category_id', $categoryId)->where('forSale', 1)->get();
        $newData = [];

        for ($i=0; $i < count($data); $i++) {
            $images = Image::where('product_id', $data[$i]['id'])->get();
            $price = Price::where('id', $data[$i]['price_id'])->get()[0];
            $variations = ProductVariation::where('product_id', $data[$i]['id'])->get();

            $newData[$i]['id'] = $data[$i]['id'];
            $newData[$i]['name'] = $data[$i]['name'];
            $newData[$i]['brand'] = $data[$i]['brand'];
            $newData[$i]['category_id'] = $data[$i]['category_id'];
            $newData[$i]['description'] = $data[$i]['description'];
            $newData[$i]['routine'] = $data[$i]['routine'];
            $newData[$i]['use'] = $data[$i]['use'];
            $newData[$i]['benefits'] = $data[$i]['benefits'];
            $newData[$i]['saleperson_id'] = $data[$i]['saleperson_id'];
            $newData[$i]['stock'] = $data[$i]['stock'];
            $newData[$i]['price_id'] = $data[$i]['price_id'];
            $newData[$i]['purchasePrice'] = $data[$i]['purchasePrice'];
            $newData[$i]['trend'] = $data[$i]['trend'];
            $newData[$i]['forSale'] = $data[$i]['forSale'];
            $newData[$i]['treatment_id'] = $data[$i]['treatment_id'];
            $newData[$i]['creation_date'] = $data[$i]['creation_date'];
         

            $newData[$i]['price']['id'] = $price['id'];
            $newData[$i]['price']['price'] = $price['price'];
            $newData[$i]['price']['offer'] = $price['offer'];
            $newData[$i]['price']['discount'] = $price['discount'];


            for ($x=0; $x < count($variations); $x++) {
                $priceVariation = Price::where('id', $variations[$x]['price_id'])->get()[0];
                $newData[$i]['variations'][$x] = $variations[$x];
                $newData[$i]['variations'][$x]['price'] = $priceVariation;

                $variationColor = ProductVariation::where('product_variation_id', $variations[$x]['id'])->get();
                
                if (count($variationColor) > 0) {
                    $newData[$i]['variations'][$x]['variations'] = $variationColor;
                }
            }    

            for ($x=0; $x < count($images); $x++) {
                $newData[$i]['images'][$x] = $images[$x];
                $newData[$i]['images'][$x]['picture_jpg'] = base64_encode($images[$x]['picture_jpg']);
                $newData[$i]['images'][$x]['picture_webp'] = base64_encode($images[$x]['picture_webp']);
            }     

       }
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function getNewProducts($quantity){
        $data = Product::orderBy('creation_date', 'DESC')->take($quantity)->get();
        $newData = [];

        for ($i=0; $i < count($data); $i++) {
            $images = Image::where('product_id', $data[$i]['id'])->get();
            $price = Price::where('id', $data[$i]['price_id'])->get()[0];
            $variations = ProductVariation::where('product_id', $data[$i]['id'])->get();

            $newData[$i]['id'] = $data[$i]['id'];
            $newData[$i]['name'] = $data[$i]['name'];
            $newData[$i]['brand'] = $data[$i]['brand'];
            $newData[$i]['category_id'] = $data[$i]['category_id'];
            $newData[$i]['description'] = $data[$i]['description'];
            $newData[$i]['routine'] = $data[$i]['routine'];
            $newData[$i]['use'] = $data[$i]['use'];
            $newData[$i]['benefits'] = $data[$i]['benefits'];
            $newData[$i]['saleperson_id'] = $data[$i]['saleperson_id'];
            $newData[$i]['stock'] = $data[$i]['stock'];
            $newData[$i]['price_id'] = $data[$i]['price_id'];
            $newData[$i]['purchasePrice'] = $data[$i]['purchasePrice'];
            $newData[$i]['trend'] = $data[$i]['trend'];
            $newData[$i]['forSale'] = $data[$i]['forSale'];
            $newData[$i]['treatment_id'] = $data[$i]['treatment_id'];
            $newData[$i]['creation_date'] = $data[$i]['creation_date'];
         

            $newData[$i]['price']['id'] = $price['id'];
            $newData[$i]['price']['price'] = $price['price'];
            $newData[$i]['price']['offer'] = $price['offer'];
            $newData[$i]['price']['discount'] = $price['discount'];


            for ($x=0; $x < count($variations); $x++) {
                $priceVariation = Price::where('id', $variations[$x]['price_id'])->get()[0];

                $newData[$i]['variations'][$x] = $variations[$x];
                $newData[$i]['variations'][$x]['price'] = $priceVariation;
                $variationColor = ProductVariation::where('product_variation_id', $variations[$x]['id'])->get();
                
                if (count($variationColor) > 0) {
                    $newData[$i]['variations'][$x]['variations'] = $variationColor;
                }
                
            }    

            for ($x=0; $x < count($images); $x++) {
                $newData[$i]['images'][$x] = $images[$x];
                $newData[$i]['images'][$x]['picture_jpg'] = base64_encode($images[$x]['picture_jpg']);
                $newData[$i]['images'][$x]['picture_webp'] = base64_encode($images[$x]['picture_webp']); 
            }     

       }
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }


    public function getProductForSale($id){
        $data = Product::where('id', $id)->where('forSale', 1)->get()[0];
        $newData = [];

       
        $images = Image::where('product_id', $data['id'])->get();
        $price = Price::where('id', $data['price_id'])->get()[0];
        $variations = ProductVariation::where('product_id', $data['id'])->get();

        $newData['id'] = $data['id'];
        $newData['name'] = $data['name'];
        $newData['brand'] = $data['brand'];
        $newData['category_id'] = $data['category_id'];
        $newData['description'] = $data['description'];
        $newData['routine'] = $data['routine'];
        $newData['use'] = $data['use'];
        $newData['benefits'] = $data['benefits'];
        $newData['saleperson_id'] = $data['saleperson_id'];
        $newData['stock'] = $data['stock'];
        $newData['price_id'] = $data['price_id'];
        $newData['purchasePrice'] = $data['purchasePrice'];
        $newData['trend'] = $data['trend'];
        $newData['forSale'] = $data['forSale'];
        $newData['treatment_id'] = $data['treatment_id'];
        $newData['creation_date'] = $data['creation_date'];
        

        $newData['price']['id'] = $price['id'];
        $newData['price']['price'] = $price['price'];
        $newData['price']['offer'] = $price['offer'];
        $newData['price']['discount'] = $price['discount'];
            
        for ($x=0; $x < count($variations); $x++) {
            $priceVariation = Price::where('id', $variations[$x]['price_id'])->get()[0];
            
            $newData['variations'][$x] = $variations[$x];
            $newData['variations'][$x]['price'] = $priceVariation;

            $variationColor = ProductVariation::where('product_variation_id', $variations[$x]['id'])->get();
                
                if (count($variationColor) > 0) {
                    $newData['variations'][$x]['variations'] = $variationColor;
                }
        }   

        for ($x=0; $x < count($images); $x++) {
            $newData['images'][$x] = $images[$x];
            $newData['images'][$x]['picture_jpg'] = base64_encode($images[$x]['picture_jpg']);
            $newData['images'][$x]['picture_webp'] = base64_encode($images[$x]['picture_webp']);  
        }     

       
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function getProduct($id){
        $data = Product::where('id', $id)->get()[0];
        $newData = [];

        $images = Image::where('product_id', $data['id'])->get();
        $price = Price::where('id', $data['price_id'])->get()[0];
        $variations = ProductVariation::where('product_id', $data['id'])->get();

        $newData['id'] = $data['id'];
        $newData['name'] = $data['name'];
        $newData['brand'] = $data['brand'];
        $newData['category_id'] = $data['category_id'];
        $newData['description'] = $data['description'];
        $newData['routine'] = $data['routine'];
        $newData['use'] = $data['use'];
        $newData['benefits'] = $data['benefits'];
        $newData['saleperson_id'] = $data['saleperson_id'];
        $newData['stock'] = $data['stock'];
        $newData['price_id'] = $data['price_id'];
        $newData['purchasePrice'] = $data['purchasePrice'];
        $newData['trend'] = $data['trend'];
        $newData['forSale'] = $data['forSale'];
        $newData['treatment_id'] = $data['treatment_id'];
        $newData['creation_date'] = $data['creation_date'];
        

        $newData['price']['id'] = $price['id'];
        $newData['price']['price'] = $price['price'];
        $newData['price']['offer'] = $price['offer'];
        $newData['price']['discount'] = $price['discount'];
            
        for ($x=0; $x < count($variations); $x++) {
            $priceVariation = Price::where('id', $variations[$x]['price_id'])->get()[0];
            $newData['variations'][$x] = $variations[$x];
            $newData['variations'][$x]['price'] = $priceVariation;

            $variationColor = ProductVariation::where('product_variation_id', $variations[$x]['id'])->get();
                
                if (count($variationColor) > 0) {
                    $newData['variations'][$x]['variations'] = $variationColor;
                }
        }   

        for ($x=0; $x < count($images); $x++) {
            $newData['images'][$x] = $images[$x];
            $newData['images'][$x]['picture_jpg'] = base64_encode($images[$x]['picture_jpg']);
            $newData['images'][$x]['picture_webp'] = base64_encode($images[$x]['picture_webp']);
        }     

       
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
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
        $data['creation_date'] = date();
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
        $data['creation_date'] = $data['creation_date'];
        Product::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
    }
}

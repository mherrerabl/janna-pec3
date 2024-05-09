<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

Use App\Models\Order;
Use App\Models\ProductOrder;
Use App\Models\Address;
Use Log;

class OrderController extends Controller {

    public function getAll(){
        $data = Order::get();

        $newData = [];
        for ($i=0; $i < count($data); $i++) {             
            $newData[$i]['id'] = $data[$i]->id;
            $newData[$i]['user_id'] = $data[$i]->user_id;
            $newData[$i]['total_price'] = $data[$i]->total_price;
            $newData[$i]['address_id'] = $data[$i]->address_id;
            $newData[$i]['state'] = $data[$i]->state;
            $newData[$i]['creation_date'] = $data[$i]->creation_date;
            $newData[$i]['modification_date'] = $data[$i]->modification_date;

            $products = ProductOrder::where('order_id', $data[$i]->id)->get();

            for ($x=0; $x < count($products); $x++) { 
                $newData[$i]['products'][$x]['id'] = $products[$x]->id;
                $newData[$i]['products'][$x]['name'] = $products[$x]->name;
                $newData[$i]['products'][$x]['price'] = $products[$x]->price;
                $newData[$i]['products'][$x]['quantity'] = $products[$x]->quantity;
                $newData[$i]['products'][$x]['state'] = $products[$x]->state;
                $newData[$i]['products'][$x]['order_id'] = $products[$x]->order_id;
            }

            $address = Address::find($data[$i]->address_id);

            $newData[$i]['address']['name'] = $address->name;
            $newData[$i]['address']['address'] = $address->address;
            $newData[$i]['address']['number'] = $address->number;
            $newData[$i]['address']['additionalInfo'] = $address->additionalInfo;
            $newData[$i]['address']['zip'] = $address->zip;
            $newData[$i]['address']['city'] = $address->city;
        }
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function getByIdUser($idUser) {
        $data = Order::where('user_id', $idUser)->get();

        $newData = [];
        for ($i=0; $i < count($data); $i++) {             
            $newData[$i]['id'] = $data[$i]->id;
            $newData[$i]['user_id'] = $data[$i]->user_id;
            $newData[$i]['total_price'] = $data[$i]->total_price;
            $newData[$i]['address_id'] = $data[$i]->address_id;
            $newData[$i]['state'] = $data[$i]->state;
            $newData[$i]['creation_date'] = $data[$i]->creation_date;
            $newData[$i]['modification_date'] = $data[$i]->modification_date;

            $products = ProductOrder::where('order_id', $data[$i]->id)->get();

            for ($x=0; $x < count($products); $x++) { 
                $newData[$i]['products'][$x]['id'] = $products[$x]->id;
                $newData[$i]['products'][$x]['name'] = $products[$x]->name;
                $newData[$i]['products'][$x]['price'] = $products[$x]->price;
                $newData[$i]['products'][$x]['quantity'] = $products[$x]->quantity;
                $newData[$i]['products'][$x]['state'] = $products[$x]->state;
                $newData[$i]['products'][$x]['order_id'] = $products[$x]->order_id;
            }

            $address = Address::find($data[$i]->address_id);

            $newData[$i]['address']['name'] = $address->name;
            $newData[$i]['address']['address'] = $address->address;
            $newData[$i]['address']['number'] = $address->number;
            $newData[$i]['address']['additionalInfo'] = $address->additionalInfo;
            $newData[$i]['address']['zip'] = $address->zip;
            $newData[$i]['address']['city'] = $address->city;
        }
       
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function create(Request $request){
        $data['user_id'] = $request['user_id'];
        $data['total_price'] = $request['total_price'];
        $data['state'] = $request['state'];
        $data['modification_date'] = $request['modification_date'];
        Order::create($data);

        return response()->json($data, 200);
    }

    public function delete($id){
        $res = Order::find($id)->delete();
        return response()->json($id, 200);

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

        return response()->json($data, 200);
    }
}

<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
Use App\Models\Person;
Use Log;

class PersonController extends Controller
{
  public function getAll(){
    $data = Person::get();
    return response()->json($data, 200);
  }

  static function getByEmail(String $email){
    $users = Person::get();
    $data = null;
    for ($i=0; $i < count($users); $i++) { 
      $emailUser = Person::where('id', $users[$i]->id)->first()->email;
      if($email === $emailUser) {
        return response()->json($users[$i], 200);
      }
    }
    return response()->json($data, 200);

  }

  public function create(Request $request){
    $data['name'] = $request['name'];
    $data['surname'] = $request['surname'];
    $data['email'] = $request['email'];
    $data['phone'] = $request['phone'];
    Person::create($data);
    return response()->json([
      'message' => "Successfully created",
      'success' => true
    ], 200);
  }

  public function delete($id){
    $res = Person::find($id)->delete();
    return response()->json([
      'message' => "Successfully deleted",
      'success' => true
    ], 200);
  }

  public function get($id){
    $data = Person::find($id);
    return response()->json($data, 200);
  }

  public function update(Request $request,$id){
    $data['name'] = $request['name'];
    $data['surname'] = $request['surname'];
    $data['email'] = $request['email'];
    $data['phone'] = $request['phone'];
    Person::find($id)->update($data);
    return response()->json([
      'message' => "Successfully updated",
      'success' => true
    ], 200);
  }
}

<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EmailController extends Controller
{
    public function send(Request $request){
        $data['name'] = $request['name'];
        $data['surname'] = $request['surname'];
        $data['email'] = $request['email'];
        $data['query'] = $request['query'];

        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
    }
}

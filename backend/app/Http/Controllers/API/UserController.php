<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
Use App\Models\User;
Use App\Models\Person;
Use Log;

class UserController extends Controller {

    public function getAll(){
        $data = User::get();
        return response()->json($data, 200);
    }

    
    public function getById($id){
        $data = User::find($id);
        return response()->json($data, 200);
    }

    public function getByEmail($email){
        $persons = Person::get();
        $data = null;
        for ($i=0; $i < count($persons); $i++) { 
          $emailPerson = Person::where('id', $persons[$i]->id)->first()->email;
          if($email === $emailPerson) {
            return $persons[$i];
          }
        }
        return $data;
    }

    public function getLogin(Request $request){
        $person = $this->getByEmail($request->email);
        $data = null;

        if ($person !== null) {
            $user = User::where('person_id', $person->id)->get()->first();

            if ($user->password === $request->password) {
                $data['id'] = $user->id;
                $data['name'] = $person->name;
                $data['surname'] = $person->surname;
                $data['password'] = $user->password;
                $data['email'] = $person->email;
                $data['phone'] = $person->phone;

                return response()->json($data, 200);
            }

            $data = 'password';
            return response()->json($data, 200);
        }

        $data = 'email';

        return response()->json($data, 200);
    }

    private function getUserByEmail($email) {
        $user = Person::where('email', $email)->get();
        return $user;
        if(count($user) > 0) {
            return response()->json($user[0], 200);
        }

        return null;
    }

      
    public function create(Request $request){
        $person = $this->getByEmail($request->email);
        $data = null;

        if ($person === null) {

            $person['name'] = $request->name;
            $person['surname'] = $request->surname;
            $person['email'] = $request->email;
            $person['phone'] = $request->phone;

            Person::create($person);
            $newPerson = Person::orderBy('id', 'desc')->first();

            $data['person_id'] = (string)$newPerson->id;
            $data['password'] = $request->password;
            $data['type'] = 'user';

            User::create($data);
            $user = User::orderBy('id', 'desc')->first();

            $data['id'] = $user->id;
            $data['name'] = $newPerson->name;
            $data['surname'] = $newPerson->surname;
            $data['password'] = $user->password;
            $data['email'] = $newPerson->email;
            $data['phone'] = $newPerson->phone;

            return response()->json($data, 200);
        }

        $data = 'email';
        return response()->json($data, 200);
    }

    public function delete($id){
        $res = User::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
    }

    public function update(Request $request,$id){
        $personId = User::find($id)['person_id'];

        $person['name'] = $request->name;
        $person['surname'] = $request->surname;
        $person['email'] = $request->email;
        $person['phone'] = $request->phone;

        Person::find($personId)->update($person);

        $data['password'] = $request->password;

        User::find($id)->update($data);

        return response()->json($data, 200);
    }
}

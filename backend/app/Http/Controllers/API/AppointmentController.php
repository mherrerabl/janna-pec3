<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

Use App\Models\Appointment;
Use App\Models\UserTreatment;
Use App\Models\Treatment;
Use App\Models\User;
Use App\Models\Person;




Use Log;

class AppointmentController extends Controller {

    public function getAll(){
        $data = Appointment::get();
        $newData = [];

        for ($i=0; $i < count($data); $i++) { 
            $newData[$i]['id'] = $data[$i]->id;
            $newData[$i]['date'] = $data[$i]->date;
            $newData[$i]['state'] = $data[$i]->state;
            $newData[$i]['user_treatment_id'] = $data[$i]->user_treatment_id;

            $userTreatment = UserTreatment::find($data[$i]->user_treatment_id);

            $newData[$i]['user_treatment']['id'] = $userTreatment->id;
            $newData[$i]['user_treatment']['user_id'] = $userTreatment->user_id;
            $newData[$i]['user_treatment']['state'] = $userTreatment->state;
            $newData[$i]['user_treatment']['sessions'] = $userTreatment->sessions;

            $treatment = Treatment::find($userTreatment->treatment_id);
            $newData[$i]['user_treatment']['name'] = $treatment->name;

            $user = User::find($userTreatment->user_id);
            $person = Person::find($user->person_id);

            $newData[$i]['user']['id'] = $user->id;
            $newData[$i]['user']['name'] = $person->name;
            $newData[$i]['user']['surname'] = $person->surname;
        }
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function getByUserId($userId) {
        $userTreatments = UserTreatment::where('user_id', $userId)->get();

        $newData = [];

        for ($i=0; $i < count($userTreatments); $i++) { 
            $appointments = Appointment::where('user_treatment_id', $userTreatments[$i]->id)->get();

            for ($x=0; $x < count($appointments); $x++) { 
                $newData[$i]['id'] = $appointments[$x]->id;
                $newData[$i]['date'] = $appointments[$x]->date;
                $newData[$i]['state'] = $appointments[$x]->state;
                $newData[$i]['user_treatment_id'] = $appointments[$x]->user_treatment_id;

                $newData[$i]['user_treatment']['id'] = $userTreatments[$i]->id;
                $newData[$i]['user_treatment']['user_id'] = $userTreatments[$i]->user_id;
                $newData[$i]['user_treatment']['state'] = $userTreatments[$i]->state;
                $newData[$i]['user_treatment']['sessions'] = $userTreatments[$i]->sessions;

                $treatment = Treatment::find($userTreatments[$i]->treatment_id);
                $newData[$i]['user_treatment']['name'] = $treatment->name;
    
                $user = User::find($userTreatments[$i]->user_id);
                $person = Person::find($user->person_id);
    
                $newData[$i]['user']['id'] = $user->id;
                $newData[$i]['user']['name'] = $person->name;
                $newData[$i]['user']['surname'] = $person->surname;
            }
        }
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function create(Request $request){
        $data['date'] = $request['date'];
        $data['state'] = $request['state'];
        $data['user_treatment_id'] = $request['user_treatment_id'];
        Appointment::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
    }

    public function delete($id){
        $res = Appointment::find($id)->delete();
        return response()->json($id, 200);
    }

    public function get($id){
      $data = Appointment::find($id);
      $newData = [];

          $newData['id'] = $data->id;
          $newData['date'] = $data->date;
          $newData['state'] = $data->state;
          $newData['user_treatment_id'] = $data->user_treatment_id;

          $userTreatment = UserTreatment::find($data->user_treatment_id);

          $newData['user_treatment']['id'] = $userTreatment->id;
          $newData['user_treatment']['user_id'] = $userTreatment->user_id;
          $newData['user_treatment']['state'] = $userTreatment->state;
          $newData['user_treatment']['sessions'] = $userTreatment->sessions;

          $treatment = Treatment::find($userTreatment->treatment_id);
          $newData['user_treatment']['name'] = $treatment->name;

          $user = User::find($userTreatment->user_id);
          $person = Person::find($user->person_id);

          $newData['user']['id'] = $user->id;
          $newData['user']['name'] = $person->name;
          $newData['user']['surname'] = $person->surname;
      
      return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function update(Request $request,$id){
        $data['date'] = $request['date'];
        $data['state'] = $request['state'];
        $data['user_treatment_id'] = $request['user_treatment_id'];
        Appointment::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
    }
}

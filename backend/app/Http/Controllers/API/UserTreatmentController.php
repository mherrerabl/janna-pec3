<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Appointment;
Use App\Models\UserTreatment;
Use App\Models\Treatment;
Use Log;

class UserTreatmentController extends Controller {

    public function getAll(){
        $data = UserTreatment::get();
        $newData = [];


        for ($i=0; $i < count($data); $i++) { 
            $newData[$i]['id'] = $data[$i]->id;
            $newData[$i]['user_id'] = $data[$i]->user_id;
            $newData[$i]['state'] = $data[$i]->state;
            $newData[$i]['sessions'] = $data[$i]->sessions;
            $newData[$i]['treatment_id'] = $data[$i]->treatment_id;

            $treatment = Treatment::find($data[$i]->treatment_id);
            $newData[$i]['name']  = $treatment->name;

            $appointments = Appointment::where('user_treatment_id', $data[$i]->id)->get();

            for ($x=0; $x < count($appointments); $x++) { 
                $newData[$i]['appointments'][$x]['id'] = $appointments[$x]->id;
                $newData[$i]['appointments'][$x]['date'] = $appointments[$x]->date;
                $newData[$i]['appointments'][$x]['state'] = $appointments[$x]->state;
            }
        }
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function getByUserId($userId) {
        $data = UserTreatment::where('user_id', $userId)->get();

        $newData = [];

        for ($i=0; $i < count($data); $i++) { 
            $newData[$i]['id'] = $data[$i]->id;
            $newData[$i]['user_id'] = $data[$i]->user_id;
            $newData[$i]['state'] = $data[$i]->state;
            $newData[$i]['sessions'] = $data[$i]->sessions;
            $newData[$i]['treatment_id'] = $data[$i]->treatment_id;

            $treatment = Treatment::find($data[$i]->treatment_id);
            $newData[$i]['name']  = $treatment->name;

            $appointments = Appointment::where('user_treatment_id', $data[$i]->id)->get();

            for ($x=0; $x < count($appointments); $x++) { 
                $newData[$i]['appointments'][$x]['id'] = $appointments[$x]->id;
                $newData[$i]['appointments'][$x]['date'] = $appointments[$x]->date;
                $newData[$i]['appointments'][$x]['state'] = $appointments[$x]->state;
            }
        }
        return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function create(Request $request){
        $data['user_id'] = $request['user_id'];
        $data['state'] = $request['state'];
        $data['sessions'] = $request['sessions'];
        $data['treatment_id'] = $request['treatment_id'];
        UserTreatment::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
    }

    public function delete($id){
        $res = UserTreatment::find($id)->delete();
        return response()->json($id, 200);
    }

    public function get($id){
      $data = UserTreatment::find($id);

      $newData = [];

        $newData['id'] = $data->id;
        $newData['user_id'] = $data->user_id;
        $newData['state'] = $data->state;
        $newData['sessions'] = $data->sessions;
        $newData['treatment_id'] = $data->treatment_id;

        $treatment = Treatment::find($data->treatment_id);
            $newData['name'] = $treatment->name;

        $appointments = Appointment::where('user_treatment_id', $data->id)->get();

        for ($x=0; $x < count($appointments); $x++) { 
            $newData['appointments'][$x]['id'] = $appointments[$x]->id;
            $newData['appointments'][$x]['date'] = $appointments[$x]->date;
            $newData['appointments'][$x]['state'] = $appointments[$x]->state;
        }
        

      return response()->json($newData, 200, ['Content-type'=> 'application/json; charset=utf-8'], JSON_UNESCAPED_UNICODE);
    }

    public function update(Request $request,$id){
        $data['user_id'] = $request['user_id'];
        $data['state'] = $request['state'];
        $data['sessions'] = $request['sessions'];
        $data['treatment_id'] = $request['treatment_id'];
        UserTreatment::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
    }
}

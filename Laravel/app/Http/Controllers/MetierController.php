<?php

namespace App\Http\Controllers;
use App\Models\Metier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MetierController extends Controller
{

    public function create(Request $request)
    {

        $validator = Validator::make($request->all() , [
            'designation' => 'bail|required|string'
        ]) ;
        
        if($validator->fails())
            return response()->json(['errors' => $validator->errors()] , 203) ;
            
        $metier = Metier::firstOrCreate($request->all());

        if ($metier->save())
            return response()->json($metier, 200);

        return response()->json(['message' => "Échec de l'ajout. Une erreur s'est produite lors de l'ajout"], 201);
    }

    public function read() 
    {
        return response()->json(Metier::all() , 200) ;
    }

}

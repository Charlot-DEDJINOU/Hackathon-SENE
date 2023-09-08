<?php

namespace App\Http\Controllers;
use App\Models\Quartier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class QuartierController extends Controller
{

    public function create(Request $request)
    {

        $validator = Validator::make($request->all() , [
            'nom_quartier' => 'bail|required|string'
        ]) ;
        
        if($validator->fails())
            return response()->json(['errors' => $validator->errors()] , 203) ;
            
        $nomquartier = $request->input('nom_quartier');

        $existingquartier = Quartier::where('nom_quartier', $nomquartier)->first();

        if ($existingquartier)
            return response()->json(['message' => "Cette quartier existe déjà"], 201);

        $quartier = Quartier::create($request->all()) ;

        if ($quartier->save()) {
            return response()->json(['message' => "Ajout réussi"], 200);
        } else {
            return response()->json(['message' => "Échec de l'ajout. Une erreur s'est produite lors de l'ajout"], 201);
        }
    }

    public function read() 
    {
        return response()->json(Quartier::all() , 200) ;
    }

}

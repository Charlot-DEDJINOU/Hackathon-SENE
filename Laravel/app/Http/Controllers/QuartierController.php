<?php

namespace App\Http\Controllers;
use App\Models\Quartier;
use App\Models\Ville;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class QuartierController extends Controller
{

    public function create(Request $request)
    {

        $validator = Validator::make($request->all() , [
            'nom_quartier' => 'bail|required|string',
            'ville' => 'bail|required|string'
        ]) ;
        
        if($validator->fails())
            return response()->json(['errors' => $validator->errors()] , 203) ;
            
        $ville = Ville::firstOrCreate(['nom_ville' => $request->input('ville')]);

        $quartier = Quartier::firstOrCreate([
            'nom_quartier' => $request->input('nom_quartier') , 
            "id_ville" => $ville->id
        ]);

        if ($quartier->save())
            return response()->json($quartier, 200);

        return response()->json(['message' => "Échec de l'ajout. Une erreur s'est produite lors de l'ajout"], 201);
    }

    public function read() 
    {
        return response()->json(Quartier::all() , 200) ;
    }

}

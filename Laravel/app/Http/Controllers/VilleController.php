<?php

namespace App\Http\Controllers;
use App\Models\Ville;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class VilleController extends Controller
{

    public function create(Request $request)
    {

        $validator = Validator::make($request->all() , [
            'nom_ville' => 'bail|required|string'
        ]) ;
        
        if($validator->fails())
            return response()->json(['errors' => $validator->errors()] , 203) ;
            
        $nomVille = $request->input('nom_ville');

        $existingVille = Ville::where('nom_ville', $nomVille)->first();

        if ($existingVille)
            return response()->json(['message' => "Cette ville existe déjà"], 201);

        $ville = Ville::create($request->all()) ;

        if ($ville->save()) {
            return response()->json(['message' => "Ajout réussi"], 200);
        } else {
            return response()->json(['message' => "Échec de l'ajout. Une erreur s'est produite lors de l'ajout"], 201);
        }
    }

    public function read() 
    {
        return response()->json(Ville::all() , 200) ;
    }

}

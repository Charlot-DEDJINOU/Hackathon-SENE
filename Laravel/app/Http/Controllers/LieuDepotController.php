<?php

namespace App\Http\Controllers;
use App\Http\Requests\LieuDepotRequest;
use App\Models\LieuDepot;
use App\Models\Quartier;
use App\Models\Ville;
use Illuminate\Validation\ValidationException; 

class LieuDepotController extends Controller
{
    public function create(LieuDepotRequest $request)
    {
        try {
    
            $ville = Ville::firstOrCreate(['nom_ville' => $request->input('ville')]);
            Quartier::firstOrCreate([
                'nom_quartier' => $request->input('quartier') , 
                "id_ville" => $ville->id
            ]);

            $lieuDepot = LieuDepot::firstOrCreate($request->all());

            if ($lieuDepot) 
                return response()->json($lieuDepot , 200);
           
            return response()->json(['message' => "Échec de l'ajout. Une erreur s'est produite lors de l'ajout"], 201);
    
        } catch (ValidationException $e) {
            return response()->json(['errors' => $e->errors()], 422);
        }
    }

    public function read()
    {
        return response()->json(LieuDepot::all() , 200);
    }
}

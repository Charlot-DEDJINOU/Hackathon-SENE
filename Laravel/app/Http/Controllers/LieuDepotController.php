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
            // Recherchez ou créez la ville et le quartier
            $ville = Ville::firstOrCreate(['nom_ville' => $request->input('ville')]);
            $quartier = Quartier::firstOrCreate(['nom_quartier' => $request->input('quartier')]);

            // Ajoutez les identifiants de ville et de quartier aux données de la demande
            $data = $request->all();
            $data['id_ville'] = $ville->id;
            $data['id_quartier'] = $quartier->id;

            // Créez un nouvel enregistrement LieuDepot
            $lieuDepot = LieuDepot::create($data);

            if ($lieuDepot) {
                return response()->json(['message' => "Ajout réussi"], 200);
            } else {
                return response()->json(['message' => "Échec de l'ajout. Une erreur s'est produite lors de l'ajout"], 201);
            }
    
        } catch (ValidationException $e) {
            return response()->json(['errors' => $e->errors()], 422);
        }
    }
}

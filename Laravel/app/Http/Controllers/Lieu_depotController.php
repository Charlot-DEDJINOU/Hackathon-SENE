<?php

namespace App\Http\Controllers;
use App\Models\Lieu_depot;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator ;

class Lieu_depotController extends Controller
{
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'designation' => 'required|string',
            'prix_unitaire' => 'required|numeric',
            'etat' => 'required',
            'type' => 'required',
            'url_image' => 'nullable|string',
            'caracterisque' => 'nullable|string',
            'quantite_stock' => 'nullable|integer',
            'publier' => 'nullable|boolean',
        ]);
        

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $data = $request->all();

        $lieu_depot = Lieu_depot::create($data);

        if ($lieu_depot) {
            return response()->json(['message' => 'Produit ajouté avec succes'], 200);
        } else {
            return response()->json(['message' => 'Echec d\'ajout'], 201);
        }
    }

    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required',
            'designation' => 'required|string',
            'prix_unitaire' => 'required|numeric',
            'etat' => 'required',
            'type' => 'required',
            'url_image' => 'nullable|string',
            'caracterisque' => 'nullable|string',
            'quantite_stock' => 'nullable|integer',
            'publier' => 'nullable|boolean',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $lieu_depot = lieu_depot::find($request->input('id'));

        if (!$lieu_depot)
            return response()->json(['message' => 'Ce produit n\'existe pas'], 404);

        $data = $request->all();
    
        if ($lieu_depot->update($data)) {
            return response()->json(['message' => 'Mise à jour réussie'], 200);
        } else {
            return response()->json(['message' => 'Echec de la mise à jour'], 400);
        }
    }
}

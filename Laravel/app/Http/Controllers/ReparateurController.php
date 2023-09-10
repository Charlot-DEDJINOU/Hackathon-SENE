<?php

namespace App\Http\Controllers;
use App\Http\Requests\ReparateurRequest;
use App\Models\Reparateur;
use App\Models\Quartier;
use App\Models\Ville;
use App\Models\Metier;
use Illuminate\Validation\ValidationException; 
use Carbon\Carbon;
use Illuminate\Http\Request;

class ReparateurController extends Controller
{
    public function create(ReparateurRequest $request)
    {
        try {
    
            $ville = Ville::firstOrCreate(['nom_ville' => $request->input('ville')]);

            Quartier::firstOrCreate([
                'nom_quartier' => $request->input('quartier') , 
                "id_ville" => $ville->id
            ]);

            Metier::firstOrCreate(["designation" => $request->input('metier')]);

            $user = Reparateur::where('id_utilisateur' , $request->input('id_utilisateur'))->first() ;

            if(!$user)
            {
                $data = $request->all();
                $data["fin_abonnement"] = Carbon::now()->addMonths(3); 

                $reparateur = Reparateur::Create($data);

                if ($reparateur->save()) 
                    return response()->json($reparateur , 200);
            
                return response()->json(['message' => "Échec de l'ajout. Une erreur s'est produite lors de l'ajout"], 201);
            }
 
            return response()->json($user , 200);
    
        } catch (ValidationException $e) {
            return response()->json(['errors' => $e->errors()], 422);
        }
    }

    public function read()
    {
        $reparateurs = Reparateur::with('user')->get();

        return response()->json($reparateurs, 200);
    }

    public function read_only(Request $request)
    {
        $id = $request->query('id');

        if($id)
        {
            $user = Reparateur::where('id_utilisateur' , $id)->first() ;

            if($user)
                return response()->json($user , 200);
            
            return response()->json(["message" => "Veuillez créer un compte"] , 203);

        }

        return response()->json(["message" => "Pourquoi tu essayes de crasher mon API ?"] , 203);
    }
}
<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'motdepasse');

        $user = User::where('email', $credentials['email'])->first();

        if (!$user)
            return response()->json(['message' => "Cet email est déjà associé à un compte"]) ;

        if(!Hash::check($credentials['motdepasse'], $user->motdepasse))
            return response()->json(['message' => "Mot de passe incorrect"]) ;

        $user->statut = 1;
        $user->save();

        return response()->json([
            'user' => $user
        ]);
    }

    public function logout(Request $request)
    {
        $user = User::where('id', $request->query('id'))->first();

        if ($user) {
            $user->statut = 0;
            $user->save();
        }

        return response()->json(['message' => 'Vous avez été déconnecté.']);
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nom' => 'nullable|string',
            'prenom' => 'required|string',
            'email' => 'required|email',
            'motdepasse' => 'required',
            'adresse' => 'nullable|string',
            'contact' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

       $user = User::where('email', $request->input('email'))->first() ;
       if($user)
            return response()->json(['message' => 'Email est déjà associé à un compte']) ;
        
        $data = $request->all() ;
        $data["motdepasse"] = bcrypt($data["motdepasse"]) ;

        $user = User::create($data);
        
        if ($user) {
            return response()->json(['message' => 'Inscription réussie'], 200);
        } else {
            return response()->json(['message' => 'Echec d\'inscription'], 201);
        }
    }

    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required',
            'nom' => 'nullable|string',
            'prenom' => 'required|string',
            'email' => 'required|email',
            'motdepasse' => 'required',
            'admin' => 'required',
            'adresse' => 'nullable|string',
            'contact' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::find($request->input('id'));

        if (!$user) {
            return response()->json(['message' => 'Cet utilisateur n\'existe pas'], 404);
        }

       $data = $request->all() ;
       $data["motdepasse"] = bcrypt($data["motdepasse"]) ;

        if ($user->update($data)) {
            return response()->json(['message' => 'Mise à jour réussie'], 200);
        } else {
            return response()->json(['message' => 'Echec de la mise à jour'], 400);
        }
    }

    public function getUser(Request $request)
    {
        $id = $request->query('id');

        if (isset($id)) {
            $user = User::find($id);

            if ($user) {
                return response()->json($user, 200);
            } else {
                return response()->json(['message' => 'Cet utilisateur n\'existe pas'], 201);
            }
        } else {
            return response()->json(['message' => 'Pas assez de données'], 404);
        }
    }

    public function getUsers()
    {
        $users = User::all();

        return response()->json($users, 200);
    }

}

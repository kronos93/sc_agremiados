<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\User;

class UsersController extends Controller
{
    public function __construct() 
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('users.users');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => 'required|string|min:6|confirmed',
        ]);
        $response = new \stdClass();

        if ($validator->fails()) {            
            $response->data = $validator->errors();
            $response->code = 4; //Error de validación
            $response->msg = 'Error de validación';
            return response()->json($response);
        } else {
            $user = new User();
            $user->name = $request->input('name');
            $user->f_last_name = $request->input('f_last_name');
            $user->m_last_name = $request->input('m_last_name');
            $user->email = $request->input('email');
            $user->password =  Hash::make($request->input('password'));
            if($user->save()){
                $response->data = $user;
                $response->code = 2; //Todo va bien
                $response->msg = 'Datos aceptados';
                return response()->json($response);
            } else {
                $response->data = [];
                $response->code = 49; //Error general
                $response->msg = 'Algo salió mal, verifique sus datos y conexión a Internet';
                return response()->json($response);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $users = User::get();
        $response = new \stdClass();
        $response->data = $users;
        return response()->json($response);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,'.$request->input('id'),
            //'password' => 'required|string|min:6|confirmed',
        ]);
        $response = new \stdClass();

        if ($validator->fails()) {            
            $response->data = $validator->errors();
            $response->code = 4; //Error de validación
            return response()->json($response);
        } else {
            $user = User::where('id',$request->input('id'))->first();
            $user->name = $request->input('name');
            $user->f_last_name = $request->input('f_last_name');
            $user->m_last_name = $request->input('m_last_name');
            $user->email = $request->input('email');
            $user->save(); 

            $response->data = $user;
            $response->code = 2; //Error de validación
            return response()->json($response);
        } 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

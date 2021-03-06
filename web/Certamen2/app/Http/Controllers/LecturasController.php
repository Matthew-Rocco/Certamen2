<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lectura;
class LecturasController extends Controller
{
    public function getLecturas(){
        $lecturas = Lectura::all();
        return $lecturas;
    }

    
    public function filtrarLecturas(Request $request){
        $input = $request->all();
        $filtro = $input["filtro"];
        $lecturas = Lectura::where("tipomedida", "=" , $filtro)->get();
        return $lecturas;
    }


    public function crearLectura(Request $request){
        $input = $request->all();
        $lectura = new Lectura();
        $lectura->fecha = $input["fecha"];
        $lectura->hora = $input["hora"];
        $lectura->medidor = $input["medidor"];
        $lectura->direccion = $input["direccion"];
        $lectura->valor = $input["valor"];
        $lectura->tipomedida = $input["tipomedida"];

        $lectura->save();
    }

    public function eliminarLectura(Request $request){
        $input = $request->all();
        $id = $input["id"];

        $lectura = Lectura::findOrFail($id);

        $lectura->delete();
        return "ok";
    }
}

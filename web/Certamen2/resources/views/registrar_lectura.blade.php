@extends("layouts.master")

@section('contenido')

    <div class="row mt-5">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header">
                    <span>Registro de Lectura</span>
                </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="fecha-date" class="form-label">Fecha</label>
                        <input type="date" id="fecha-date" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="hora-txt" class="form-label">Hora</label>
                        <input type="text" id="hora-txt" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="medidor-select" class="form-label">Medidor</label>
                        <select class="form-select" id="medidor-select">
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="direccion-txt" class="form-label">Dirección</label>
                        <input type="text" id="direccion-txt" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="valor-txt" class=form-label>Valor</label>
                        <input type="number" id="valor-txt" class="form-control">
                    </div>
                    <div class="bm-3">
                        <label for="tipomedida-select">Tipo de Medida</label>
                        <select class="form-select" id="tipomedida-select">
                            <option value="kilowatts">Kilowatts</option>
                            <option value="watts">Watts</option>
                            <option value="temperatura">Temperatura</option>
                        </select>
                    </div>
                </div>
                <div class="card-footer d-grip gap-1">
                    <button id="registrar-btn" class="btn btn-success">Registrar</button>
                </div>
            </div>
        </div>
    </div>

@endsection

@section('javascript')
    <script src="{{asset('js/servicios/lecturasService.js')}}"></script>
    <script src="{{asset('js/registrar_lectura.js')}}"></script>
@endsection
import { datosCita, nuevaCita } from "../funciones.js";

//Importar selectores
import { mascotaInput,
    fechaInput, 
    formulario, 
    horaInput, 
    sintomasInput, 
    propietarioInput, 
    telefonoInput 
} from "../selectores.js";

class App{
    constructor(){
        this.initApp();
    };

    initApp(){
        
        mascotaInput.addEventListener('change', datosCita);
        propietarioInput.addEventListener('change', datosCita);
        telefonoInput.addEventListener('change', datosCita);
        fechaInput.addEventListener('change', datosCita);
        horaInput.addEventListener('change', datosCita);
        sintomasInput.addEventListener('change', datosCita);

        //Formulario para nuevas citas
        formulario.addEventListener('submit', nuevaCita);
    };
};

export default App;
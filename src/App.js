import "./App.css";

function App() {
  // Función de validación de contraseña
  function validarContraseña(contraseña) {
    const longitudMinima = contraseña.length >= 8;
    const tieneMinuscula = /[a-z]/.test(contraseña);
    const tieneMayuscula = /[A-Z]/.test(contraseña);
    const tieneNumero = /\d/.test(contraseña);
    const tieneCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(contraseña);

    return (
      longitudMinima &&
      tieneMinuscula &&
      tieneMayuscula &&
      tieneNumero &&
      tieneCaracterEspecial
    );
  }

  // Función para mostrar el resultado de la validación
  function validarYMostrar() {
    const inputContraseña = document.getElementById("contraseña");
    const resultadoValidacion = document.getElementById("resultadoValidacion");

    if (validarContraseña(inputContraseña.value)) {
      resultadoValidacion.textContent = "La contraseña es válida.";
      resultadoValidacion.style.color = "green";
    } else {
      resultadoValidacion.textContent =
        "La contraseña no cumple con los requisitos.";
      resultadoValidacion.style.color = "red";
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>Validación de Contraseña</h2>
        <label for="contraseña">Introduce tu contraseña:</label>
        <input type="password" id="contraseña" onblur="validarYMostrar()" />
        <p id="resultadoValidacion" />
        <button onClick={validarYMostrar}>Validar</button>
      </header>
    </div>
  );
}

export default App;

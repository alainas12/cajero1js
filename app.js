document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const iniciarSesionButton = document.getElementById('iniciarSesion');
    const operacionesDiv = document.getElementById('operaciones');
    const cambioContrasenaForm = document.getElementById('cambioContrasenaForm');
    const saldoInicialP = document.getElementById('saldoInicial');
    const montoInput = document.getElementById('monto');
    const retirarButton = document.getElementById('retirar');
    const depositarButton = document.getElementById('depositar');
    const saldoFinalP = document.getElementById('saldoFinal');
    const cambiarContrasenaButton = document.getElementById('cambiarContrasena');
    const nuevaContrasenaInput = document.getElementById('nuevaContrasena');
    const guardarContrasenaButton = document.getElementById('guardarContrasena');
  
    let saldo = 1000;
    let usuarioAutenticado = false;
  
    iniciarSesionButton.addEventListener('click', function() {
      const usuario = document.getElementById('usuario').value;
      const contrasena = document.getElementById('contrasena').value;
  
      if (usuario === 'usuario' && contrasena === 'contrasena') {
        usuarioAutenticado = true;
        loginForm.style.display = 'none';
        operacionesDiv.style.display = 'block';
        actualizarSaldo();
      }
    });
  
    retirarButton.addEventListener('click', function() {
      if (!usuarioAutenticado) return;
  
      const monto = parseFloat(montoInput.value);
  
      if (isNaN(monto) || monto <= 0 || monto > saldo) {
        saldoFinalP.textContent = 'Monto inválido.';
      } else {
        saldo -= monto;
        actualizarSaldo();
      }
    });
  
    depositarButton.addEventListener('click', function() {
      if (!usuarioAutenticado) return;
  
      const monto = parseFloat(montoInput.value);
  
      if (isNaN(monto) || monto <= 0) {
        saldoFinalP.textContent = 'Monto inválido.';
      } else {
        saldo += monto;
        actualizarSaldo();
      }
    });
  
    cambiarContrasenaButton.addEventListener('click', function() {
      if (!usuarioAutenticado) return;
      operacionesDiv.style.display = 'none';
      cambioContrasenaForm.style.display = 'block';
    });
  
    guardarContrasenaButton.addEventListener('click', function() {
      const nuevaContrasena = nuevaContrasenaInput.value;
      if (nuevaContrasena) {
        cambiarContrasenaForm.style.display = 'none';
        operacionesDiv.style.display = 'block';
        alert('Contraseña cambiada exitosamente');
      }
    });
  
    function actualizarSaldo() {
      saldoInicialP.textContent = `Saldo: $${saldo}`;
      montoInput.value = '';
      saldoFinalP.textContent = '';
    }
  });
  
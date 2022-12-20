const url = 'http://localhost:8080/cuenta/';
const url1 = 'http://localhost:8080/cuenta/list';

const contenedor = document.querySelector('tbody');

let resultados = '';

const modalCuenta = new bootstrap.Modal(document.getElementById('modalCuenta'));
const formCuenta = document.querySelector('form');
const idCuenta = document.getElementById('id-cuenta');
const fechaApertura = document.getElementById('fecha-apertura');
const saldoCuenta = document.getElementById('saldo-cuenta');
const idCliente = document.getElementById('id');
let opcion = '';

btnCrearC.addEventListener('click', () => {
  idCuenta.value = '';
  fechaApertura.value = '';
  saldoCuenta.value = '';
  /*idCliente.value = '';*/
  idCuenta.disabled = false;
  /*idCliente.disabled = false;*/
  modalCuenta.show();
  opcion = 'crear';
});

const mostrar = (Cuenta) => {
  Cuenta.forEach((cuenta) => {
    resultados += `<tr>
                        <td >${cuenta.id_cuenta}</td>
                        <td >${cuenta.fecha_apertura}</td>
                        <td >${cuenta.saldo_cuenta}</td>
                        <td class="text-center" width="20%"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-light">Borrar</a></td>
                    </tr>`;
  });

  contenedor.innerHTML = resultados;
};

fetch(url1)
  .then((response) => response.json())
  .then((data) => mostrar(data))
  .catch((error) => console.log(error));

const on = (element, event, selector, handler) => {
  element.addEventListener(event, (e) => {
    if (e.target.closest(selector)) handler(e);
  });
};

on(document, 'click', '.btnBorrar', (e) => {
  const fila = e.target.parentNode.parentNode;
  const id = fila.firstElementChild.innerHTML;
  console.log(id);

  alertify.confirm(
    'Desea eliminar la cuenta ' + id,
    function () {
      fetch(url + id, {
        method: 'DELETE',
      }).then(() => location.reload());
    },
    function () {
      alertify.error('Cancel');
    }
  );
});

let idForm = 0;
on(document, 'click', '.btnEditar', (e) => {
  const fila = e.target.parentNode.parentNode;

  idForm = fila.children[0].innerHTML;
  const cuenta = fila.children[1].innerHTML;
  const saldo = fila.children[2].innerHTML;
  idCuenta.value = idForm;
  idCuenta.disabled = true;
  fechaApertura.value = cuenta;
  saldoCuenta.value = saldo;
  /*idCliente.value = idCliente;*/

  opcion = 'editar';
  modalCuenta.show();
});

formCuenta.addEventListener('submit', (e) => {
  e.preventDefault();

  if (opcion == 'crear') {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_cuenta: idCuenta.value,
        fecha_apertura: fechaApertura.value,
        saldo_cuenta: saldoCuenta.value,
        /*id_cliente: idCliente.value,*/
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const nuevaCuenta = [];
        nuevaCuenta.push(data);
        mostrar(nuevaCuenta);
      });
  }
  if (opcion == 'editar') {
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_cuenta: idCuenta.value,
        fecha_apertura: fechaApertura.value,
        saldo_cuenta: saldoCuenta.value,
        /*id_cliente: idCliente.value,*/
      }),
    }).then((response) => location.reload());
  }
  modalCuenta.hide();
});

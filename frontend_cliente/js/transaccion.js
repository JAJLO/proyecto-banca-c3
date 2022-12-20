/*const url = 'http://localhost:8080/transaccion/';
const url1 = 'http://localhost:8080/transaccion/list';

const contenedor = document.querySelector('tbody');

let resultados = '';

const modalTransaccion = new bootstrap.Modal(
  document.getElementById('modalTransaccion')
);
const formTransaccion = document.querySelector('form');
const idTransaccion = document.getElementById('id-transaccion');
const fechaTransaccion = document.getElementById('fecha-transaccion');
const valorTransaccion = document.getElementById('valor-transaccion');
const tipoTransaccion = document.getElementById('tipo-transaccion');

let opcion = '';

btnCrearDep.addEventListener('click', () => {
  idTransaccion.value = '';
  fechaTransaccion.value = '';
  valorTransaccion.value = '';
  tipoTransaccion.value = '';
  idTransaccion.disabled = false;
  modalTransaccion.show();
  opcion = 'crear';
});

const mostrar = (Transaccion) => {
  Transaccion.forEach((Transaccion) => {
    resultados += `<tr>
                        <td >${Transaccion.id_transaccion}</td>
                        <td >${Transaccion.fecha_transaccion}</td>
                        <td >${Transaccion.valor_transaccion}</td>
                        <td >${Transaccion.tipo_transaccion}</td>
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
    'Desea cancelar la transaccion ' + id,
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
  const fechaTransaccion = fila.children[1].innerHTML;
  const valorTransaccion = fila.children[2].innerHTML;
  const tipoTransaccion = fila.children[3].innerHTML;
  idTransaccion.value = idForm;
  idTransaccion.disabled = true;
  fechaTransaccion.value = fechaTransaccion;
  valorTransaccion.value = valorTransaccion;
  tipoTransaccion.value = tipoTransaccion;

  opcion = 'editar';
  modalTransaccion.show();
});

formTransaccion.addEventListener('submit', (e) => {
  e.preventDefault();

  if (opcion == 'crear') {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_transaccion: idTransaccion.value,
        fecha_transaccion: fechaTransaccion.value,
        valor_transaccion: valorTransaccion.value,
        tipo_transaccion: tipoTransaccion.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const nuevoTransaccion = [];
        nuevoTransaccion.push(data);
        mostrar(nuevoTransaccion);
      });
  }
  if (opcion == 'editar') {
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_transaccion: idTransaccion.value,
        fecha_transaccion: fechaTransaccion.value,
        valor_transaccion: valorTransaccion.value,
        tipo_transaccion: tipoTransaccion.value,
      }),
    }).then((response) => location.reload());
  }
  modalTransaccion.hide();
});*/

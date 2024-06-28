//Login - Modal Inicial - Mostrar numero de habitación
document.addEventListener("DOMContentLoaded", function () {
  const roomNumber = getCookie("roomNumber");
  const roomNumberElement = document.getElementById("roomNumber");

    if(roomNumber) {
      showRoomNumber(roomNumber);
    }else {
      const modal = document.createElement("div");
      modal.classList.add("modal", "room-modal");
      modal.innerHTML = `
        <div class="room-modal-content modal-content">
          <center><img class="logo" src="https://infinitegroup.com.do/wp-content/uploads/infinitegroup_Mesa-de-trabajo-1.png" width="40%"></center>
          <form id="roomForm">
            <label for="userName">Nombre y Apellido:</label>
            <input type="text" id="userName" name="userName" required>
<label for="roomNumber">Número de Habitación:</label>
            <input type="text" id="roomNumber" name="roomNumber" required>
            <label for="expiryDate">Fecha de Salida:</label>
            <input type="date" id="expiryDate" name="expiryDate" required >
            <button type="submit" id="submitBtn" class="btn btn-primary">Iniciar Sesión</button>
            <div id="loading" class="spinner-border text-primary mt-2 d-none" role="status">
              <span class="sr-only">Verificando...</span>
            </div>
          </form>
          <h1 id="welcomeMsg" class="mt-3 d-none">¡Bienvenido a Aladino!</h1>
          </div>`;

      document.body.appendChild(modal);

      var now = new Date(),
      // minimum date the user can choose, in this case now and in the future
      minDate = now.toISOString().substring(0, 10);

      $('#expiryDate').prop('min', minDate);

      const form = document.getElementById("roomForm");
      const loading = document.getElementById("loading");
      const welcomeMsg = document.getElementById("welcomeMsg");

      form.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        const roomValue = formData.get("roomNumber");
        const nameValue = formData.get("userName");
        const passwordValue = formData.get("password");
        const expiryDateValue = formData.get("expiryDate");

        loading.classList.remove("d-none"); // Show loading spinner

        // Simulating a delay for the sake of demonstration (remove this in actual implementation)
        setTimeout(() => {
          fetch("https://brandlink.me/custom-pages/auth.php", {
            method: "POST",
            body: JSON.stringify({ roomNumber: roomValue, password: passwordValue }),
            headers: { "Content-Type": "application/json" }
          })
          .then(response => response.json())
          .then(data => {
            if (data && data.valid === true) {
              setCookie("roomNumber", roomValue, new Date(expiryDateValue));
              setCookie("userName", nameValue, new Date(expiryDateValue));
              setCookie("checkoutDate", expiryDateValue, new Date(expiryDateValue));
              form.classList.add("d-none"); // Hide form on success
              welcomeMsg.classList.remove("d-none"); // Show welcome message
              showRoomNumber(roomValue);

              setTimeout(() => {
                $(modal).fadeOut(); // jQuery used for fading out the modal
              }, 2000); // Fading out after 2 seconds (adjust as needed)
            } else {
              alert("Contraseña invalida. Inténtalo de nuevo."); // Show error message
            }
          })
          .catch(error => {
            console.error("Error:", error);
            alert("Ocurrió un error. Por favor, inténtelo de nuevo más tarde");
          })
          .finally(() => {
            loading.classList.add("d-none"); // Hide loading spinner
          });
        }, 1500); // Simulated delay (remove this in actual implementation)
      });

      modal.style.display = "block"; // Show the modal
    }

    //Function to display room number in the front end
    function showRoomNumber(room_number) {
      roomNumberElement.textContent = `Habitación ${room_number}`
      roomNumberElement.style.display = "block";
    }
});

// Function to set a cookie with an expiration date
function setCookie(name, value, expiryDate) {
  const expires = "expires=" + expiryDate.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie by name
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

/*    start webpushr code
(function (w, d, s, id) {
  if (typeof (w.webpushr) !== 'undefined') return;
  w.webpushr = w.webpushr || function () {
    (w.webpushr.q = w.webpushr.q || []).push(arguments)
  };

  var js, fjs = d.getElementsByTagName(s)[0];
      js = d.createElement(s);
      js.id = id;
      js.async = 1;
      js.src = "https://cdn.webpushr.com/app.min.js";
      fjs.parentNode.appendChild(js);
    }(window, document, 'script', 'webpushr-jssdk'));
    webpushr('setup', {
      'key': 'BPZwm6l1PG1ypusTqzS9c32qF-8wTLsVg8j7wdeBVeQ0-SElDQrwrW-o2Px_eAyA3Vwn9zPT0XyNRq4ZYgOusFM'
    });

function _webpushrScriptReady() {
  webpushr('fetch_id', function (sid) {
    if (sid) {
      console.log('Subscriber id is set: ' + sid);
      const roomNumberCookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith('roomNumber='))
        ?.split("=")[1];
      const checkoutCookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith('checkoutDate='))
        ?.split("=")[1];
        if (roomNumberCookieValue) {
          console.log('Room Is set: ' + roomNumberCookieValue);
          webpushr('attributes', {
            "NumeroDeHabitacion": roomNumberCookieValue,
            "FechaCheckout": checkoutCookieValue
          });
        }
      } else {
        console.log('Subscriber id is not set.')
      }
    });
}

function webpushrPermissionAction(permission_action) {
  if (permission_action == 'granted') {
    console.log('permission granted');
  } else {
    console.log('permission status => ' + permission_action)
  }
};
  end webpushr code */
// Traslate
function aldn_r_card_prof__traslate(){var b="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg";var g="Spanish",f="-en/";var e=window.location.pathname,d=window.location.search;var a=document.createElement("div");var h=document.createAttribute("style");h.value="position:fixed;top:15px;right:20px;width:30px;z-index: 9999;";a.setAttributeNode(h);if( e.slice(-4) == f ) {e=e.replace(f,"/");b="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg";g="English"}else if ( e.slice(-3) == f.slice(0, -1) ){e=e.replace( f.slice(0, -1),"/");b="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg";g="English"}else{if(e.charAt(e.length-1)=="/"){e=e.slice(0,-1)+f}else{e=e+f}}var c=e+d;console.log("Current Lang: "+g);a.innerHTML='<a href="'+c+'"><img src="'+b+'" alt="'+g+'" class="flag" style="width:30px;cursor:pointer;"></a>';document.body.appendChild(a);}
document.addEventListener("DOMContentLoaded",function(){ aldn_r_card_prof__traslate();});
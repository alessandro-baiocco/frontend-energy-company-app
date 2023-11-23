import { useNavigate } from "react-router-dom";

export const GET_CLIENTS = "GET_CLIENTS";
export const GET_AUTHORIZATION = "GET_AUTHORIZATION";
export const GET_ME = "GET_ME";
export const GET_ADDRESS = "GET_ADDRESS";

//Utlizzo per fare il login

export const postUserToken = (emailPAss) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailPAss),
      });
      if (resp.ok) {
        let myToken = await resp.json();
        console.log(myToken.accessToken);

        dispatch({ type: GET_AUTHORIZATION, payload: myToken.accessToken });
        try {
          let resp = await fetch("http://localhost:8080/users/me", {
            headers: {
              Authorization: "Bearer " + myToken.accessToken,
            },
          });
          if (resp.ok) {
            let me = await resp.json();
            console.log(me);
            dispatch({ type: GET_ME, payload: me });
          } else {
            console.log("error");

            alert("Errore nel reperimento dei dati utente ");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("error");

        alert("Errore nel reperimento del token ");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//get sui clienti

export const getClients = (auth) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("http://localhost:8080/clients", {
        headers: {
          Authorization: "Bearer " + auth,
        },
      });
      if (resp.ok) {
        let myClientFetched = await resp.json();
        console.log(myClientFetched);
        dispatch({ type: GET_CLIENTS, payload: myClientFetched });
      } else {
        console.log("error");
        alert("Errore nel reperimento dei dati clienti ");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// prendo regioni, provincia
export const getAddress = (auth) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("http://localhost:8080/regions", {
        headers: {
          Authorization: "Bearer " + auth,
        },
      });
      if (resp.ok) {
        let address = await resp.json();
        console.log(address);
        dispatch({ type: GET_ADDRESS, payload: address });
      } else {
        console.log("error");
        alert("Errore nel reperimento degli address ");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

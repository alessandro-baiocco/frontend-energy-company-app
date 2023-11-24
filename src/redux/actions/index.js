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

            alert("resp.ok", resp.ok);
          }
        } catch (error) {
          console.log(error);
          alert("errore reperimento utente");
        }
      } else {
        console.log("error");
        alert("email o password sbagliati!");
      }
    } catch (error) {
      console.log(error);
      alert("email o password sbagliati!");
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
        dispatch({ type: GET_CLIENTS, payload: myClientFetched.content });
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

//get client minFatturato
export const getClientMinFatturato = (auth, minFatturato) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("http://localhost:8080/clients/minfatturato?minFatturato=" + minFatturato, {
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

//get client maxFatturato
export const getClientMaxFatturato = (auth, maxFatturato) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("http://localhost:8080/clients/maxfatturato?maxFatturato=" + maxFatturato, {
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
//get client maxFatturato
export const getClientRangeFatturato = (auth, minFatturato, maxFatturato) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        "http://localhost:8080/clients/fatturato?minFatturato=" + minFatturato + "&maxFatturato=" + maxFatturato,
        {
          headers: {
            Authorization: "Bearer " + auth,
          },
        }
      );
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

//get client nome
export const getClientNomeContatto = (auth, name) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("http://localhost:8080/clients/nomeContatto?name=" + name, {
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
export const getClientMinDataInserimento = (auth, minDataInserimento) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("http://localhost:8080/clients/minInserimento?to=" + minDataInserimento, {
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
export const getClientMaxDataInserimento = (auth, maxDataInserimento) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("http://localhost:8080/clients/maxInserimento?from=" + maxDataInserimento, {
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

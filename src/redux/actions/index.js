import { useNavigate } from "react-router-dom";

export const GET_CLIENTS = "GET_CLIENTS";
export const GET_AUTHORIZATION = "GET_AUTHORIZATION";
export const GET_ME = "GET_ME";
export const GET_ADDRESS = "GET_ADDRESS";
export const REMOVE_CLIENT = "REMOVE_CLIENT";
export const ADD_CLIENT = "ADD_CLIENT";
export const FETCH_FATTURE = "FETCH_FATTURE";
export const DELETE_FATTURE = "DELETE_FATTURE";
export const PUT_FATTURE = "PUT_FATTURE";
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
//get client range
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

export const getClientRangeDataInserimento = (auth, minInserimento, maxInserimento) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        "http://localhost:8080/clients/dataDiInserimento?to=" + minInserimento + "&from=" + maxInserimento,
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

export const deleteClient = (auth, id) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("http://localhost:8080/clients/" + id, {
        headers: {
          Authorization: "Bearer " + auth,
        },
        method: "DELETE",
      });
      if (resp.ok) {
        console.log(resp);
        dispatch({ type: REMOVE_CLIENT, payload: id });
      } else {
        console.log("error");
        alert("Errore nel reperimento dei dati clienti ");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addClient = (auth, client) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("http://localhost:8080/clients/", {
        headers: {
          Authorization: "Bearer " + auth,
        },
        method: "POST",
        body: JSON.stringify(client),
      });
      if (resp.ok) {
        dispatch({ type: ADD_CLIENT, payload: client });
      } else {
        console.log("error");
        alert("Errore nel reperimento dei dati clienti ");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// fetch fatture
export const fetchFattura = (auth, id) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("http://localhost:8080/fattura", {
        headers: {
          Authorization: "Bearer " + auth,
        },
      });
      if (resp.ok) {
        const fatture = await resp.json();
        console.log(fatture);
        dispatch({ type: FETCH_FATTURE, payload: fatture.content });
      } else {
        console.log("error");
        alert("Errore nel reperimento dei dati clienti ");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//fetch fatture da ID cliente , stato

export const filterFatture = (url, auth, dato) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(url + dato, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      });
      if (resp.ok) {
        const fatture = await resp.json();
        console.log(fatture);
        dispatch({ type: FETCH_FATTURE, payload: fatture });
      } else {
        console.log(resp.status);
        alert("errore " + resp.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterDataFatture = (url, auth, minData, maxData) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(url + "?minData=" + minData + "&maxData=" + maxData, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      });
      if (resp.ok) {
        const fatture = await resp.json();
        console.log(fatture);
        dispatch({ type: FETCH_FATTURE, payload: fatture });
      } else {
        console.log(resp.status);
        alert("errore " + resp.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterAnnoFatture = (url, auth, minAnno, maxAnno) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(url + "?minAnno=" + minAnno + "&maxAnno=" + maxAnno, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      });
      if (resp.ok) {
        const fatture = await resp.json();
        console.log(fatture);
        dispatch({ type: FETCH_FATTURE, payload: fatture });
      } else {
        console.log(resp.status);
        alert("errore " + resp.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterImportoFatture = (url, auth, minImporto, maxImporto) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(url + "?minImporto=" + minImporto + "&maxImporto=" + maxImporto, {
        headers: {
          Authorization: "Bearer " + auth,
        },
      });
      if (resp.ok) {
        const fatture = await resp.json();
        console.log(fatture);
        dispatch({ type: FETCH_FATTURE, payload: fatture });
      } else {
        console.log(resp.status);
        alert("errore " + resp.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// delete fattura

export const deleteFattura = (auth, id) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("http://localhost:8080/fattura/" + id, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + auth,
        },
      });
      if (resp.ok) {
        dispatch({ type: DELETE_FATTURE, payload: id });
      } else {
        console.log(resp.status);
        alert("errore " + resp.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//put fattura
export const putFattura = (auth, body, id) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("http://localhost:8080/fattura/" + id, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          Authorization: "Bearer " + auth,
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        dispatch({ type: PUT_FATTURE, payload: id });
      } else {
        console.log(resp.status);
        alert("errore " + resp.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

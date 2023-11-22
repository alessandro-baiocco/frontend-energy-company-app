export const GET_CLIENTS = "GET_CLIENTS";
export const GET_AUTHORIZATION = "GET_AUTHORIZATION";

export const getClients = (auth) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch("http://localhost:8080/clients", {
        method: "GET",
        headers: {
          Authorization: auth,
        },
      });
      if (resp.ok) {
        let myClientFetched = await resp.json();
        dispatch({ type: GET_CLIENTS, payload: myClientFetched });
      } else {
        console.log("error");
        alert("Errore nel reperimento dei dati experience ");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

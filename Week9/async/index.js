const asyncMethod = async (typeError) => {
  try {
    // FETCH
    return "hola";

    // throw new Error("este es el error 1");
  } catch (error) {
    return error.message;
  }
};

// Promises

const methodPromise = () => {
  asyncMethod()
    // IT WORKS
    .then((response) => {
      console.log("SUCESS", response);
    })
    // ERROR
    .catch((err) => {
      console.error("ERROR", err);
    });
};

// ASYNC AWAIT

const methodAsyncAwait = async () => {
  try {
    const response = await asyncMethod();
    console.log(response);

    console.log(response.split(""));
  } catch (error) {
    console.log("error a mostrar", error);
  }
};
// methodPromise();

methodAsyncAwait();

// ERROR TRY CATCH

const splitWord = (word) => {
  try {
    // COMPROBADORES DE LA FUNCION
    if (typeof word !== string) {
      throw new Error("esto no es una palabra");
    }
    if (word.length < 5) {
      throw new Error("Necesitas al menos 5 letras");
    }

    // RETURN DE LA FUNCION
    return word.split("");
  } catch (error) {
    document.getElementById("alert").style = "display: block";
    document.getElementById("alert").innerHTML = error.message;
  }
};

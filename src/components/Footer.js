import React from "react";
import "./Footer.css";

export default () => {
  return (
    <div className="page--footer">
      Feito com{" "}
      <span role="img" aria-label="heart">
        ❤️ por <a href="https://github.com/Nicolle-Dias">Nicolle Dias</a>{" "}
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/transgender-flag_1f3f3-fe0f-200d-26a7-fe0f.png"
          height="25"
          width="25"
        />{" "}
        <br />
        Direitos de imagem para Netflix <br />
        Dados dos filmes/séries gerados através da API do site{" "}
        <a href="https://www.themoviedb.org/">themoviedb.org</a>
      </span>{" "}
    </div>
  );
};

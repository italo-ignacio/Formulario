export const verificarDataNascimento = (data: string) => {
  if (data === "Não trabalha" || data === "Nunca trabalhou" || data === "n") {
    return "2001-05-08";
  }
  var dia = data.split("/")[0];
  var mes = data.split("/")[1];
  var ano = data.split("/")[2];
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();

  if (parseInt(ano) >= 1900 && parseInt(ano) <= anoAtual) {
    return ano + "-" + ("0" + mes).slice(-2) + "-" + ("0" + dia).slice(-2);
  } else {
    return "-" + ("0" + mes).slice(-2) + "-" + ("0" + dia).slice(-2);
  }
};

export const verificarDataTermino = (data: string) => {
  if (data === "Não trabalha" || data === "Nunca trabalhou" || data === "n") {
    return "2001-05-08";
  }
  var dia = data.split("/")[0];
  var mes = data.split("/")[1];
  var ano = data.split("/")[2];
  if (parseInt(ano) >= 1900) {
    return ano + "-" + ("0" + mes).slice(-2) + "-" + ("0" + dia).slice(-2);
  } else {
    return "-" + ("0" + mes).slice(-2) + "-" + ("0" + dia).slice(-2);
  }
};

export const verificarDataDeseja = (data: string) => {
  var dia = data.split("/")[0];
  var mes = data.split("/")[1];
  var ano = data.split("/")[2];
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  if (parseInt(ano) >= anoAtual) {
    return ano + "-" + ("0" + mes).slice(-2) + "-" + ("0" + dia).slice(-2);
  } else {
    return "-" + ("0" + mes).slice(-2) + "-" + ("0" + dia).slice(-2);
  }
};

export const telMask = (value: string) => {
  if (value.replace("_", "").length >= 15) {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  } else {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  }
};

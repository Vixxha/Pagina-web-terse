export interface CompanyInfo {
  name: string;
  fullName: string;
  logo: string;
  email: string;
  whatsapp1: {
    display: string;
    number: string;
    message: string;
  };
  whatsapp2: {
    display: string;
    number: string;
    message: string;
  };
  address: string;
  commune: string;
  dispatchAddress: string;
  dispatchCommune: string;
  city: string;
  country: string;
  googleMapsPhotosphereUrl: string;
  schedule: string;
  maps: {
    office: string;
    dispatch: string;
  };
}

export const companyInfo: CompanyInfo = {
  name: "Terse Limitada",
  fullName: "Terse Limitada",
  logo: "/Catalogo-image/logo-terse.webp",
  email: "Ventas@terse.cl",
  whatsapp1: {
    display: "+56 9 9743 6137",
    number: "56997436137",
    message: "Hola Terse Limitada, me gustaría solicitar una cotización.",
  },
  whatsapp2: {
    display: "+56 9 7816 1717",
    number: "56978161717",
    message: "Hola Terse Limitada, me gustaría solicitar una cotización.",
  },
  address: "Caballo Chileno 6402 Dept 23 A",
  commune: "La Florida",
  dispatchAddress: "Santa Inés 1806",
  dispatchCommune: "La Florida (Condominio Santa Inés)",
  city: "Región Metropolitana",
  country: "Chile",
  googleMapsPhotosphereUrl: "https://www.google.com/local/place/fid/0x9662d05b784b68ef:0xf4ef52f98c56b230/photosphere?iu=https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid%3DQB6yatb3XBe1Kw2a5Sj8Wg%26cb_client%3Dsearch.gws-prod.gps%26yaw%3D355.06116%26pitch%3D0%26thumbfov%3D100%26w%3D0%26h%3D0&ik=CAISFlFCNnlhdGIzWEJlMUt3MmE1U2o4V2c%3D&sa=X&ved=2ahUKEwi715TcwumUAxUhppUCHTGOBZMQpx96BAg7EAQ",
  schedule: "Lunes a Viernes: 9:00 - 18:30 | Sábado: 10:00 - 14:00",
  maps: {
    office: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.579522049542!2d-70.59233348842714!3d-33.512315300572446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d05b3b09769b%3A0x5e2de93986dc49c0!2sCaballo%20Chileno%206402%2C%208242108%20La%20Florida%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1781118315774!5m2!1ses-419!2scl",
    dispatch: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.4138666215504!2d-70.55570328842585!3d-33.542621802127904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d1004c03b54f%3A0xe5443943eac13a76!2sCondominio%20Santa%20In%C3%A9s!5e0!3m2!1ses-419!2scl!4v1781118572046!5m2!1ses-419!2scl"
  }
};

export const getWhatsAppLink = (number: string, text: string) => {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
};

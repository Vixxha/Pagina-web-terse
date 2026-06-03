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
  city: string;
  country: string;
  googleMapsPhotosphereUrl: string;
  schedule: string;
}

export const companyInfo: CompanyInfo = {
  name: "Terse Limitada",
  fullName: "Terse Limitada",
  logo: "/Catalogo-image/logo terse.webp",
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
  address: "Av. Américo Vespucio Sur 1450",
  commune: "Las Condes",
  city: "Santiago",
  country: "Chile",
  googleMapsPhotosphereUrl: "https://www.google.com/local/place/fid/0x9662d05b784b68ef:0xf4ef52f98c56b230/photosphere?iu=https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid%3DQB6yatb3XBe1Kw2a5Sj8Wg%26cb_client%3Dsearch.gws-prod.gps%26yaw%3D355.06116%26pitch%3D0%26thumbfov%3D100%26w%3D0%26h%3D0&ik=CAISFlFCNnlhdGIzWEJlMUt3MmE1U2o4V2c%3D&sa=X&ved=2ahUKEwi715TcwumUAxUhppUCHTGOBZMQpx96BAg7EAQ",
  schedule: "Lunes a Viernes: 9:00 - 18:30 | Sábado: 10:00 - 14:00",
};

export const getWhatsAppLink = (number: string, text: string) => {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
};

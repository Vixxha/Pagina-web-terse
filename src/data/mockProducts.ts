export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  details?: string[];
  featured: boolean;
}

export const mockProducts: Product[] = [
  // 1. Chaquetas (13 productos)
  {
    id: "chaqueta-1",
    name: "Chaqueta 3 en 1 Basic ML Hombre",
    category: "Chaquetas",
    image: "/Catalogo-image/chaqueta-3-en-1-basic-ml-hombre.webp",
    description: "Chaqueta impermeable 3 en 1 para hombre con micropolar interior desmontable. Ideal para condiciones climáticas variables, viento y lluvia moderada. Ofrece un aislamiento térmico óptimo.",
    details: ["Micropolar interior desmontable", "Impermeable y cortaviento", "Bolsillos con cierre", "Puños ajustables"],
    featured: true
  },
  {
    id: "chaqueta-2",
    name: "Chaqueta 3 en 1 Basic ML Mujer",
    category: "Chaquetas",
    image: "/Catalogo-image/chaqueta-3-en-1-basic-ml-mujer.webp",
    description: "Chaqueta impermeable 3 en 1 para mujer con micropolar interior desmontable. Calce entallado femenino, máxima protección contra el frío y la lluvia con excelente respirabilidad.",
    details: ["Calce entallado femenino", "Micropolar interior acoplable", "Costuras reforzadas", "Capucha ajustable desmontable"],
    featured: true
  },
  {
    id: "chaqueta-3",
    name: "Chaqueta Executive Knit Fleece Hombre",
    category: "Chaquetas",
    image: "/Catalogo-image/chaqueta-executive-knit-fleece-hombre.webp",
    description: "Chaqueta térmica de diseño corporativo elegante en tejido knit fleece para hombre. Excelente aislamiento térmico, tacto agradable y estilo profesional óptimo para oficinas o terreno.",
    details: ["Tejido Knit Fleece premium", "Aislamiento térmico superior", "Bolsillos frontales con cremallera", "Cuello alto protector"],
    featured: true
  },
  {
    id: "chaqueta-4",
    name: "Chaqueta Executive Knit Fleece Mujer",
    category: "Chaquetas",
    image: "/Catalogo-image/chaqueta-executive-knit-fleece-mujer.webp",
    description: "Chaqueta térmica de diseño corporativo elegante en tejido knit fleece para mujer. Calce estilizado, comodidad excepcional y apariencia corporativa premium.",
    details: ["Diseño entallado para mujer", "Tejido suave de alta densidad", "Cierre completo reforzado", "Bolsillos invisibles con cierre"],
    featured: true
  },
  {
    id: "chaqueta-5",
    name: "Chaqueta Executive Trade Hombre ML",
    category: "Chaquetas",
    image: "/Catalogo-image/chaqueta-executive-trade-hombre-ml.webp",
    description: "Chaqueta de presentación corporativa manga larga para hombre. Confeccionada con telas de alta durabilidad, terminaciones premium y un look formal pero funcional.",
    details: ["Estilo formal corporativo", "Tela resistente al desgaste", "Forro interior premium", "Puños y pretina semi-ajustados"],
    featured: false
  },
  {
    id: "chaqueta-6",
    name: "Chaqueta Executive Trade Mujer ML",
    category: "Chaquetas",
    image: "/Catalogo-image/chaqueta-executive-trade-mujer-m-l.webp",
    description: "Chaqueta de presentación corporativa manga larga para mujer. Resalta la imagen institucional con un corte moderno, calce cómodo y excelente caída de tela.",
    details: ["Corte corporativo estilizado", "Material suave de planchado fácil", "Bolsillos interiores prácticos", "Costuras invisibles de alta calidad"],
    featured: false
  },
  {
    id: "chaqueta-7",
    name: "Chaqueta Ignífuga Antiácida 100% Algodón Manga Larga Hombre",
    category: "Chaquetas",
    image: "/Catalogo-image/chaqueta-ignifuga-antiacida-100-algodon-manga-larga-hombre.webp",
    description: "Chaqueta de seguridad industrial para hombre. Protección certificada contra arco eléctrico, fuego repentino y salpicaduras de ácidos. Confeccionada en algodón resistente.",
    details: ["100% Algodón con tratamiento técnico", "Propiedades ignífugas certificadas", "Protección química antiácida", "Cierre de seguridad con solapa"],
    featured: true
  },
  {
    id: "chaqueta-8",
    name: "Chaqueta Ignífuga Antiestática Technic ML Hombre 100% Algodón",
    category: "Chaquetas",
    image: "/Catalogo-image/chaqueta-ignifuga-antiestatica-technic-m-l-hombre-100-alg.webp",
    description: "Chaqueta técnica de protección eléctrica y térmica para hombre. Minimiza el riesgo de descargas electrostáticas y quemaduras en ambientes industriales y de minería.",
    details: ["Fibras antiestáticas integradas", "Hilos ignífugos de alta resistencia", "Certificación internacional de seguridad", "Bolsillos frontales con broches seguros"],
    featured: false
  },
  {
    id: "chaqueta-9",
    name: "Chaqueta Softshell Basic Hombre",
    category: "Chaquetas",
    image: "/Catalogo-image/chaqueta-softshell-basic-hombre.webp",
    description: "Chaqueta softshell clásica para hombre. Altamente cortaviento y repelente al agua, cuenta con un forro interior de micropolar que retiene el calor corporal de manera eficiente.",
    details: ["Membrana repelente al agua", "Interior micropolar térmico", "Tejido elástico en 4 direcciones", "Cierres impermeables"],
    featured: true
  },
  {
    id: "chaqueta-10",
    name: "Chaqueta Softshell Basic Mujer",
    category: "Chaquetas",
    image: "/Catalogo-image/chaqueta-softshell-basic-mujer.webp",
    description: "Chaqueta softshell clásica para mujer. Entrega una excelente protección contra el viento y lloviznas con un calce cómodo, liviano y con diseño ergonómico.",
    details: ["Calce anatómico para mujer", "Cortaviento y respirable", "Puños ajustables con velcro", "Mentonera protegida contra roces"],
    featured: true
  },
  {
    id: "chaqueta-11",
    name: "Chaqueta Softshell Rhelmu ML Hombre 100% Poliéster",
    category: "Chaquetas",
    image: "/Catalogo-image/chaqueta-softshell-rhelmu-ml-hombre-100-poly (2).webp",
    description: "Chaqueta softshell técnica modelo Rhelmu para hombre. Confección de alta durabilidad en poliéster de alta densidad con membrana impermeable y gran flexibilidad.",
    details: ["Modelo técnico Rhelmu", "100% Poliéster de alta densidad", "Resistencia extrema al agua", "Bolsillo en el pecho con cierre"],
    featured: false
  },
  {
    id: "chaqueta-12",
    name: "Chaqueta Softshell Rhelmu Mujer Manga Larga 100% Poliéster",
    category: "Chaquetas",
    image: "/Catalogo-image/chaqueta-softshell-rhelmu-mujer-mlarga-100-poly (1).webp",
    description: "Chaqueta softshell técnica modelo Rhelmu para mujer. Excelente movilidad y aislamiento térmico adaptado para actividades corporativas dinámicas o terreno exigente.",
    details: ["Modelo técnico Rhelmu mujer", "Membrana interna cortaviento", "Bolsillos laterales con cremallera", "Costuras planas ergonómicas"],
    featured: false
  },
  {
    id: "chaqueta-13",
    name: "Chaqueta Térmica Navigator ML Hombre High-Tech",
    category: "Chaquetas",
    image: "/Catalogo-image/chaqueta-termica-navigator-ml-hombre-high-tech.webp",
    description: "Chaqueta térmica de alta tecnología para hombre. Cuenta con un relleno aislante sintético ultraliviano de alta retención térmica y tejido externo repelente al agua.",
    details: ["Tecnología térmica High-Tech", "Relleno térmico ultraliviano", "Tejido exterior repelente al agua", "Capucha ajustable y compactable"],
    featured: true
  },

  // 2. Micropolares (8 productos)
  {
    id: "micropolar-1",
    name: "Micropolar Expedition ML Hombre 100% Poliéster",
    category: "Micropolares",
    image: "/Catalogo-image/micropolar-expedition-ml-hombre-100-poly.webp",
    description: "Micropolar de expedición manga larga para hombre. Tejido grueso con tratamiento antibolitas para máxima durabilidad en climas muy fríos. Ideal para segundas capas.",
    details: ["Tratamiento Antipilling", "Tejido térmico de alta densidad", "Medio cierre reforzado", "Puños elásticos"],
    featured: true
  },
  {
    id: "micropolar-2",
    name: "Micropolar Expedition ML Mujer 100% Poliéster",
    category: "Micropolares",
    image: "/Catalogo-image/micropolar-expedition-ml-mujer-100-poly.webp",
    description: "Micropolar de expedición manga larga para mujer. Excelente protección térmica con corte entallado y tacto ultra suave, ideal como capa de abrigo intermedia.",
    details: ["Corte entallado femenino", "Textura ultra suave y térmica", "Resistente a lavados frecuentes", "Cierre completo frontal"],
    featured: true
  },
  {
    id: "micropolar-3",
    name: "Micropolar Hi-Vis Clase 2 Bicolor ML Hombre",
    category: "Micropolares",
    image: "/Catalogo-image/micropolar-hi-vis-clase-2-bi-color-ml-hombre.webp",
    description: "Micropolar de alta visibilidad bicolor para hombre. Incluye cintas reflectantes certificadas Clase 2 para máxima seguridad en trabajos de vialidad, minería y faena.",
    details: ["Diseño bicolor de alta visibilidad", "Cintas reflectantes Clase 2 certificadas", "Tejido micropolar abrigador", "Bolsillos prácticos en los costados"],
    featured: true
  },
  {
    id: "micropolar-4",
    name: "Micropolar ML Hombre 100% Poliéster",
    category: "Micropolares",
    image: "/Catalogo-image/micropolar-ml-hombre-100-poly.webp",
    description: "Micropolar corporativo manga larga clásico para hombre. Prenda básica, liviana y versátil para el uso diario en oficina o exteriores corporativos.",
    details: ["100% Poliéster liviano", "Secado rápido", "Cierre al cuello", "Costuras planas reforzadas"],
    featured: false
  },
  {
    id: "micropolar-5",
    name: "Micropolar Navigator ML Hombre 100% Poliéster",
    category: "Micropolares",
    image: "/Catalogo-image/micropolar-navigator-ml-hombre-100-poly.webp",
    description: "Micropolar térmico modelo Navigator para hombre. Diseño moderno con detalles de refuerzo y cierre completo. Brinda excelente adaptabilidad y abrigo.",
    details: ["Línea Navigator corporativa", "Cierre frontal completo", "Bolsillos con cierres discretos", "Ajuste cómodo en pretina"],
    featured: false
  },
  {
    id: "micropolar-6",
    name: "Micropolar Navigator ML Mujer 100% Poliéster",
    category: "Micropolares",
    image: "/Catalogo-image/micropolar-navigator-ml-mujer-100-poly.webp",
    description: "Micropolar térmico modelo Navigator para mujer. Máxima retención del calor corporal, con bolsillos laterales y calce óptimo para el cuerpo femenino.",
    details: ["Silueta femenina entallada", "Excelente relación peso-abrigo", "Cierre reforzado", "Puños elastizados"],
    featured: false
  },
  {
    id: "micropolar-7",
    name: "Micropolar con Tela Plana Hombre ML",
    category: "Micropolares",
    image: "/Catalogo-image/micropolar-tela-plana-hombre-ml.webp",
    description: "Micropolar técnico con refuerzo de tela plana en hombros y codos para hombre. Diseñado para ofrecer una mayor resistencia al roce y al desgaste por uso de mochilas o arneses.",
    details: ["Refuerzos de tela plana de alta resistencia", "Cierre en bolsillos de pecho y laterales", "Ideal para trabajos activos", "Cuello alto abrigado"],
    featured: false
  },
  {
    id: "micropolar-8",
    name: "Micropolar con Tela Plana Mujer ML",
    category: "Micropolares",
    image: "/Catalogo-image/micropolar-tela-plana-mujer-ml.webp",
    description: "Micropolar técnico con refuerzo de tela plana en hombros y codos para mujer. Diseño moderno, funcional y altamente resistente al desgaste diario en terreno.",
    details: ["Refuerzos de tela plana en zonas de desgaste", "Entallado femenino", "Textura interior suave", "Bolsillos con cremalleras"],
    featured: false
  },

  // 3. Parkas (8 productos)
  {
    id: "parka-1",
    name: "Parka Pangue Softshell Outwork ML Hombre",
    category: "Parkas",
    image: "/Catalogo-image/parka-pangue-softshell-outwork-ml-hombre.webp",
    description: "Parka técnica modelo Pangue con exterior de softshell para hombre. Ofrece la flexibilidad del softshell combinada con el aislamiento y relleno de una parka industrial.",
    details: ["Tela exterior Softshell flexible", "Aislamiento térmico de alto rendimiento", "Impermeable y cortaviento", "Gorro técnico ajustable"],
    featured: true
  },
  {
    id: "parka-2",
    name: "Parka Pangue Softshell Outwork ML Mujer",
    category: "Parkas",
    image: "/Catalogo-image/parka-pangue-softshell-outwork-ml-mujer.webp",
    description: "Parka técnica modelo Pangue con exterior de softshell para mujer. Diseñada para soportar climas adversos ofreciendo gran confort y movilidad con ajuste estético.",
    details: ["Calce entallado femenino", "Impermeable con costuras selladas", "Puños ajustables con interior térmico", "Múltiples bolsillos seguros"],
    featured: true
  },
  {
    id: "parka-3",
    name: "Parka Pukem Hombre Manga Larga 100% Poliéster",
    category: "Parkas",
    image: "/Catalogo-image/parka-pukem-hombre-mlarga-100-poly.webp",
    description: "Parka térmica impermeable modelo Pukem para hombre. Cuenta con un forro interior acolchado de gran espesor para proteger contra temperaturas bajo cero y viento fuerte.",
    details: ["Modelo Pukem extremo", "Totalmente impermeable", "Acolchado de alto grosor", "Gorro desmontable con cierre"],
    featured: true
  },
  {
    id: "parka-4",
    name: "Parka Pukem Mujer Manga Larga 100% Poliéster",
    category: "Parkas",
    image: "/Catalogo-image/parka-pukem-mujer-mlarga-100-poly.webp",
    description: "Parka térmica impermeable modelo Pukem para mujer. Asegura confort térmico superior frente al viento y lluvia intensa con un diseño elegante y ajuste en cintura.",
    details: ["Modelo Pukem mujer", "Ajuste de cintura regulable", "Excelente repelencia al agua", "Interior micropolar en cuello"],
    featured: true
  },
  {
    id: "parka-5",
    name: "Parka Térmica Alta Visibilidad ML Hombre",
    category: "Parkas",
    image: "/Catalogo-image/parka-termica-alta-visibilidad-ml-hombre.webp",
    description: "Parka de seguridad vial de alta visibilidad para hombre. Confección impermeable de alta resistencia con cintas reflectantes reglamentarias y relleno térmico denso.",
    details: ["Alta visibilidad con cintas reflectantes", "100% Impermeable y cortaviento", "Relleno térmico certificado", "Gorro ocultable en cuello"],
    featured: true
  },
  {
    id: "parka-6",
    name: "Parka Térmica Light ML Hombre",
    category: "Parkas",
    image: "/Catalogo-image/parka-termica-light-ml-hombre.webp",
    description: "Parka térmica liviana para hombre. Diseño acolchado moderno, liviano y compacto, perfecto para media estación y uso diario en oficinas o exteriores urbanos.",
    details: ["Acolchado ultraliviano", "Compactable en bolsa de transporte", "Repelencia a lluvia ligera", "Bolsillos internos porta documentos"],
    featured: false
  },
  {
    id: "parka-7",
    name: "Parka Térmica Light ML Mujer",
    category: "Parkas",
    image: "/Catalogo-image/parka-termica-light-ml-mujer.webp",
    description: "Parka térmica liviana para mujer. Acolchado fino y elegante, muy cómoda, liviana y fácil de transportar con gran capacidad de abrigo en formato compacto.",
    details: ["Silueta estilizada y moderna", "Relleno térmico sintético ligero", "Cierre con tirador suave", "Bolsillos invisibles laterales"],
    featured: false
  },
  {
    id: "parka-8",
    name: "Parka Térmica Practical Line ML Hombre 100% Poliéster",
    category: "Parkas",
    image: "/Catalogo-image/parka-termica-practical-line-ml-hombre-100-poly.webp",
    description: "Parka de abrigo práctica y muy funcional para hombre. Resistente al agua, cortaviento, con costuras selladas y múltiples bolsillos que facilitan el trabajo operativo en terreno.",
    details: ["Línea de trabajo Practical Line", "Costuras principales selladas", "Múltiples bolsillos multiuso", "Pretina con cordón de ajuste"],
    featured: false
  }
];

export const getFeaturedProducts = () => {
  return mockProducts.filter((product) => product.featured);
};

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
  },
  
  // 4. Pantalones (4 productos)
  {
    id: "pantalon-1",
    name: "Pantalón Cargo Classic Hombre",
    category: "Pantalones",
    image: "/Catalogo-image/pantalon-cargo-classic-hombre-65-poly-35-alg (1).webp",
    description: "Pantalón cargo de trabajo para hombre. Confeccionado en tela resistente, múltiples bolsillos reforzados y costuras de alta tenacidad ideal para uso industrial y corporativo.",
    details: ["Tela resistente al desgarro", "Bolsillos laterales tipo cargo", "Costuras triples", "Cintura elástica trasera"],
    featured: true
  },
  {
    id: "pantalon-2",
    name: "Pantalón Cargo Classic Mujer",
    category: "Pantalones",
    image: "/Catalogo-image/pantalon-cargo-classic-mujer-65-poly-35-alg (1).webp",
    description: "Pantalón cargo de trabajo para mujer. Ajuste ergonómico femenino, ofreciendo comodidad, durabilidad y funcionalidad para el día a día laboral.",
    details: ["Calce anatómico", "Bolsillos multifuncionales", "Tela de alta densidad", "Refuerzo en zona de rodillas"],
    featured: true
  },
  {
    id: "pantalon-3",
    name: "Pantalón Alta Visibilidad Hombre",
    category: "Pantalones",
    image: "/Catalogo-image/pantalon-alta-visibilidad-bi-color-clase-2-hombre.webp",
    description: "Pantalón técnico con protección y alta visibilidad para minería e industria pesada.",
    details: ["Certificación Clase 2", "Reflectantes incorporados", "Costuras de alta resistencia", "Alta visibilidad integrada"],
    featured: false
  },
  {
    id: "pantalon-4",
    name: "Pantalón Iron Line Onix Hombre",
    category: "Pantalones",
    image: "/Catalogo-image/pantalon-iron-line-onix-hombre.webp",
    description: "Pantalón resistente Iron Line Onix, diseñado para trabajos en condiciones extremas con refuerzos estratégicos.",
    details: ["Alta resistencia", "Refuerzos en rodillas", "Ajuste cómodo", "Bolsillos utilitarios"],
    featured: true
  },
  {
    id: "pantalon-5",
    name: "Jeans Free Action Line Mujer",
    category: "Pantalones",
    image: "/Catalogo-image/jeans-free-action-line-mujer-76-alg-22-poly-2-spx-azul-t36.webp",
    description: "Jeans elásticos de trabajo para mujer, línea Free Action. Máxima comodidad con mezcla de algodón y spandex.",
    details: ["76% Algodón, 2% Spandex", "Línea Free Action", "Libertad de movimiento", "Calce ajustado"],
    featured: false
  },
  {
    id: "pantalon-6",
    name: "Jeans Practical Line Hombre",
    category: "Pantalones",
    image: "/Catalogo-image/jeans-practical-line-hombre-100-alg-azul-t40.webp",
    description: "Jeans clásicos de trabajo 100% algodón para hombre. Duraderos y cómodos para el trabajo diario.",
    details: ["100% Algodón", "Costuras reforzadas", "Corte clásico", "Línea Practical"],
    featured: false
  },
  {
    id: "pantalon-7",
    name: "Jeans Practical Line Mujer",
    category: "Pantalones",
    image: "/Catalogo-image/jeans-practical-line-mujer-100-alg.webp",
    description: "Jeans clásicos 100% algodón para mujer. Excelente ajuste y resistencia al desgaste industrial.",
    details: ["100% Algodón de alta densidad", "Línea Practical", "Bolsillos reforzados", "Uso industrial y corporativo"],
    featured: false
  },
  {
    id: "pantalon-8",
    name: "Pantalón Actium Canvas Hombre",
    category: "Pantalones",
    image: "/Catalogo-image/pantalon-actium-canvas-hombre (2).webp",
    description: "Pantalón técnico Actium Canvas para hombre. Tela extra resistente ideal para trabajos en terreno y faena pesada.",
    details: ["Tela Canvas pesada", "Alta durabilidad", "Múltiples bolsillos de carga", "Costuras de seguridad"],
    featured: false
  },
  {
    id: "pantalon-9",
    name: "Pantalón Cargo Gabardina Practical Line c/ Cinta",
    category: "Pantalones",
    image: "/Catalogo-image/pantalon-cargo-gabardina-practical-line-con-cinta-hombre.webp",
    description: "Pantalón cargo de gabardina con cinta reflectante. Combina funcionalidad y visibilidad básica en un diseño cómodo.",
    details: ["Cinta reflectante incorporada", "Tela gabardina ligera", "Bolsillos cargo", "Uso en faenas con tránsito"],
    featured: false
  },
  {
    id: "pantalon-10",
    name: "Pantalón Cargo Gabardina Practical Line",
    category: "Pantalones",
    image: "/Catalogo-image/pantalon-cargo-gabardina-practical-line-hombre (2).webp",
    description: "Pantalón cargo clásico en gabardina para hombre. Versátil y liviano para el uso diario en actividades operativas.",
    details: ["Gabardina resistente y fresca", "Corte amplio", "Múltiples organizadores", "Fácil mantenimiento"],
    featured: false
  },
  {
    id: "pantalon-11",
    name: "Pantalón Cargo Tulipero Move Hombre",
    category: "Pantalones",
    image: "/Catalogo-image/pantalon-cargo-tulipero-move-hombre-.webp",
    description: "Pantalón cargo Tulipero Move, con diseño ergonómico que facilita el desplazamiento y la flexión durante el trabajo.",
    details: ["Línea Move (Movilidad extra)", "Diseño ergonómico en rodillas", "Tejido técnico", "Secado rápido"],
    featured: true
  },
  {
    id: "pantalon-12",
    name: "Pantalón Executive Amount Hombre",
    category: "Pantalones",
    image: "/Catalogo-image/pantalon-executive-amount-hombre-ml.webp",
    description: "Pantalón corporativo de la línea Executive Amount. Elegancia y formalidad para el área administrativa o de supervisión.",
    details: ["Diseño formal ejecutivo", "Tela de excelente caída", "Planchado fácil", "Bolsillos invisibles"],
    featured: true
  },
  {
    id: "pantalon-13",
    name: "Pantalón Executive Casual Slim Hombre",
    category: "Pantalones",
    image: "/Catalogo-image/pantalon-executive-casual-slim-hombre.webp",
    description: "Pantalón corporativo estilo casual slim fit. La mezcla perfecta entre un estilo moderno juvenil y formalidad de oficina.",
    details: ["Corte Slim Fit moderno", "Estilo casual y versátil", "Bolsillos diagonales", "Tela stretch para confort"],
    featured: false
  },
  {
    id: "pantalon-14",
    name: "Pantalón Outwork Ripstop Acacio Mujer",
    category: "Pantalones",
    image: "/Catalogo-image/pantalon-outwork-ripstop-acacio-mujer-.webp",
    description: "Pantalón técnico de la línea Outwork para mujer. Confeccionado en tela Ripstop anti-desgarro para las condiciones más duras.",
    details: ["Tela Ripstop antidesgarro", "Diseño Outwork Acacio", "Protección UV integrada", "Zonas de fricción reforzadas"],
    featured: true
  },
  
  // 5. Poleras (9 productos)
  {
    id: "polera-1",
    name: "Polera Reflectante de Alta Visibilidad",
    category: "Poleras",
    image: "/Catalogo-image/polera-reflectante-trasera.webp",
    description: "Polera reflectante diseñada para máxima visibilidad en entornos de trabajo. Ideal para seguridad vial, faenas y construcción.",
    details: ["Cintas reflectantes reglamentarias", "Tela respirable de alta visibilidad", "Costuras reforzadas", "Alta durabilidad"],
    featured: true
  },
  {
    id: "polera-2",
    name: "Polera Dry Fit Manga Larga Hombre",
    category: "Poleras",
    image: "/Catalogo-image/polera-dry-fit-ml-hombre.webp",
    description: "Polera deportiva y de trabajo manga larga para hombre con tecnología Dry Fit. Mantiene la piel fresca y seca durante toda la jornada.",
    details: ["Tecnología Dry Fit", "Secado rápido y respirable", "Protección UV integrada", "Calce cómodo y liviano"],
    featured: true
  },
  {
    id: "polera-3",
    name: "Polera Manga Corta Hombre 100% Algodón",
    category: "Poleras",
    image: "/Catalogo-image/polera-mc-hombre-100-alg.webp",
    description: "Polera básica manga corta para hombre confeccionada en 100% algodón premium. Suave al tacto, cómoda y perfecta para el uso diario o eventos corporativos.",
    details: ["100% Algodón premium", "Tacto suave y confortable", "Cuello redondo reforzado", "Ideal para estampado o bordado"],
    featured: false
  },
  {
    id: "polera-4",
    name: "Polera Manga Larga Hombre 100% Algodón (170g)",
    category: "Poleras",
    image: "/Catalogo-image/polera-ml-hombre-100-alg-170g.webp",
    description: "Polera manga larga para hombre con gramaje de 170g, confeccionada en algodón de alta calidad. Abrigadora, cómoda y resistente al uso continuo.",
    details: ["100% Algodón de 170g", "Manga larga con puño semi-ajustado", "Costuras laterales reforzadas", "Apta para personalización corporativa"],
    featured: false
  },
  {
    id: "polera-5",
    name: "Polera Polo Alta Visibilidad Bicolor ML Hombre",
    category: "Poleras",
    image: "/Catalogo-image/polera-polo-alta-visibilidad-bi-color-ml-hombre.webp",
    description: "Polera tipo polo bicolor manga larga de alta visibilidad para hombre. Con cintas reflectantes y diseño formal deportivo, excelente para supervisores y operarios.",
    details: ["Diseño bicolor de alta visibilidad", "Cintas reflectantes en torso y mangas", "Cuello polo con botones", "Puños tejidos elásticos"],
    featured: true
  },
  {
    id: "polera-6",
    name: "Polera Polo Dry Fresh ML Hombre",
    category: "Poleras",
    image: "/Catalogo-image/polera-polo-dryfresh-ml-hombre-60-alg-40-poly.webp",
    description: "Polera tipo polo manga larga modelo Dry Fresh para hombre. Confección premium con mezcla de algodón y poliéster para un look corporativo elegante y fresco.",
    details: ["60% Algodón, 40% Poliéster", "Tecnología Dry Fresh respirable", "Cuello y puños tejidos", "Ideal para uniformes corporativos"],
    featured: false
  },
  {
    id: "polera-7",
    name: "Polera Polo Dry Fresh ML Mujer",
    category: "Poleras",
    image: "/Catalogo-image/polera-polo-dryfresh-ml-mujer-60-alg-40-poly.webp",
    description: "Polera tipo polo manga larga modelo Dry Fresh para mujer. Calce entallado femenino elegante, ideal para áreas administrativas, de ventas y supervisión.",
    details: ["Corte entallado para mujer", "60% Algodón, 40% Poliéster", "Resistente a lavados frecuentes", "Secado rápido y planchado fácil"],
    featured: false
  },
  {
    id: "polera-8",
    name: "Polera Polo Manga Larga Hombre",
    category: "Poleras",
    image: "/Catalogo-image/polera-polo-ml-hombre-60-alg-40-poly.webp",
    description: "Polera tipo polo manga larga clásica para hombre. Brinda una excelente presentación corporativa con comodidad de movimiento.",
    details: ["Mezcla de algodón y poliéster 60/40", "Tres botones en pechera", "Ajuste cómodo clásico", "Telas con tratamiento antipeeling"],
    featured: true
  },
  {
    id: "polera-9",
    name: "Polera Polo Manga Larga Mujer",
    category: "Poleras",
    image: "/Catalogo-image/polera-polo-ml-mujer-80-alg-20-poly.webp",
    description: "Polera tipo polo manga larga para mujer, confeccionada en mezcla rica en algodón. Tacto sumamente suave, excelente calce y durabilidad corporativa premium.",
    details: ["80% Algodón, 20% Poliéster", "Calce entallado femenino", "Pechera con botones delicados", "Acabados de costura invisibles"],
    featured: true
  }
];

export const getFeaturedProducts = () => {
  return mockProducts.filter((product) => product.featured);
};

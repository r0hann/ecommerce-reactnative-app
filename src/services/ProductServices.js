const PRODUCTS = [
  {
    id: 100,
    name: "ReactProX Headset",
    price: 350,
    image:
      "https://storage.aoc.com/assets/7972/AOC_GH300_PV_HERO_VISUAL-large.png",
    // image: require("../../assets/icon.png"),
    description:
      "A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).",
  },

  {
    id: 101,
    name: "FastLane Toy Car",
    price: 600,
    image: "https://i.ebayimg.com/images/g/370AAOSwT4xkNbb7/s-l1200.webp",
    description:
      "A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.",
  },

  {
    id: 102,
    name: "SweetHome Cupcake",
    price: 2,
    image:
      "https://i.etsystatic.com/27444581/r/il/54cef6/3273119430/il_fullxfull.3273119430_ns89.jpg",
    description:
      "A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.",
  },
];

export function getProducts() {
  return PRODUCTS;
}

export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}

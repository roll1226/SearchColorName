type ColorPizzaType = {
  name: string;
  hex: string;
  rgb: { r: number; g: number; b: number };
  hsl: { h: number; s: number; l: number };
  lab: { l: number; a: number; b: number };
  luminance: number;
  luminanceWCAG: number;
  requestedHex: string;
  distance: number;
};

export type ColorPizzasType = {
  colors: ColorPizzaType[];
  paletteTitle: string;
};

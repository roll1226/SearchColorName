import axios from "axios";
import { ColorPizzasType } from "../types/ColorPizzaType";

export const SearchColorName = async (hex: string) => {
  const res = await axios.get<ColorPizzasType>(`https://api.color.pizza/v1/?values=${hex}`);
  return res.data;
};

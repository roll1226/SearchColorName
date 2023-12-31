import { Clipboard } from "@raycast/api";

export const ClipboardUtil = async (colorName: string) => {
  await Clipboard.copy(colorName);
};

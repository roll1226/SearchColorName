import { Form, ActionPanel, Action, showToast, closeMainWindow } from "@raycast/api";
import { ClipboardUtil } from "./utils/clipboardUtil";
import { setTimeout } from "timers/promises";
import { SearchColorName } from "./utils/colorUtil";

type Values = {
  textfield: string;
};

const Command = () => {
  const handleSubmit = async (values: Values) => {
    try {
      const colors = await SearchColorName(values.textfield.toLowerCase());
      const colorName = colors.colors[0].name;
      await ClipboardUtil(colorName);
      await showToast({ title: "Searched Color Name", message: `Copied Color Name: ${colorName}` });
      await setTimeout(1000);
      await closeMainWindow({ clearRootSearch: true });
    } catch (error) {
      showToast({ title: "Not Search Color Name" });
    }
  };

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.TextField id="textfield" title="Color field" placeholder="Enter Color Code (ex. FFFFFF)" />
    </Form>
  );
};

export default Command;

import { Form, ActionPanel, Action, showToast, closeMainWindow } from "@raycast/api";
import namedColors from "color-name-list";
import { ClipboardUtil } from "./utils/clipboardUtil";
import { setTimeout } from "timers/promises";

type Values = {
  textfield: string;
};

const Command = () => {
  const handleSubmit = async (values: Values) => {
    const color = namedColors.find((color) => color.hex === `#${values.textfield.toLowerCase()}`);
    if (color === undefined) {
      showToast({ title: "Not Search Color Name" });
    } else {
      await ClipboardUtil(color.name);
      await showToast({ title: "Searched Color Name", message: `Copied Color Name: ${color.name}` });
      await setTimeout(1000);
      await closeMainWindow({ clearRootSearch: true });
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

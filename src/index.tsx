import { Form, ActionPanel, Action, showToast, closeMainWindow, PopToRootType } from "@raycast/api";
import { ClipboardUtil } from "./utils/clipboardUtil";
import { setTimeout } from "timers/promises";
import { SearchColorName } from "./utils/colorUtil";
import { CaseEnum } from "./enums/caseEnum";
import { ChangeCaseColorName } from "./utils/caseUtil";

type Values = {
  textfield: string;
  case: CaseEnum;
};

const Command = () => {
  const handleSubmit = async (values: Values) => {
    try {
      const colors = await SearchColorName(values.textfield.toLowerCase());
      const colorName = ChangeCaseColorName({
        colorName: colors.colors[0].name,
        case: values.case,
      });
      await ClipboardUtil(colorName);
      await showToast({ title: "Searched Color Name", message: `Copied Color Name: ${colorName}` });
      await setTimeout(1000);
      await closeMainWindow({ clearRootSearch: true, popToRootType: PopToRootType.Immediate });
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
      <Form.Dropdown id="case">
        <Form.Dropdown.Item value={CaseEnum.SnakeCase} title={CaseEnum.SnakeCase} />
        <Form.Dropdown.Item value={CaseEnum.UpperSnakeCase} title={CaseEnum.UpperSnakeCase} />
        <Form.Dropdown.Item value={CaseEnum.KebabCase} title={CaseEnum.KebabCase} />
        <Form.Dropdown.Item value={CaseEnum.CamelCase} title={CaseEnum.CamelCase} />
        <Form.Dropdown.Item value={CaseEnum.PascalCase} title={CaseEnum.PascalCase} />
      </Form.Dropdown>
    </Form>
  );
};

export default Command;

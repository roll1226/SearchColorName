import * as changeCase from "change-case";
import { CaseEnum } from "../enums/caseEnum";

type Values = {
  colorName: string;
  case: CaseEnum;
};

export const ChangeCaseColorName = (values: Values) => {
  const colorName = values.colorName;
  switch (values.case) {
    case CaseEnum.SnakeCase:
      return changeCase.snakeCase(colorName);
    case CaseEnum.UpperSnakeCase:
      return changeCase.constantCase(colorName);
    case CaseEnum.KebabCase:
      return changeCase.kebabCase(colorName);
    case CaseEnum.CamelCase:
      return changeCase.camelCase(colorName);
    case CaseEnum.PascalCase:
      return changeCase.pascalCase(colorName);
    default:
      return colorName;
  }
};

export const CaseEnum = {
  SnakeCase: "snake_case",
  UpperSnakeCase: "UPPER_SNAKE_CASE",
  KebabCase: "kebab-case",
  CamelCase: "camelCase",
  PascalCase: "PascalCase",
} as const;

export type CaseEnum = (typeof CaseEnum)[keyof typeof CaseEnum];

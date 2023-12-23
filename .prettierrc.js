/**
 * @type {import('prettier').Options}
 */
module.exports = {
  plugins: [require.resolve("@ianvs/prettier-plugin-sort-imports")],
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  printWidth: 90,
  trailingComma: "es5",
  bracketSpacing: true,
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/types/(.*)$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "^@/app/(.*)$",
    "^@/(.*)$",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
}

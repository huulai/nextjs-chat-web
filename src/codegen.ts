import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3000/graphql",
  documents: "**/*.{gql,graphql}",
  generates: {
    "./src/graphql/generated/types.ts": {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
        {
          add: {
            content: '// @ts-nocheck',
          },
        },
      ],
      config: {
        rawRequest: true,
      },
    },
  },
};
export default config;

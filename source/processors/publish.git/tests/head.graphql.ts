import { faker, is, mock } from "@utils/testing.ts"

export default mock({ owner: is.string(), repo: is.string(), branch: is.string(), file: is.string() }, () => ({
  repository: {
    branch: {
      history: {
        commits: [
          {
            oid: faker.git.commitSha(),
          },
        ],
      },
    },
    revision: {
      oid: faker.git.commitSha(),
    },
  },
}))

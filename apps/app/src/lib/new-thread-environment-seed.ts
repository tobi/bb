import { createThreadEnvironmentArgsSchema } from "@bb/server-contract";

export const newThreadEnvironmentSeedSchema =
  createThreadEnvironmentArgsSchema.refine(
    (environment) =>
      environment.type !== "host" || environment.hostId !== undefined,
    {
      message: "hostId is required to seed the new-thread environment",
      path: ["hostId"],
    },
  );

const completionSpec: Fig.Spec = {
  name: "clion",
  description: "",
  subcommands: [
    {
      name: "diff",
      args: [
        {
          name: "left",
          template: "filepaths",
          description: "Left side of the diff",
        },
        {
          name: "right",
          template: "filepaths",
          description: "Right side of the diff",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for clion",
    },
  ],
  // Only uncomment if clion takes an argument
  args: {
    name: "file",
    template: "filepaths",
    isOptional: true,
  },
};
export default completionSpec;

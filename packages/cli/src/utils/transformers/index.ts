import type { Config } from "@/src/utils/get-config";
import type { registryBaseColorSchema } from "@/src/utils/registry/schema";
import { transformCssVars } from "@/src/utils/transformers/transform-css-vars";
import { transformImport } from "@/src/utils/transformers/transform-import";
import { promises as fs } from "fs";
import { tmpdir } from "os";
import path from "path";
import { Project, ScriptKind, type SourceFile } from "ts-morph";
import type * as z from "zod";
import { transformTwPrefixes } from "./transform-tw-prefix";

export type TransformOpts = {
  filename: string;
  raw: string;
  config: Config;
  baseColor?: z.infer<typeof registryBaseColorSchema>;
};

export type Transformer<Output = SourceFile> = (
  // eslint-disable-next-line no-unused-vars
  opts: TransformOpts & {
    sourceFile: SourceFile;
  },
) => Promise<Output>;

const transformers: Transformer[] = [
  transformImport,
  transformCssVars,
  transformTwPrefixes,
];

const project = new Project({
  compilerOptions: {},
});

async function createTempSourceFile(filename: string) {
  const dir = await fs.mkdtemp(path.join(tmpdir(), "shadcn-"));
  return path.join(dir, filename);
}

export async function transform(opts: TransformOpts) {
  const tempFile = await createTempSourceFile(opts.filename);
  const sourceFile = project.createSourceFile(tempFile, opts.raw, {
    scriptKind: ScriptKind.TSX,
  });

  for (const transformer of transformers) {
    transformer({ sourceFile, ...opts });
  }

  return sourceFile.getFullText();
}

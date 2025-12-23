import { readFileSync } from "fs";
import { extname, resolve } from "path";
import yaml from "js-yaml";

const parseJSON = (data) => JSON.parse(data);

const parseYAML = (data) => yaml.load(data);

const getParser = (extension) => {
  switch (extension) {
    case ".json":
      return parseJSON;
    case ".yaml":
    case ".yml":
      return parseYAML;
    default:
      throw new Error(`Unsupported file format: ${extension}`);
  }
};

const getFileData = (filepath) => {
  const absolutePath = resolve(process.cwd(), filepath);
  const fileContent = readFileSync(absolutePath, "utf-8");
  const extension = extname(filepath).toLowerCase();
  const parse = getParser(extension);

  return parse(fileContent);
};

export default getFileData;

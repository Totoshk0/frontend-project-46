import { readFileSync } from "fs";
import { resolve, extname } from "path";

const genDiff = (filepath1, filepath2, format = "stylish") => {
  const data1 = readFileSync(resolve(filepath1), "utf-8");
  const data2 = readFileSync(resolve(filepath2), "utf-8");

  return `Comparing ${filepath1} (${extname(
    filepath1
  )}) with ${filepath2} (${extname(filepath2)}) in ${format} format`;
};

export default genDiff;

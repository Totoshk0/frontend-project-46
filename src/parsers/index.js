import getFileData from "./parsers.js";

const genDiff = (filepath1, filepath2, format = "stylish") => {
  const data1 = getFileData(filepath1);
  const data2 = getFileData(filepath2);

  return {
    file1: data1,
    file2: data2,
    format,
    diff: `Data from ${filepath1}: ${JSON.stringify(
      data1
    )}\nData from ${filepath2}: ${JSON.stringify(data2)}\nFormat: ${format}`,
  };
};

export default genDiff;

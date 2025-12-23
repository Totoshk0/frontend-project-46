#!/usr/bin/env node

import { Command } from "commander";
import genDiff from "../src/parsers/index.js";

const program = new Command();

program
  .name("gendiff")
  .description("Compares two configuration files and shows a difference.")
  .version("1.0.0", "-V, --version", "output the version number")
  .option("-f, --format <type>", "output format", "stylish")
  .arguments("<filepath1> <filepath2>")
  .action((filepath1, filepath2, options) => {
    try {
      const result = genDiff(filepath1, filepath2, options.format);
      console.log(`File 1 data:`, result.file1);
      console.log(`File 2 data:`, result.file2);
      console.log(`Format: ${result.format}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  });

program.parse(process.argv);

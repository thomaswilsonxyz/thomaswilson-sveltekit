---
title: 'Code Snippet: Count the number of files with an extention '
date: 2024-03-11T21:09:52.651Z
slug: 2024-03-11-code-snippet-tree-grep
author: Thomas Wilson

---
I wanted to know how many files that ended in either `.test.ts` or `.test.js` in a directory, came up with this guy:

```sh
tree --noreport --gitignore -i | grep -c -E '\.test\.(js|ts)' 
```

## Tree

[tree](https://formulae.brew.sh/formula/tree) is a tool for listing out the contents of a directory in a tree-style format.

- `--noreport` Removes a summary line at the bottom ("10 directories, 35 files")
- `--gitignore` Looks for a `.gitignore` file and excludes those directories, useful for those pesky `node_modules` directories
- `-i` Removes the whitespace and indent (makes it better input for regex)

## Grep

Grep is a tool for searching text against a regex.  

We pass in the input from tree into Regex, and only look for files that match a pattern

- `-c` for "count", i.e. just tell me how many matches you found
- `-E`for extended regex, it makes the `(js|ts)` fragment work 

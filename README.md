# site-audit

Inspect local HTML for missing image descriptions and page metadata.

Small, dependency-light Node.js / CommonJS utility. Original implementation and history generated for a retrospective development exercise.

## Run

`node cli.js examples/input.txt --pretty`

`node cli.js -` consumes standard input. `--output report.json` saves structured results. Run `npm test` to check behavior.

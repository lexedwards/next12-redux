module.exports = {
  '**/*.[j|t]s?(x)': [
    filenames =>
      `next lint . ${filenames
        .map(file => file.split(process.cwd())[1])
        .join(' ')}`,
    'prettier --write',
    'jest --bail --findRelatedTests',
  ],
}

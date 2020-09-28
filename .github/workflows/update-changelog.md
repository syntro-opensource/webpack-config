name: Update changelog
on:
  push:
    branches: [ feature-auto-changelog ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: heinrichreimer/github-changelog-generator-action@v2.1.1
      with:
        token: ${{ secrets.GITHUB_TOKEN }}
        output: AUTO_CHANGELOG.md
    - name: Upload math result for job 2
      uses: actions/upload-artifact@v2
      with:
        name: changelog
        path: AUTO_CHANGELOG.md

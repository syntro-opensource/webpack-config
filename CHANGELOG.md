<a name="unreleased"></a>
## [Unreleased]


<a name="1.3.2"></a>
## [1.3.2] - 2022-07-20
### 🔧 Changed
- Updates are correctly prefixed for chglog

### 🧬 Dependencies
- Bump postcss-loader from 7.0.0 to 7.0.1 ([#286](https://github.com/syntro-opensource/webpack-config/issues/286))
- Bump stylelint-scss from 4.2.0 to 4.3.0 ([#287](https://github.com/syntro-opensource/webpack-config/issues/287))
- Bump eslint from 8.17.0 to 8.20.0 ([#285](https://github.com/syntro-opensource/webpack-config/issues/285))
- stylelint-config-standard from 25.0.0 to 26.0.0 ([#264](https://github.com/syntro-opensource/webpack-config/issues/264))
- stylelint from 14.8.5 to 14.9.1 ([#267](https://github.com/syntro-opensource/webpack-config/issues/267))
- sass from 1.52.2 to 1.53.0 ([#268](https://github.com/syntro-opensource/webpack-config/issues/268))
- jest from 28.1.0 to 28.1.3 ([#270](https://github.com/syntro-opensource/webpack-config/issues/270))


<a name="1.3.1"></a>
## [1.3.1] - 2022-07-08
### 🍰 Added
- Documentation for import aliases

### 🐞 Fixed
- `eslint-webpack-plugin` now lints js- and jsx-files


<a name="1.3.0"></a>
## [1.3.0] - 2022-06-04
### 🍰 Added
- better documentation for config files

### 🔧 Changed
- make use of new asset/* types for webpack 5
- replaced `babel-eslint` with `[@babel](https://github.com/babel)/eslint-parser` ([#199](https://github.com/syntro-opensource/webpack-config/issues/199))

### 🗑 Removed
- `eslint-loader` in favour of `eslint-webpack-plugin` ([#262](https://github.com/syntro-opensource/webpack-config/issues/262))
- `file-loader` and `url-loader` dependencies

### 🧬 Dependencies
- eslint from 7.32.0 to 8.17.0 ([#261](https://github.com/syntro-opensource/webpack-config/issues/261))
- cssnano from 5.1.10 to 5.1.11 ([#258](https://github.com/syntro-opensource/webpack-config/issues/258))
- Entire scss suite ([#260](https://github.com/syntro-opensource/webpack-config/issues/260))
- postcss from 8.1.7 to 8.4.14
- stylelint and stylelint-config-standard ([#255](https://github.com/syntro-opensource/webpack-config/issues/255))
- cssnano from 4.1.11 to 5.1.10
- [@syntro](https://github.com/syntro)-opensource/eslint-config-base from 1.0.2 to 1.1.0 ([#251](https://github.com/syntro-opensource/webpack-config/issues/251))
- [@babel](https://github.com/babel)/preset-env from 7.12.7 to 7.18.2 ([#250](https://github.com/syntro-opensource/webpack-config/issues/250))
- postcss from 8.1.10 to 8.4.14 ([#248](https://github.com/syntro-opensource/webpack-config/issues/248))
- stylelint-config-standard from 20.0.0 to 22.0.0 ([#249](https://github.com/syntro-opensource/webpack-config/issues/249))
- css-loader from 5.0.1 to 6.7.1 ([#246](https://github.com/syntro-opensource/webpack-config/issues/246))
- [@babel](https://github.com/babel)/preset-react from 7.14.5 to 7.17.12 ([#247](https://github.com/syntro-opensource/webpack-config/issues/247))
- stylelint-config-recommended-scss from 4.2.0 to 4.3.0 ([#245](https://github.com/syntro-opensource/webpack-config/issues/245))
- [@babel](https://github.com/babel)/plugin-proposal-export-default-from from 7.12.1 to 7.17.12 ([#244](https://github.com/syntro-opensource/webpack-config/issues/244))
- mini-css-extract-plugin from 1.3.1 to 2.6.0 ([#243](https://github.com/syntro-opensource/webpack-config/issues/243))
- sass from 1.29.0 to 1.52.2 ([#242](https://github.com/syntro-opensource/webpack-config/issues/242))
- stylelint-webpack-plugin from 2.1.1 to 3.3.0 ([#241](https://github.com/syntro-opensource/webpack-config/issues/241))
- webpack-cli from 4.2.0 to 4.9.2 ([#237](https://github.com/syntro-opensource/webpack-config/issues/237))
- sass-loader from 10.1.0 to 13.0.0 ([#238](https://github.com/syntro-opensource/webpack-config/issues/238))
- stylelint from 13.8.0 to 13.13.1 ([#240](https://github.com/syntro-opensource/webpack-config/issues/240))
- jquery from 3.5.1 to 3.6.0 ([#239](https://github.com/syntro-opensource/webpack-config/issues/239))
- jest from 26.6.3 to 28.1.0 ([#235](https://github.com/syntro-opensource/webpack-config/issues/235))
- cssnano from 4.1.10 to 4.1.11 ([#236](https://github.com/syntro-opensource/webpack-config/issues/236))
- babel-loader from 8.2.2 to 8.2.5 ([#234](https://github.com/syntro-opensource/webpack-config/issues/234))
- [@babel](https://github.com/babel)/core from 7.12.9 to 7.18.2 ([#233](https://github.com/syntro-opensource/webpack-config/issues/233))
- stylelint-scss from 3.18.0 to 3.21.0 ([#232](https://github.com/syntro-opensource/webpack-config/issues/232))
- postcss-loader from 4.1.0 to 7.0.0 ([#230](https://github.com/syntro-opensource/webpack-config/issues/230))
- autoprefixer from 10.3.5 to 10.4.7 ([#228](https://github.com/syntro-opensource/webpack-config/issues/228))
- webpack from 5.8.0 to 5.73.0 ([#231](https://github.com/syntro-opensource/webpack-config/issues/231))
- bootstrap from 4.5.3 to 4.6.1 ([#203](https://github.com/syntro-opensource/webpack-config/issues/203))
- webpack-bundle-analyzer from 4.1.0 to 4.5.0 ([#196](https://github.com/syntro-opensource/webpack-config/issues/196))
- [@babel](https://github.com/babel)/preset-react from 7.12.5 to 7.14.5 ([#153](https://github.com/syntro-opensource/webpack-config/issues/153))
- eslint from 7.13.0 to 7.32.0 ([#171](https://github.com/syntro-opensource/webpack-config/issues/171))
- autoprefixer from 10.0.2 to 10.3.5 ([#183](https://github.com/syntro-opensource/webpack-config/issues/183))

### Pull Requests
- Merge pull request [#252](https://github.com/syntro-opensource/webpack-config/issues/252) from syntro-opensource/dependabot/npm_and_yarn/cssnano-5.1.10
- Merge pull request [#256](https://github.com/syntro-opensource/webpack-config/issues/256) from syntro-opensource/change/use-asset-modules

### BREAKING CHANGE




<a name="1.2.1"></a>
## [1.2.1] - 2020-11-29
### 🧬 Dependencies
- [@babel](https://github.com/babel)/core from 7.12.3 to 7.12.9 ([#70](https://github.com/syntro-opensource/webpack-config/issues/70))
- webpack from 5.7.0 to 5.8.0 ([#71](https://github.com/syntro-opensource/webpack-config/issues/71))
- [@babel](https://github.com/babel)/preset-env from 7.12.1 to 7.12.7 ([#73](https://github.com/syntro-opensource/webpack-config/issues/73))
- postcss from 8.1.7 to 8.1.10 ([#72](https://github.com/syntro-opensource/webpack-config/issues/72))
- babel-loader from 8.2.1 to 8.2.2 ([#69](https://github.com/syntro-opensource/webpack-config/issues/69))


<a name="1.2.0"></a>
## [1.2.0] - 2020-11-26
### 🧬 Dependencies
- webpack-bundle-analyzer from 3.9.0 to 4.1.0 ([#61](https://github.com/syntro-opensource/webpack-config/issues/61))
- stylelint from 13.7.2 to 13.8.0 ([#63](https://github.com/syntro-opensource/webpack-config/issues/63))
- autoprefixer from 9.8.6 to 10.0.2 ([#62](https://github.com/syntro-opensource/webpack-config/issues/62))
- postcss-loader from 4.0.4 to 4.1.0 ([#67](https://github.com/syntro-opensource/webpack-config/issues/67))
- webpack from 4.44.2 to 5.7.0 ([#68](https://github.com/syntro-opensource/webpack-config/issues/68))


<a name="1.1.0"></a>
## [1.1.0] - 2020-11-13
### 🍰 Added
- test setup ([#56](https://github.com/syntro-opensource/webpack-config/issues/56))

### 🧬 Dependencies
- postcss from 7.0.34 to 8.1.7 ([#52](https://github.com/syntro-opensource/webpack-config/issues/52))
- sass from 1.27.0 to 1.29.0 ([#59](https://github.com/syntro-opensource/webpack-config/issues/59))
- [@babel](https://github.com/babel)/preset-react from 7.10.4 to 7.12.5 ([#58](https://github.com/syntro-opensource/webpack-config/issues/58))
- babel-loader from 8.1.0 to 8.2.1 ([#57](https://github.com/syntro-opensource/webpack-config/issues/57))
- css-loader from 4.3.0 to 5.0.1 ([#49](https://github.com/syntro-opensource/webpack-config/issues/49))
- sass-loader from 10.0.3 to 10.1.0 ([#53](https://github.com/syntro-opensource/webpack-config/issues/53))
- mini-css-extract-plugin from 0.12.0 to 1.3.1 ([#54](https://github.com/syntro-opensource/webpack-config/issues/54))
- webpack-cli from 3.3.12 to 4.2.0 ([#55](https://github.com/syntro-opensource/webpack-config/issues/55))
- [@babel](https://github.com/babel)/plugin-proposal-export-default-from from 7.10.4 to 7.12.1 ([#42](https://github.com/syntro-opensource/webpack-config/issues/42))
- file-loader from 6.1.0 to 6.2.0 ([#48](https://github.com/syntro-opensource/webpack-config/issues/48))
- sass-loader from 10.0.2 to 10.0.3 ([#37](https://github.com/syntro-opensource/webpack-config/issues/37))


<a name="1.0.6"></a>
## [1.0.6] - 2020-10-19
### 🍰 Added
- chglog for automatic changelog generation

### 🐞 Fixed
- repository URL in chglog config

### 🧬 Dependencies
- stylelint-webpack-plugin from 2.1.0 to 2.1.1 ([#33](https://github.com/syntro-opensource/webpack-config/issues/33))
- [@babel](https://github.com/babel)/core from 7.11.6 to 7.12.3 ([#34](https://github.com/syntro-opensource/webpack-config/issues/34))
- [@babel](https://github.com/babel)/preset-env from 7.11.5 to 7.12.1 ([#35](https://github.com/syntro-opensource/webpack-config/issues/35))
- eslint from 7.10.0 to 7.11.0 ([#30](https://github.com/syntro-opensource/webpack-config/issues/30))
- postcss-loader from 4.0.3 to 4.0.4 ([#31](https://github.com/syntro-opensource/webpack-config/issues/31))
- url-loader from 4.1.0 to 4.1.1 ([#32](https://github.com/syntro-opensource/webpack-config/issues/32))
- postcss-loader from 4.0.2 to 4.0.3 ([#24](https://github.com/syntro-opensource/webpack-config/issues/24))
- mini-css-extract-plugin from 0.11.2 to 0.12.0 ([#27](https://github.com/syntro-opensource/webpack-config/issues/27))
- sass from 1.26.11 to 1.27.0 ([#28](https://github.com/syntro-opensource/webpack-config/issues/28))


<a name="v1.0.5"></a>
## [v1.0.5] - 2020-09-28
### 🧬 Dependencies
- stylelint from 13.7.1 to 13.7.2 ([#22](https://github.com/syntro-opensource/webpack-config/issues/22))
- postcss-loader from 4.0.1 to 4.0.2 ([#15](https://github.com/syntro-opensource/webpack-config/issues/15))
- postcss from 7.0.32 to 7.0.34 ([#16](https://github.com/syntro-opensource/webpack-config/issues/16))
- webpack from 4.44.1 to 4.44.2 ([#17](https://github.com/syntro-opensource/webpack-config/issues/17))
- webpack-bundle-analyzer from 3.8.0 to 3.9.0 ([#18](https://github.com/syntro-opensource/webpack-config/issues/18))
- eslint from 7.9.0 to 7.10.0 ([#20](https://github.com/syntro-opensource/webpack-config/issues/20))
- sass from 1.26.10 to 1.26.11 ([#19](https://github.com/syntro-opensource/webpack-config/issues/19))


<a name="1.0.4"></a>
## [1.0.4] - 2020-09-15
### 🧬 Dependencies
- eslint from 7.8.1 to 7.9.0 ([#11](https://github.com/syntro-opensource/webpack-config/issues/11))
- stylelint from 13.7.0 to 13.7.1 ([#13](https://github.com/syntro-opensource/webpack-config/issues/13))
- mini-css-extract-plugin from 0.11.1 to 0.11.2 ([#12](https://github.com/syntro-opensource/webpack-config/issues/12))


<a name="1.0.3"></a>
## [1.0.3] - 2020-09-09
### 🧬 Dependencies
- mini-css-extract-plugin from 0.11.0 to 0.11.1 ([#8](https://github.com/syntro-opensource/webpack-config/issues/8))
- css-loader from 4.2.2 to 4.3.0 ([#9](https://github.com/syntro-opensource/webpack-config/issues/9))
- postcss-loader from 4.0.0 to 4.0.1 ([#10](https://github.com/syntro-opensource/webpack-config/issues/10))
- postcss-loader from 3.0.0 to 4.0.0

### Pull Requests
- Merge pull request [#7](https://github.com/syntro-opensource/webpack-config/issues/7) from syntro-opensource/dependabot/npm_and_yarn/postcss-loader-4.0.0


<a name="1.0.2"></a>
## [1.0.2] - 2020-09-04
### 🧬 Dependencies
- [@babel](https://github.com/babel)/core from 7.11.5 to 7.11.6
- sass-loader from 10.0.1 to 10.0.2
- eslint from 7.8.0 to 7.8.1

### Pull Requests
- Merge pull request [#5](https://github.com/syntro-opensource/webpack-config/issues/5) from syntro-opensource/dependabot/npm_and_yarn/sass-loader-10.0.2
- Merge pull request [#6](https://github.com/syntro-opensource/webpack-config/issues/6) from syntro-opensource/dependabot/npm_and_yarn/babel/core-7.11.6
- Merge pull request [#4](https://github.com/syntro-opensource/webpack-config/issues/4) from syntro-opensource/dependabot/npm_and_yarn/eslint-7.8.1


<a name="1.0.1"></a>
## [1.0.1] - 2020-09-01

<a name="1.0.0"></a>
## [1.0.0] - 2020-09-01
### 🧬 Dependencies
- [@babel](https://github.com/babel)/preset-env from 7.11.0 to 7.11.5
- eslint from 7.7.0 to 7.8.0
- [@babel](https://github.com/babel)/core from 7.11.4 to 7.11.5

### Pull Requests
- Merge pull request [#1](https://github.com/syntro-opensource/webpack-config/issues/1) from syntro-opensource/dependabot/npm_and_yarn/babel/core-7.11.5
- Merge pull request [#2](https://github.com/syntro-opensource/webpack-config/issues/2) from syntro-opensource/dependabot/npm_and_yarn/eslint-7.8.0
- Merge pull request [#3](https://github.com/syntro-opensource/webpack-config/issues/3) from syntro-opensource/dependabot/npm_and_yarn/babel/preset-env-7.11.5


<a name="0.1.0"></a>
## 0.1.0 - 2020-09-01

[Unreleased]: https://github.com/syntro-opensource/webpack-config/compare/1.3.2...HEAD
[1.3.2]: https://github.com/syntro-opensource/webpack-config/compare/1.3.1...1.3.2
[1.3.1]: https://github.com/syntro-opensource/webpack-config/compare/1.3.0...1.3.1
[1.3.0]: https://github.com/syntro-opensource/webpack-config/compare/1.2.1...1.3.0
[1.2.1]: https://github.com/syntro-opensource/webpack-config/compare/1.2.0...1.2.1
[1.2.0]: https://github.com/syntro-opensource/webpack-config/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/syntro-opensource/webpack-config/compare/1.0.6...1.1.0
[1.0.6]: https://github.com/syntro-opensource/webpack-config/compare/v1.0.5...1.0.6
[v1.0.5]: https://github.com/syntro-opensource/webpack-config/compare/1.0.4...v1.0.5
[1.0.4]: https://github.com/syntro-opensource/webpack-config/compare/1.0.3...1.0.4
[1.0.3]: https://github.com/syntro-opensource/webpack-config/compare/1.0.2...1.0.3
[1.0.2]: https://github.com/syntro-opensource/webpack-config/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/syntro-opensource/webpack-config/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/syntro-opensource/webpack-config/compare/0.1.0...1.0.0

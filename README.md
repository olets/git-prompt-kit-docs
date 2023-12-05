# git-prompt-kit-docs ![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/olets/hometown-prompt-docs) ![GitHub commits since latest release (by SemVer including pre-releases)](https://img.shields.io/github/commits-since/olets/hometown-prompt-docs/latest)

Documentation for [Git Prompt Kit](https://github.com/olets/git-prompt-kit)

Read the documentation at <https://git-prompt-kit.olets.dev/>.

## Requirements

- [asdf](https://asdf-vm.com/) and its Node.js plugin
- [pnpm](https://pnpm.io/)

## Dev

### Setup

```shell
pnpm install --shamefully-hoist
```

### Serve and watch

```shell
pnpm docs:dev
```

### Update Algolia index

```shell
cp .env{.example,}
```

and fill in values in `.env`. Then

```shell
pnpm algolia:index
```

## Contributing

Thanks for your interest. Contributions are welcome!

> Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

Check the [Issues](https://github.com/olets/git-prompt-kit-docs/issues) to see if your topic has been discussed before or if it is being worked on.

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## License

<a href="https://www.github.com/olets/git-prompt-kit-docs">git-prompt-kit-docs</a> by <a href="https://www.github.com/olets">Henry Bley-Vroman</a> is licensed under a license which is the unmodified text of <a href="https://creativecommons.org/licenses/by-nc-sa/4.0">CC BY-NC-SA 4.0</a> and the unmodified text of a <a href="https://firstdonoharm.dev/build?modules=eco,extr,media,mil,sv,usta">Hippocratic License 3</a>. It is not affiliated with Creative Commons or the Organization for Ethical Source.

Human-readable summary of (and not a substitute for) the [LICENSE](LICENSE) file:

You are free to

- Share — copy and redistribute the material in any medium or format
- Adapt — remix, transform, and build upon the material

Under the following terms

- Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- Non-commercial — You may not use the material for commercial purposes.
- Ethics - You must abide by the ethical standards specified in the Hippocratic License 3 with Ecocide, Extractive Industries, US Tariff Act, Mass Surveillance, Military Activities, and Media modules.
- Preserve terms — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.
- No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

## Acknowledgments

- The human-readable license summary is based on https://creativecommons.org/licenses/by-nc-sa/4.0. The ethics point was added.

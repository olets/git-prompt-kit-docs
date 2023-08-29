# Interactive Demo & Configurator

[[toc]]

&nbsp;

<!-- DUPE demo.md, options.md -->

Hometown Prompt is made almost entirely of [Git Prompt Kit](https://git-prompt-kit.olets.dev) components. So almost all of configuration —color customization, symbol customization, dimming vs hiding inactive elements, the number of path segments shows, etc— is done by configuring through Git Prompt Kit. (Git Prompt Kit is bundled with Hometown Prompt, so no additional download is necessary.)

<div style="
  background: white;
  box-shadow: 0 0 1rem 1rem white;
  padding: 0.5rem 1rem;
  position: sticky; 
  top: var(--navbar-height);
">

Play with [configuration](#configuration) and [context](#context) to see how they affect the [components](#components).

To save you constantly scrolling, here is [Hometown Prompt](https://github.com/olets/hometown-prompt) as a concise illustration:

  <PromptComponent/>

(In the terminal, the prompt character will be [expanded as a prompt](https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html) with PROMPT_SUBST and PROMPT_PERCENT. In the default case, `%%` becomes `%`.

</div>

All custom configuration appears here, ready for copying and pasting into your `.zshrc`.

<ConfigComponent/>

<ResetOptionsComponent/>

## Hometown Prompt Configuration

### Content Options

See [Options](./options.md) for descriptions.

<OptionsConfigurationComponent group="hometown prompt content"/>

### Layout Options

See [Options](./options.md) for descriptions.

<OptionsConfigurationComponent group="hometown prompt layout"/>

\* Git ref info is branch or commit, ahead/behind counts, remote name(s), and tag. See the [`GIT_PROMPT_KIT_REF` docs](https://git-prompt-kit.olets.dev/components.html).

## Git Prompt Kit Configuration

### Behavior Options

<OptionsConfigurationComponent group="behavior"/>

### Color Options

<OptionsConfigurationComponent group="color"/>

### Content Options

<OptionsConfigurationComponent group="content"/>

### Symbol Options

<OptionsConfigurationComponent group="symbol"/>

<ResetOptionsComponent/>

## Context

### Terminal

<ContextConfigurationComponent group="Terminal"/>

### User

<ContextConfigurationComponent group="User"/>

### Session

<ContextConfigurationComponent group="Session"/>

### Directory

<ContextConfigurationComponent group="Directory"/>

### Git ref

<ContextConfigurationComponent group="Git ref"/>

#### Triangular workflow

<ContextConfigurationComponent group="Git push ref"/>

### Git status

<ContextConfigurationComponent group="Git status"/>

### Extended Git status

<ContextConfigurationComponent group="Extended Git status"/>

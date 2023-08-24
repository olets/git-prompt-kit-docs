# Interactive Demo & Configurator

[[toc]]

<div style="
  background: white;
  box-shadow: 0 0 1rem 1rem white;
  padding: 0.5rem 1rem;
  position: sticky; 
  top: var(--navbar-height);
">

Scroll down to [Components](#components) for how configuration changes affect the components. Here's [Hometown Prompt](https://github.com/olets/hometown-prompt) as an example:

  <PromptComponent/>

In the terminal, the prompt character will be [expanded as a prompt](https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html) with PROMPT_SUBST and PROMPT_PERCENT

</div>

## Configuration

<ResetOptionsComponent/>

### Behavior Options

<OptionsConfigurationComponent group="behavior"/>

### Color Options

<OptionsConfigurationComponent group="color"/>

### Content Options

<OptionsConfigurationComponent group="content"/>

### Symbol Options

<OptionsConfigurationComponent group="symbol"/>

<ResetOptionsComponent/>

<ConfigComponent/>

## Context

<div style="
  background: white;
  box-shadow: 0 0 1rem 1rem white;
  padding: 0.5rem 1rem;
  position: sticky; 
  top: var(--navbar-height);
">

See [Components](./components.md) for how context changes affect the components. Here's [Hometown Prompt](https://github.com/olets/hometown-prompt) as an example:

<PromptComponent/>

In the terminal, the prompt character will be [expanded as a prompt](https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html) with PROMPT_SUBST and PROMPT_PERCENT

</div>

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

## Components

These change according to the [Context](./context.md) and [Configuration](./configuration.md).

<ComponentsListComponent/>

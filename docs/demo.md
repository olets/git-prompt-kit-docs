# Interactive Demo & Configurator

[[toc]]

<div style="
  background: var(--c-bg);
  box-shadow: 0 0 1rem 1rem var(--c-bg);
  padding: 0.5rem 1rem;
  position: sticky; 
  top: var(--navbar-height);
">

Play with [configuration](#configuration) and [context](#context) to see how they affect the [components](#components).

To save you constantly scrolling, here is [Hometown Prompt](https://github.com/olets/hometown-prompt) as a concise illustration:

  <PromptComponent/>

(In the terminal, the prompt character will be [expanded as a prompt](https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html) with PROMPT_SUBST and PROMPT_PERCENT. In the default case, `%%` becomes `%`.

</div>

## Configuration

All custom configuration appears here, ready for copying and pasting into your `.zshrc`.

<ConfigComponent/>

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

## Components

These change according to the [Context](./context.md) and [Configuration](./configuration.md).

<ComponentsListComponent/>

# Configuration

[[toc]]

<div style="
  background: white;
  box-shadow: 0 0 1rem 1rem white;
  padding: 0.5rem 1rem;
  position: sticky; 
  top: var(--navbar-height);
">

See [Components](./components.md) for how configuration changes affect the components. Here's [Hometown Prompt](https://github.com/olets/hometown-prompt) as an example:

  <PromptComponent/>

In the terminal, the prompt character will be [expanded as a prompt](https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html) with PROMPT_SUBST and PROMPT_PERCENT

</div>

<ResetOptionsComponent/>

## Behavior Options

<OptionsConfigurationComponent group="behavior"/>

## Color Options

<OptionsConfigurationComponent group="color"/>

## Content Options

<OptionsConfigurationComponent group="content"/>

## Symbol Options

<OptionsConfigurationComponent group="symbol"/>

<ResetOptionsComponent/>

<ConfigComponent/>

# Context

<div style="
  background: white;
  box-shadow: 0 0 1rem 1rem white;
  padding: 0.5rem 1rem;
  position: sticky; 
  top: var(--navbar-height);
">
  <PromptComponent/>

In the terminal, the prompt character will be [expanded as a prompt](https://zsh.sourceforge.io/Doc/Release/Prompt-Expansion.html) with PROMPT_SUBST and PROMPT_PERCENT

</div>

## Terminal

<ContextConfigurationComponent group="Terminal"/>

## User

<ContextConfigurationComponent group="User"/>

## Session

<ContextConfigurationComponent group="Session"/>

## Directory

<ContextConfigurationComponent group="Directory"/>

## Git ref

<ContextConfigurationComponent group="Git ref"/>

### Triangular workflow

<ContextConfigurationComponent group="Git push ref"/>

## Git status

<ContextConfigurationComponent group="Git status"/>

## Extended Git status

<ContextConfigurationComponent group="Extended Git status"/>

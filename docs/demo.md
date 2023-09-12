# Interactive Demo & Configurator

:::warning
These are the docs for v4, which is not yet released.
:::

[[toc]]

## Configuration

<div style="
  background-color: var(--c-bg);
  box-shadow: 0 0 0.5rem 0.5rem var(--c-bg);
  padding: 0.5rem 0.5rem;
  position: sticky; 
  top: var(--navbar-height);
">

All custom configuration appears here, ready for copying and pasting into your `.zshrc`.

  <ConfigComponent/>

  <ResetOptionsComponent/>
</div>

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

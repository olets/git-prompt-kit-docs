<script>
import ActionComponent from "./ActionComponent.vue";
import AssumedUnchangedComponent from "./AssumedUnchangedComponent.vue";
import CharComponent from "./CharComponent.vue";
import ConflictedComponent from "./ConflictedComponent.vue";
import CwdComponent from "./CwdComponent.vue";
import DeletedComponent from "./DeletedComponent.vue";
import DeletedStagedComponent from "./DeletedStagedComponent.vue";
import DirtyComponent from "./DirtyComponent.vue";
import GitAheadComponent from "./GitAheadComponent.vue";
import GitBehindComponent from "./GitBehindComponent.vue";
import GitHeadComponent from "./GitHeadComponent.vue";
import GitPushAheadComponent from "./GitPushAheadComponent.vue";
import GitPushBehindComponent from "./GitPushBehindComponent.vue";
import GitPushComponent from "./GitPushComponent.vue";
import GitRefComponent from "./GitRefComponent.vue";
import GitRemoteComponent from "./GitRemoteComponent.vue";
import GitTagComponent from "./GitTagComponent.vue";
import ModifiedComponent from "./ModifiedComponent.vue";
import ModifiedStagedComponent from "./ModifiedStagedComponent.vue";
import NewComponent from "./NewComponent.vue";
import RepoRootComponent from "./RepoRootComponent.vue";
import RepoSubdirectoryComponent from "./RepoSubdirectoryComponent.vue";
import SkipWorktreeComponent from "./SkipWorktreeComponent.vue";
import StashesComponent from "./StashesComponent.vue";
import StatusComponent from "./StatusComponent.vue";
import StatusExtendedComponent from "./StatusExtendedComponent.vue";
import UntrackedComponent from "./UntrackedComponent.vue";
import UserhostComponent from "./UserhostComponent.vue";

export default {
  components: [
    ActionComponent,
    AssumedUnchangedComponent,
    CharComponent,
    ConflictedComponent,
    CwdComponent,
    DeletedComponent,
    DeletedStagedComponent,
    DirtyComponent,
    GitAheadComponent,
    GitBehindComponent,
    GitHeadComponent,
    GitPushAheadComponent,
    GitPushBehindComponent,
    GitPushComponent,
    GitRefComponent,
    GitRemoteComponent,
    GitTagComponent,
    ModifiedComponent,
    ModifiedStagedComponent,
    NewComponent,
    RepoRootComponent,
    RepoSubdirectoryComponent,
    SkipWorktreeComponent,
    StashesComponent,
    StatusComponent,
    StatusExtendedComponent,
    UntrackedComponent,
    UserhostComponent,
  ],
  data() {
    return {
      components: [
        [
          { label: "GIT_PROMPT_KIT_ACTION", componentName: "ActionComponent" },
          {
            label: "GIT_PROMPT_KIT_ASSUMED_UNCHANGED",
            componentName: "AssumedUnchangedComponent",
          },
          { label: "GIT_PROMPT_KIT_CHAR", componentName: "CharComponent" },
          {
            label: "GIT_PROMPT_KIT_CONFLICTED",
            componentName: "ConflictedComponent",
          },
          { label: "GIT_PROMPT_KIT_CWD", componentName: "CwdComponent" },
          {
            label: "GIT_PROMPT_KIT_DELETED",
            componentName: "DeletedComponent",
          },
          {
            label: "GIT_PROMPT_KIT_DELETED_STAGED",
            componentName: "DeletedStagedComponent",
          },
          { label: "GIT_PROMPT_KIT_DIRTY", componentName: "DirtyComponent" },
          { label: "GIT_PROMPT_KIT_AHEAD", componentName: "GitAheadComponent" },
          {
            label: "GIT_PROMPT_KIT_BEHIND",
            componentName: "GitBehindComponent",
          },
          { label: "GIT_PROMPT_KIT_HEAD", componentName: "GitHeadComponent" },
          {
            label: "GIT_PROMPT_KIT_PUSH_AHEAD",
            componentName: "GitPushAheadComponent",
          },
          {
            label: "GIT_PROMPT_KIT_PUSH_BEHIND",
            componentName: "GitPushBehindComponent",
          },
          { label: "GIT_PROMPT_KIT_PUSH", componentName: "GitPushComponent" },
          { label: "GIT_PROMPT_KIT_REF", componentName: "GitRefComponent" },
          {
            label: "GIT_PROMPT_KIT_REMOTE	",
            componentName: "GitRemoteComponent",
          },
          { label: "GIT_PROMPT_KIT_TAG", componentName: "GitTagComponent" },
          {
            label: "GIT_PROMPT_KIT_MODIFIED",
            componentName: "ModifiedComponent",
          },
          {
            label: "GIT_PROMPT_KIT_MODIFIED_STAGED",
            componentName: "ModifiedStagedComponent",
          },
          { label: "GIT_PROMPT_KIT_NEW", componentName: "NewComponent" },
          {
            label: "GIT_PROMPT_KIT_REPO_ROOT",
            componentName: "RepoRootComponent",
          },
          {
            label: "GIT_PROMPT_KIT_REPO_SUBDIRECTORY",
            componentName: "RepoSubdirectoryComponent",
          },
          {
            label: "GIT_PROMPT_KIT_SKIP_WORKTREE",
            componentName: "SkipWorktreeComponent",
          },
          {
            label: "GIT_PROMPT_KIT_STASHES",
            componentName: "StashesComponent",
          },
          { label: "GIT_PROMPT_KIT_STATUS", componentName: "StatusComponent" },
          {
            label: "GIT_PROMPT_KIT_STATUS_EXTENDED",
            componentName: "StatusExtendedComponent",
          },
          {
            label: "GIT_PROMPT_KIT_UNTRACKED",
            componentName: "UntrackedComponent",
          },
          {
            label: "GIT_PROMPT_KIT_USERHOST",
            componentName: "UserhostComponent",
          },
        ],
      ],
    };
  },
};
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>

        <th>Value</th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="component in components[0]"
        :key="component.componentName"
      >
        <td>{{ component.label }}</td>

        <td><component :is="component.componentName" /></td>
      </tr>
    </tbody>
  </table>
</template>

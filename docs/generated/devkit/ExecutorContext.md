# Interface: ExecutorContext

Context that is passed into an executor

## Table of contents

### Properties

- [configurationName](../../devkit/documents/ExecutorContext#configurationname)
- [cwd](../../devkit/documents/ExecutorContext#cwd)
- [isVerbose](../../devkit/documents/ExecutorContext#isverbose)
- [nxJsonConfiguration](../../devkit/documents/ExecutorContext#nxjsonconfiguration)
- [projectGraph](../../devkit/documents/ExecutorContext#projectgraph)
- [projectName](../../devkit/documents/ExecutorContext#projectname)
- [projectsConfigurations](../../devkit/documents/ExecutorContext#projectsconfigurations)
- [root](../../devkit/documents/ExecutorContext#root)
- [target](../../devkit/documents/ExecutorContext#target)
- [targetName](../../devkit/documents/ExecutorContext#targetname)
- [taskGraph](../../devkit/documents/ExecutorContext#taskgraph)
- [workspace](../../devkit/documents/ExecutorContext#workspace)

## Properties

### configurationName

• `Optional` **configurationName**: `string`

The name of the configuration being executed

---

### cwd

• **cwd**: `string`

The current working directory

---

### isVerbose

• **isVerbose**: `boolean`

Enable verbose logging

---

### nxJsonConfiguration

• `Optional` **nxJsonConfiguration**: [`NxJsonConfiguration`](../../devkit/documents/NxJsonConfiguration)<`string`[] \| `"*"`\>

The contents of nx.json.

@todo(vsavkin): mark this as required for v17

---

### projectGraph

• `Optional` **projectGraph**: [`ProjectGraph`](../../devkit/documents/ProjectGraph)

A snapshot of the project graph as
it existed when the Nx command was kicked off

@todo(vsavkin) mark this required for v17

---

### projectName

• `Optional` **projectName**: `string`

The name of the project being executed on

---

### projectsConfigurations

• `Optional` **projectsConfigurations**: [`ProjectsConfigurations`](../../devkit/documents/ProjectsConfigurations)

Projects config

@todo(vsavkin): mark this as required for v17

---

### root

• **root**: `string`

The root of the workspace

---

### target

• `Optional` **target**: [`TargetConfiguration`](../../devkit/documents/TargetConfiguration)<`any`\>

The configuration of the target being executed

---

### targetName

• `Optional` **targetName**: `string`

The name of the target being executed

---

### taskGraph

• `Optional` **taskGraph**: [`TaskGraph`](../../devkit/documents/TaskGraph)

A snapshot of the task graph as
it existed when the Nx command was kicked off

---

### workspace

• `Optional` **workspace**: [`ProjectsConfigurations`](../../devkit/documents/ProjectsConfigurations) & [`NxJsonConfiguration`](../../devkit/documents/NxJsonConfiguration)<`string`[] \| `"*"`\>

Deprecated. Use projectsConfigurations or nxJsonConfiguration
The full workspace configuration
@todo(vsavkin): remove after v17

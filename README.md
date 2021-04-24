**TLDR**: If you just want to start clone this template and read the `README.md` files in each folder.

# What is this?

How to structure a... is going to be a new series of posts where we will explain how we structure curtain frameworks and the process that we went through to get to these setups. We are constantly trying to improve on this process, so there will probably be regular changes to how structure our project and it will also slightly very per app. On a typical app we will not have all these folders but just the ones required. All of these are just recommendations we settled on after a few projects and revisions which should be adapted to your use-case and team preferences.

> “The only constant in life is change”

- Heraclitus

# Why Have a Constant Folder Structure

An awesome and consequently difficult part of React and Nextjs is the lack of structure in development. This is quickly noticeable for anyone working on with a team or switching from a different more opinionated framework. It can lead to many problems or slow downs in development but here are a few issues we ran into:

- Duplicate components and styles
- Broken imports
- Difficult to work in and onboard new team members
- Unoptimized code
- Lost code (someone deleting coding or branch that is in use)

# The Concepts

A few fundamentals to ponder.

## Consistency is Key.

No matter how good the folder structure or plan is it won't do any good unless everyones sticks to it. This might mean modifying the structure to the current project or the teams preferences to make it more enjoyable to work with. Consistency don't only include folder structure but also function / file naming, imports and exports, interfaces and what technologies should be used. It would be helpful to write these down in a technical outline (see the example for more details). We try to use Typescript when possible to improve consistency in our projects and encourage best practices.

## Naming & Case

The start of any consistent structure is naming and casing of files and functions. When used correctly they can give a lot of context around a function and the purpose. For example if we were looking at a file in NextJs called `components/UserProfile.tsx` this would let us know that it is reusable React component which we can import and use. It also gives us an efficent way to search for it by typing something like: `comp user pro` this is really powerful in a large app with many components.

We typically try to use semantic names to the function of the component a few examples would be:

- TextInput.tsx / SelectInput.tsx / CheckboxInput.tsx
  - Inputs that styled and based on the project might be handled by formik
- ProfilePage.tsx / HomePage.tsx
  - Pages that are inside of the pages folder in nextjs and should not be imported
- LoginOverlay.tsx / ErrorOverlay.tsx
  - Full screen overlays that are used to be rendered instead of a page

There are many ways to name files and functions semantically and this is just the idea we are currently using which each project having a bit of its own spin on the idea based on the requirements.

# The Structure

Finally something applicable

As every framework or even project has different requirements, this section is going to be based on NextJs with multiple app combined to give you the best options to pick from. If any of these folders are not used that is okay as long as you follow concept number one... **Consistency.**

## Folders

As this is a general list of semantic folder names it will also contain a description of it's use and the recommended file naming.

### components

Naming: PascalCase.tsx

Pieces of code that are reuse-able independently and made dynamic with props typically, do not share state. If there are many components with the same ending name like Input we will put them in a sub folder and possibly use and `index.ts` to export it cleanly

Examples:

- Card.tsx
- Seo.tsx
- Button.tsx
- TextInput.tsx

### data

Naming: camelCase.ts

Stores data that is static or changes rarely. Could be options for forms such as states or application specific content such as for a marketing site.

### hooks

Naming: camelCase.ts

Anything that has the word `use` in front of it but **doesn't contain use context.**

Examples:

- useStickyState.ts
- useCountdown.ts
- useDebounce.ts
- useInput.ts

### libs

Naming: camelCase.ts

Libs stands for application specific libraries. These could be used to interact with an api or with the window element.

Examples:

- sendMessage.ts

### services

Naming: camelCase.tsx/ts files with 1 capital export for wrapper

Anything that references a wrapping context or outside service or api including firebase, mongodb, react context. Should typically be a wrapping component or an import. If it is a wrapping component it should have one capital export and have a file name ending in `.tsx` else have the name end in `.ts`

### ts

Naming: camelCase.ts

Typescript definitions exports. We prefer to keep the exported interfaces fully capital with \_ to make them easy to find in code.

### utils

Naming: camelCase.ts

An abbreviation of utilities. Should contain very short and specific functions used throughout components and in **libs.**

Examples:

- formatNumber.ts

## Imports

To keep our code readable and make it easy to rearrange components when needed we use typescript absolute imports. To set it up all that is needed is to add snippet at the end of `compilerOptions` in the `tsconfig.json` file.

```json
	"baseUrl": ".",
  "paths": {
    //? Folders
    "@components/*": ["components/*"],
    "@data/*": ["data/*"],
    "@hooks/*": ["hooks/*"],
    "@libs/*": ["libs/*"],
    "@services/*": ["services/*"],
    "@ts/*": ["ts/*"],
    "@utils/*": ["utils/*"],
    //? Files
    "#project": ["project.config.ts"]
  }
```

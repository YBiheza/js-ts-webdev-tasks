# Halloween Website

Implement **only three sections** (`hero`, `gallery` and `footer`) for both RTL and Enlish versions from design according [Figma Design](<https://www.figma.com/file/Z9i2HiOV3VtvhnqkKBUUon/Free-Halloween-Party-Time-Landing-Page-(Community)?type=design&node-id=0-1&mode=design&t=rp5neXS05UbP5lGk-0>)

## Requirements and scoring (maximum 10 points)

### General - 2 points

- Use Vite
- Use TypeScript
- Use HTML5
- Download assets from Figma, put inside `assets` folder and use in the project
  - if there is no any asset (like arabic fonts), replace with any font close to the missing one (https://fonts.google.com/) (there are filters for `Arabic` language fonts)
- All CSS code for each component should be placed into and imported from a separate CSS file

### Hero section - 2 point

- Implement all section (Header and Hero) using `template string and innerHTML` approach
  - Approach example https://jsfiddle.net/nL4zb58v/
  - Approach example https://github.com/School-of-Digital-Competencies/js-ts-webdev-lectures/blob/practice-21-10-2024-three-ways-working-with-dom-api/createElementWithTemplateString.js

### Gallery section - 2 point

- Implement all section (Halloween memories with images) using `document.createElement` approach
  - Approach example https://jsfiddle.net/Lt6sa2cp/
  - Approach example https://github.com/School-of-Digital-Competencies/js-ts-webdev-lectures/blob/practice-21-10-2024-three-ways-working-with-dom-api/createElementWithDocumentCreateElementAndAppend.js

### Footer section - 1 point

- Implement all section (Footer) using `cloneNode and template tag` approach
  - Approach example https://jsfiddle.net/4srewok9/2/
  - Approach example https://github.com/School-of-Digital-Competencies/js-ts-webdev-lectures/blob/practice-21-10-2024-three-ways-working-with-dom-api/createElementWithTemplateHTMLElementTag.js

### Localization - 3 points


- Add localization (two languages EN and AR)
  - For loading locales please add mock request to backend (promise and setTimeout)
- Support RTR/LTL versions (content from right to left for AR translation)
- Localization example https://jsfiddle.net/L8x3hn76/1/
- Localization example 2 https://github.com/School-of-Digital-Competencies/js-ts-webdev-lectures/blob/lecture-24-10-2024-css-module-router/src/main.ts

## How to copy new hometasks into your already forked repository

### One-time installation step

Please add remote branch linking into your local git

#### Console

To do this, please in console run commands

```
git remote rm upstream

git remote add upstream https://github.com/school-of-digital-competencies/js-ts-webdev-tasks
```

#### Visual Studio Code

In Source Control menu click on three dots -> Remote -> Add remote -> Paste `https://github.com/school-of-digital-competencies/js-ts-webdev-tasks` -> Enter upstream

**NOTE** You might need to remove previously created upstream. In Source Control menu click on three dots -> Remote -> Remove remote -> upstream.

### How to start solving new tasks (get new branches into your Git)

#### Console

When the linking is created (see instructions above), run command `git fetch upstream` to get a new branch with tasks.

Type `git branch -a` to ensure you see in a list lines like `remotes/upstream/hometasks-...`.

Assuming the new branch (with new tasks you haven't solved yet) is `hometasks-simple-tasks`.

Type `git switch hometasks-simple-tasks`. If you see two messages

```
Branch 'hometasks-simple-tasks' set up to track remote branch 'hometasks-simple-tasks' from 'upstream'
Switched to a new branch 'hometasks-simple-tasks'
```

Then you did it correctly.

Now the next step is to publish that branch into your Git repositry (origin). Run command `git push -u origin`. You should see a list of messages containing that line:

```
...
To github.com:YOUR_NAME/js-ts-tasks.git
* [new branch]     hometasks-simple-tasks -> hometasks-simple-tasks
...
```

You're done, now you could write solutions for your task.

#### Visual Studio Code

Now when the linking is created, In Source Control menu click on three dots -> Pull, Push -> Fetch From All Remotes menu item to get a new branch with tasks.

Then checkout/switch to that branch (`upstream/hometasks-...`)

Now you could create your solution locally.

To prepare for Autocode submit please push your local branch into your repository. In Source Control menu click on three dots -> Pull, Push -> Push to... -> Select **origin (not upstream)**

### How to get tasks updates

#### Console

Sometimes there are improvements in already published tasks. To get new changes from upstream repository you should use `git pull` command.

For example, let's assume there are some updated in `upstream/hometasks-simple-tasks` branch. Run in console `git pull upstream hometasks-simple-tasks` to pull recent changes from remote branch into your local repository.

## How to run tasks locally

1. Switch to the tasks branch you would like to solve
2. Each task has its own instructions in README.md

## How to submit solution to Moodle

1. Develop a solution
2. Commit your solution
3. _Push your solution to your forked repository_
4. Submit a link to the branch with solution in your forked repository to the moodle

---
template: post
title: Be Updated with recent news and happenings in the department
slug: /posts/news
draft: false
priority: 0
date: 2021-08-17T12:22:42.826Z
description: >-
  Complete guide to force setup LF End-of-line for all your Git projects working
  on Windows.
category: 500lvl Semester
tags:
  - vscode
  - javascript
  - windows
  - git
---

Complete guide to force setup LF End-of-line for all your Git projects working on Windows.

---

1. Run

```
git config --global core.autocrlf false
```

from `Git Console` or when install [Git](https://git-scm.com/download/win):

![Git install window](/media/crlf-to-lf/01.png 'Git install window')

2. Run

```
git rm --cached -r .
git reset --hard
```

from `Git Console` from the root of your project

3. Edit `eol` VS Code settings (User and Workspace):

![VS Code End of line settings](/media/crlf-to-lf/02.png 'VS Code End of line settings')

4. Create `.gitattributes` at the root folder:

```
# Set the default behavior, in case people don't have core.autocrlf set.
* text eol=lf

# Explicitly declare text files you want to always be normalized and converted
# to native line endings on checkout.
*.c text
*.h text

# Declare files that will always have CRLF line endings on checkout.
*.sln text eol=crlf

# Denote all files that are truly binary and should not be modified.
*.png binary
*.jpg binary
```
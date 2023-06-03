# Phase 1 of CI/CD

## Design of Pipeline

We decided to organize our pipeline so that every push to main and pull request must go through the our subprograms prior to authorizing deployment.

## Pipeline Workflows

(As of 05/22/2023)

- Linting
- Unit Tests
- Deployment to Pages

Here is a current diagram representing the features of the pipeline that we have implemented so far:

![pipeline diagram](/admin/cipipeline/phase1.drawio.png)

## Working Features (What has been implemented and what we have left)

- Linting
  - Implemented: workflow file and integration into Github Actions
  - WIP: Nothing as of now
- Unit Tests
  - Implemented: Overarching structure of tests fitted to match current state of the project, integration of tests into GA pipeline
  - WIP: Specific tests that can be integrated into the pipeline as the project progresses
- Deployment
  - Implemented: Github Actions triggered on all pushes to main, deploys to pages
  - WIP: Nothing so far

## Features yet to be implemented

- Potential minification of source files

- Implement more language specific linting for JS, HTML, and CSS

- Add more unit tests as the project develops

# Development Notes

## Milestone 1: Baseline Playwright Test

### What I built
Created a Playwright smoke test that opens The Internet homepage and verifies that the `Welcome to the-internet` heading is visible.

### Why it matters
A smoke test quickly verifies that an important page is reachable and that essential content renders correctly.

### Playwright concepts used
- `test()` defines a test scenario.
- `page` represents the browser tab used by the test.
- `page.goto()` navigates to a URL.
- `page.getByRole()` locates an element by its accessible role and name.
- `expect()` verifies the expected UI state.
- `toBeVisible()` is a web-first assertion that waits for the element to become visible.

### Test isolation
Playwright gives each test a fresh browser context and page. This helps prevent cookies, local storage, authentication state, or actions from one test affecting another test.

### Problem encountered and resolution
<!-- having different test at the beginning was causing a failure so I tried to reproduce the failure I used trace to see where exactly was it failing -->

>## Milestone 2: POM
this Page object model is a design pattern used to help with the organizations and the maintanability of the test suite. Example if a locator changes its easier to fix in one place and not having to look for dozens of test.

## Concepts used:
`first()`
`Last()`
`check`
`uncheck`

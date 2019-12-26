# Ospin Front-End Code Challenge

We are excited to take the next step with you! Our team has prepared a straight forward code challenge for you to complete. We value your time, and while you are free to spend as much time on it as you wish (be it under or over two hours), we have designed this to be completed _within two hours_.

---

## Overview

Provided is a simplified (fictional) working Ospin React application, which we will use to mimic an actual feature implementation. The application features a sidebar which uses React Router to navigate, and is complete with several views and a whole bunch of classic 20th century art. Also provided is a minimal testing set up, which should be all green when starting out.

As we expect to rapidly grow this application with a mean extreme programming machine that the OSPIN webdev team is, we want to make sure we have some sort of graceful error handling page for our clients when we goof up. After all, when you are in the middle of growing a new liver, you can't just have the WebApp (which controls the bioprocess) error and show a blank screen on you.

Instead, we would like to provide our users with an experience similar to these pages:

<div align="center">
  <img src="gitlab_500.png" style="width: 50%">
</div>

<div align="center" style="margin-top: 10px">
  <img src="github_500.jpeg" style="width: 50%">
</div>

---

## Deliverables

- **Provide an error handling layer to the existing application**
  - the sidebar should still be visible, and only the 'main-content' should be replaced with the error view
  - the url should reflect that a user is on the new error page
  - the user should be able to navigate away from the error page using the sidebar (the error page should only take up the 'main-content' window of the application)
  - **bonus:** provide the user with the option to see the actual error and the stack trace
- **When an uncaught error is thrown within any `render` function of a component:**
  - the error view should display
  - the `ServerAPI`'s `reportError` method should be called with the relevant information (error name/type and stack trace)
  - the user should be able to successfully 'navigate back' in their browsers (by clicking the back button, hitting backspace, etc.)
  - **bonus:** provide additional thoughts in this README (space provided below) how the dev team could best make use of this information
- **Test coverage should be provided for this new feature!**

---

## FAQ

**Q**: What do I do once I am finished?
**A**: **Please do not make a PR to the repo.** Instead, send an email to daniel.seehausen@ospin.de either with your finished product zipped and attached, or with a link to somewhere it can be downloaded or (preferably) cloned. Please do not provide any personal identifying information (git history excluded) within the README or the source code. These code challenges are graded blindly!

**Q:** Re: the user experience, do I have to provide some fancy animations/etc. on the error page?
**A:** No! All you need to provide is what you consider a simple and polished view. There are some assets in `src/images` which you are welcome to use, but not required to.

**Q:** May I use dependencies not currently listed?
**A:** Of course! Please use whatever dependencies you see fit. While we have provided a test framework in the challenge, it is by no means necessary to use the same one.

**Q:** May I change the way existing code works?
**A:** Certainly - feel free to edit the repository as you see fit. Keep in mind that your work should reflect how you would go about solving this issue on a real team, and we will value the quality/precision of the git history when reviewing.

**Q:** Will you be reviewing Git history?
**A:** Yes! Please provide a structured and readable Git history. This should mimic a real feature + PR completion.

**Q:** How much test coverage do I need to provide?
**A:** Use your best judgement depending on your time constraints. If it is a choice between 20 tests which cover 50% of the feature, vs. 5 tests which cover 95% of the feature, go for the higher coverage!

**Q:** What if I have additional questions about the feature/user experience?
**A:** First and foremost, feel free to make an assumption as to the answers and list them in the discussion section of the README. Otherwise, reach out directly if you have any questions that feel are blocking to the completion of this code challenge.

---

## Discussion

From what I understood, the feature request was error handling in the UI. This has two parts, error handling when a page could not be found (404) and uncaught error handling in any of the components. Since React Router was used in the app, I added a 404 default page when a url does not match any of the normal routes in the app (`/`, `/profile`, `/devices`, etc). As requested, when there is such an error, the route redirects to `/error`.

When there is an uncaught error in one of the components, for example, a user visits the `/profile` route and encounters some internal error in that route, a 500 error page is displayed. I added an error boundary component as a parent wrapper to the main content of the app as a catch all that displays an error message whenever there is such an eror, or the corresponding child component that was requested if there is no error. Here, the url does not change since the user is visiting an existing url (eg. `/profile`).

### Testing

For testing, I used the React Testing Library as was used originally in the app. I thought the library was an ideal choice because it tests for user interactions with the app and it would be helpful to text for user navigation to and from the error page.
The components in `Main.jsx` were previosuly wrapped by a `BrowserRouter` component. I moved this `BrowserRouter` component to the `App.jsx` file and used it as a wrapper over the `Main` component. I did this to make it easier to manipulate the `history` prop of the `Router` component that is used to wrap the `Main` component during testing. I tested the error components, `ErrorView` and `ErrorBoundary` to ensure that they were each individually performing as required. I tested the `ErrorView` with the `Main` component to ensure that the sidebar still shows up on an error page, the url changes to `/error` when there is a 404 error and the button back to the home page still functions.

### UI

For both error pages, I followed the existing color scheme in the application. Since it is an additional feature to an existing application, I wanted the app to look cohesive. For this same reason, I styled the pages with semantic-ui which had already been used for the other pages. To the 404 Error page, I added a mock search bar and a `Go Back Home` button to help the user navigate the site and hopefully find what they were looking for. I added the `Go Back Home` button as a familiar way (it can be found on a lot error pages) to return to the homepage, despite the presence of the sidebar that they can use for navigation.

For the 500 error page, I used one of the images provided (`OOPSIN.png`) and since the image is a play on words, I went for a more playful error message (as opposed to saying 'A Server error occured'). Since the 500 error is not the user's fault, I included that information to make users unfamiliar with the '500 error' term feel at ease.

On this page, the user has the opportunity to view the error and stack trace but I decided not to make those details immediately visible on landing on the page because 1) some users might not know what that information means and 2) There might be a lot of information on the screen in some cases.

### App Structure

I followed the original application structure because in a real team, I would not change the application structure to add a new feature except it has been discussed and approved by the team members.

### Additional Thoughts

The stack trace gives information about active stack frames at the point the uncaught error was thrown. The error and stack trace information provided by the Error Boundary component will help the dev team locate the exact component and line of code where the error was thrown (the topmost line of the stack trace) and identify the type of error that was thrown. This information will aid in debugging efforts by the dev team.

### Feature Extensions

#### Mobile Responsiveness

The entire application could be made to look more responsive especially on mobile view. The sidebar does not have to be visible on smaller screens and can be toggled using a hamburger menu. I did not do that in this feature because the feauture specifically requested that the sidebar be visible.

#### Accessibility

Another feature addition to this application would be the improvement of accessibility in the app. This would include adding `alt` text for all images, adding `aria` roles and labels for form elements, ensuring that all text can be read in the right order by a screen reader and so on.

#### Search Functionality on Error

When there is a 404 error, it can be helpful for the user to search the website to try to find what they were looking for. I added a search bar to the 404 error page however, the search bar does not currently work because the app only consists of the frontend. A possible extension would be to implement functionality to search the website and/or search Google.

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
> This is your space to communicate your thoughts as a developer to us. Use this section to describe the decisions you made (architecturally, technically, etc.), as well as any recommendations for alterations/extensions to the feature. Consider what makes a for a stellar PR message and provide it here.

> If there are any assumptions you had to make because of ambiguity in the feature request, please list them here!

> If your implementation involves additional setup, please let us know here.

> Any and all feedback on the code challenge is greatly appreciated. Please let us know if it could be improved, if it was too long, if expectations weren't clear, etc.!

---
audience: "students and professors in post-secondary institutions"
description: "This project was initiated due to Ontario Government mandates for all public websites to comply with WCAG 2.0 Level AA by January 1, 2021. We also needed to demonstrate accessibility to align with AODA requirements for specific business partners."
duration: "32 weeks"
hero:
    alt: "Form Accessibility for   Screen Readers: (1) User moves focus to Change Password button, (2) user presses Change Password button, (3) request is processed and the screen reader reads “Processing”, (4) focus is brought to the New Password field where there is an error, (5) user is notified that their passwords do not match so that they may correct the issue."
    isEmbed: false
    caption: "Form Accessibility for Screen Readers: (1) User moves focus to Change Password button, (2) user presses Change Password button, (3) request is processed and the screen reader reads “Processing”, (4) focus is brought to the New Password field where there is an error, (5) user is notified that their passwords do not match so that they may correct the issue."
    url: "/design/accessibility-compliance-for-e-store/screen-reader.gif"
tags: ["Accessibility Audit", "Documentation", "Wireframes"]
thumbnail:
    alt: ""
    url: "/design/accessibility-compliance-for-e-store/accessibility-compliance-for-e-store-thumbnail.jpg"
title: "Accessibility Compliance for e-Store"
year: 2020
---

<!-- markdownlint-disable MD033 -->

## Description

This project was driven by the legal requirements from the Government of Ontario that all public websites must meet WCAG 2.0 Level AA compliance by January 1, 2021. We were also required to prove that our web application is accessible to meet AODA (Accessibility for Ontarians with Disabilities Act) requirements of certain business partners.

## Project Role

I was the sole user experience designer on an agile team of two developers and two quality assurance testers. I was responsible for identifying and documenting all areas of the e-store that did not meet WCAG 2.0 Level AA compliance and providing specifications for how to resolve these issues.

## Process

I began by doing an audit of the web application against each of the accessibility criteria and documenting all failures. I then broke these down by area and identified those that were recurring elements across the site (for example, navigation) and those that would need to be fixed on individual pages so that the developers could more easily organize their work.

I also tested the application using browser extensions and screen readers, including JAWS, NVDA and VoiceOver. JAWS was chosen because it is a best-in-class screen reader. NVDA was chosen because it is free and widely available to windows users. VoiceOver was chosen because it is built into the MacOS and iOS platforms. Testing with screen readers allowed me to identify areas of improvement for users who require assistive technology to navigate the web. I provided requirements to the development team in the form of wireframes for new features, like the addition of a sitemap, and specifications for resolving issues with missing states and colour contrast.

To complete the project, I participated in accessibility testing of our key user flows, including registration and checkout. I presented our work to project stakeholders and updated the VPAT (Voluntary Product Accessibility Template) that we provide to prospective clients to demonstrate our accessibility compliance. Finally, I created a training guide for our marketing and implementation teams so that any new content they publish to the e-store will be compliant.

## Challenges

While running accessibility testing with screen readers, I learned that each screen reader interprets and relays website information differently. There are also many user-defined configuration options that can affect verbosity, pronunciation, navigation and commands. This means that the experience that a user may have of a given website can differ dramatically depending on the assistive technology they are using. In designing the experience for non-sighted users, I had to find solutions that would work across screen reader tools and also not interfere with, or be negated by, user controls.

## Solution

Testing the e-store with assistive technology highlighted some crucial usability issues for non-sighted users. I used this information to guide user experience improvements, including adding screen reader text to status messages to tell users the type of notification they were receiving, using aria-regions to direct screen reader focus to new content on the page, and making it easier for users to dismiss modals using keyboard commands.

### Example

Modal dialogs should be used sparingly, as they require the user to adjust their context, and this can be particularly challenging for users who require assistive technology. I recommended the following behaviour and specifications in order to ensure that the modals on the e-store would be accessible.

Modal dialogs are announced to assistive technology so that visually impaired users are aware that they are in a new context. When a modal is opened, focus is brought inside the modal to the header and a descriptive header is used to provide context. Sufficient contrast is used between the modal and the background overlay to aid users with low vision. In order to interact with the modal content, users may key through focusable items. Once the user has reached the bottom of the modal they return to the top. The user does not leave the modal context.

It is generally a best practise not to overload these dialogs with too much content. However, if a modal must contain a large amount of content and therefore scroll, only the modal content should scroll and the background should be prevented from scrolling. Users must be able to easily return to their original context from within the modal dialog. Therefore, multiple methods were made available to users and are highlighted in the example below.

<figure class="figure">
    <img src="/design/accessibility-compliance-for-e-store/anatomy-of-a-modal.jpg" alt="Ways to exit the modal context: (1) “OK” button in bottom-right corner, (2) Close icon in top-right corner, (3) Clicking on the background outside the modal, (4) Pressing the “Escape” key." class="figure-img img-fluid w-100">
    <figcaption class="figure-caption">
        Ways to exit the modal context: (1) “OK” button in bottom-right corner, (2) Close icon in top-right corner, (3) Clicking on the background outside the modal, (4) Pressing the “Escape” key.
    </figcaption>
</figure>

---
audience: "database administrators"
description: "The project aimed to evaluate usability challenges and pain points in an enterprise application used for tracking work, monitoring client system status, and scheduling and assigning roles. Its goal was to understand usage patterns, pinpoint areas needing improvement, and prioritize changes that would enhance user experience with minimal disruption to business operations."
duration: "26 weeks"
hero:
    caption: "Ticketing System Mind Map: This mind map was created to visualize the results of a card sorting exercise with 12 participants. Participants were asked to organize 57 cards into categories, placing similar content together. This remote testing was conducted using OptimalSort."
    isEmbed: true
    url: "https://whimsical.com/embed/C1WETPZE1eE8uCZ4GyuWtP"
id: 1
thumbnail:
    alt: ""
    url: "/design/internal-ticketing-system-for-dbas/internal-ticketing-system-for-dbas-thumbnail.jpg"
tags: ["Card Sorting", "Interactive Prototype", "Survey", "User Interview"]
title: "Internal Ticketing System for DBAs"
year: 2015
---

<!-- markdownlint-disable MD033 -->

## Description

The purpose of this project was to assess the usability challenges and pain points of an existing enterprise application. This application was used to track work, monitor the status of client systems and schedule and assign roles. The goal of this project was to gain insight into how the application is being used, identify areas that could benefit from improvement and prioritize the work that would offer the greatest impact on the user experience while being the least disruptive to existing business operations.

<figure>
    <blockquote class="blockquote">
        <p>The internal team is reluctant to put themselves out there. Often they resort to just working with what they have.</p>
        <figcaption class="blockquote-footer">User Interview Participant</figcaption>
    </blockquote>
</figure>

## Project Role

I was the sole user experience designer working on this project. I worked with stakeholders to gather requirements as well as to get buy-in for interviews and testing. I created the design and test plan for this project and worked with the development team through implementation, beta testing and release.

## Process

I began this project by performing a heuristic analysis of the existing user experience, leveraging Jakob Nielsen's 10 general principles for interaction design. I then conducted research on competitor applications and familiarized myself with the user personas.

I worked with the project stakeholders to identify users within the organization who would be both good representatives of different personas and also active participants in my user group throughout the length of the project. I conducted one-on-one, qualitative interviews with these users and analyzed the results. These results began to show some patterns. I created a survey and distributed it to the entire user base in order to validate these results.

<figure class="figure">
    <div class="ratio ratio-4x3">
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);"  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F73zn1g9HiqpXG9ywGjdjzZ%2FInternal-Ticketing-System-for-DBAs%3Fnode-id%3D424-403%26t%3DroadUt3ghBM8KT2P-1%26scaling%3Dcontain%26content-scaling%3Dfixed%26page-id%3D423%253A50" allowfullscreen></iframe>
    </div>
    <figcaption class="figure-caption">
        Dashboard Beta Survey Results: Users were asked a series of Likert scale questions. The survey was distributed using <a href="https://www.google.ca/forms/about/">Google Forms</a> and received 28 responses.
    </figcaption>
</figure>

The results of the interviews and survey pointed to some key areas of the application that would benefit from improvement, such as dashboards, notifications and navigation. The goal of these new features was to reduce the risk of missing critical issues that occurred during off-hours, reduce the number of missed notifications, enable users to more efficiently find what they are looking for, reduce the risk of errors in client work and allow consultants to begin tasks more quickly with less initial overhead. I created a design concept for these features beginning with wireframes and then an interactive prototype. I tested this prototype with my user group and reported the results to the project stakeholders. I also conducted a remote card sorting exercise of navigation items. This helped me build a mind map that would inform our future information architecture.

Our team implemented a beta version of the prototype and iterated using feedback gathered through a survey and working group. Once we had a stable MVP, we released the feature into production and continued monitoring usage using Google analytics.

## Challenges

The biggest challenge of this project was to propose changes to the experience that would be significant enough to have a positive impact on the day-to-day work of the user base, without disrupting their ability to perform their tasks. In order to overcome this challenge, I recommended that we start with new features, like the dashboard and notification system, that would not interfere with their current workflow, but that they could learn and experiment with at their own pace.

I also proposed an iterative approach that would allow us to roll out smaller changes at more regular intervals, rather than large, disruptive changes. Changing the information architecture of the navigation system was deemed to be an item of high value to users, but was deprioritized and scheduled later in the project because of the inherent risk of such a significant change.

## Solution

<figure class="figure">
    <div class="ratio ratio-16x9">
        <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGsO0zyvTEMIjd1fX1Pice9%2FInternal-Ticketing-System-for-DBAs%3Fnode-id%3D1-2%26t%3DKCAyQsMjec5Y8fHD-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D0%253A1" allowfullscreen></iframe>
    </div>
    <figcaption class="figure-caption">
        Personal Dashboard Prototype: This prototype was used to conduct usability testing with 13 participants: 3 external clients, 7 internal consultants and 3 internal managers. This testing allowed the proposed solution to be validated and refined before implementation, thereby reducing the risk of unforeseen impacts once it was introduced.
    </figcaption>
</figure>

Based on the data gathered over the length of this project, I learned that the application contained large amounts of information that were difficult to parse and compare. The nature of the work also required high priority tasks to be resolved quickly in order to meet SLAs and mitigate risk. My recommendation to the project stakeholders was to improve the usability of the application by investing in dashboards and notifications.

---
title: "E-Reader Text-to-Speech Feature"
description: "The purpose of this project was to conceptualize and design a new customer portal. This project was undertaken to support a change in business direction from selling fixed contracts to a subscription payment model. This application was used by customers to track work, view reports and open tickets. The goal of this project was to create an experience that would be catered to the specific needs of different user groups, providing them with the level of information they needed in a just-in-time manner."
image:
    url: "/design/e-reader-text-to-speech-feature/e-reader-text-to-speech-feature-thumbnail.jpg"
    alt: "Alternative text."
tags: ["Competitor Analysis", "High-Fidelity Mockups", "User Scenarios"]
---

<!-- markdownlint-disable MD033 -->

<figure>
  <img src="/design/e-reader-text-to-speech-feature/text-to-speech-mockups.jpg" alt="Read Aloud Feature Mockups: (from left to right) (1) Mobile lock screen with audio controls, (2) Read Aloud on mobile phone, (3) Read Aloud on tablet.">
  <figcaption>
    Read Aloud Feature Mockups: (from left to right) (1) Mobile lock screen with audio controls, (2) Read Aloud on mobile phone, (3) Read Aloud on tablet.
  </figcaption>
</figure>

## Year

2019

## Audience

Students in post-secondary institutions

## Duration

8 weeks

## Description

The purpose of this project was to improve the experience of an existing text-to-speech feature (called Read Aloud) that was a regular pain point for users and to make the experience consistent across platforms (Windows, Mac, iOS and Android) and between book formats (PDF and EPUB). The goal of this project was to design a feature that would allow users to have more control over how their books were read and to provide value for students with learning challenges or visual impairments.

<figure>
  <blockquote>
    It starts reading the text from the very beginning and doesn’t let you decide where to start reading from. The laptop top [sic] app does though. I think this feature will be an amazing tool students can utilize! Please fix and update.
    <figcaption>Student User Review</figcaption>
  </blockquote>
</figure>

## Project Role

I was one of two user experience designers working on an agile team alongside three developers and a quality assurance tester. I was responsible for understanding and communicating the key user scenarios and defining the user experience requirements for this project.

## Process

We began this project by doing a heuristic analysis of the existing text-to-speech functionality and reviewing user feedback. We then conducted competitor analysis and tested similar features in other e-reader applications that our user base reported using, such as Kindle (Amazon) and Bookshelf (VitalSource).

In order to understand the needs of students with learning challenges, we met with stakeholders and subject matter experts at the Centre for Accessible Learning Adaptive Technology (CAL AT) Lab of one of our client colleges. These SMEs emphasized the importance of text-to-speech features for students with learning challenges as often they have a difficult time reading and are able to retain information better when it is spoken.

We used these findings to capture the user experience requirements for this feature, communicated them to the development team and project stakeholders and worked alongside the QA team to test during implementation.

<figure>
  <blockquote>
    Students are not taught to read textbooks from beginning to end, but rather to jump around the book: introduction, conclusion, chapter questions, selective parts of the chapters. When the audio is set to begin at the top of the screen, this makes it difficult for users to pick up where they left off.
  <figcaption>SME Interview Participant</figcaption>
  </blockquote>
</figure>

## Solution

While capturing user feedback, we discovered that many students were using this feature while commuting. Understanding this use case helped us to prioritize some requirements, including allowing the book to be read continuously, giving the users access to audio controls on their phone’s lock screen and making it easy for them to skip back to a previous section if they missed some of the content that was read. We also introduced word-by-word highlighting to further assist students with learning challenges to follow along with the text.

<figure>
  <img src="/design/e-reader-text-to-speech-feature/text-to-speech.gif" alt="Read Aloud Feature: (1) User taps play icon to start Read Aloud, (2) a notification is displayed to tell the user that Read Aloud has started, (3) feature begins reading and outlines word-by-word, (4) user taps pause icon to pause Read Aloud, (5) a notification is displayed to tell the user that Read Aloud has paused.">
  <figcaption>
    Read Aloud Feature: (1) User taps play icon to start Read Aloud, (2) a notification is displayed to tell the user that Read Aloud has started, (3) feature begins reading and outlines word-by-word, (4) user taps pause icon to pause Read Aloud, (5) a notification is displayed to tell the user that Read Aloud has paused.
  </figcaption>
</figure>

## Challenges

One of the biggest challenges in this project was the requirement to support both PDF and EPUB books. EPUBs are optimized for viewing on devices, while PDFs are not re-flowable, so we knew that there would be limitations on how text-to-speech could work on PDF books.

We needed to make a decision about whether to add some nice-to-have features to EPUB books, knowing that these would be absent from the experience for users with PDFs. We had received feedback from users in that past that they did not understand the difference between these formats and simply felt that some books in their library had a better experience than others. We did not want to create additional confusion or friction so we opted to create a consistent experience between formats.

<figure>
  <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8sPUfwKAHXyv5rP65gBcMR%2FCase-Study-4-E-Reader-Text-to-Speech-Feature%3Fnode-id%3D68%253A793%26viewport%3D536%252C40%252C1.4114350080490112%26scaling%3Dcontain" allowfullscreen></iframe>
 <figcaption>User Scenarios: Requirements were captured using scenarios. This allowed us to illustrate various ways that users might interact with the feature and ensured that we had designed purposeful, and well thought-out results to these behaviours.</figcaption>
</figure>

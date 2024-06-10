---
title: "Recurring Billing for Subscription Offerings"
description: "This project was driven by a new business requirement to support recurring billing for subscription products. Prior to this, two types of software product licenses were sold: perpetual licenses and time-bound licenses. This new business direction required us to also support recurring subscriptions that could automatically be billed and renewed on a regular basis (i.e. every month, 6-months or year). The goal of this project was to create an experience for students and professors that would allow them to easily manage their subscriptions and payments and to create an experience for administrators that would allow them to configure and manage subscription products in their stores."
image:
    url: "/design/recurring-billing-for-subscription-offerings/recurring-billing-for-subscription-offerings-thumbnail.png"
    alt: "Alternative text."
tags: ["Competitor Analysis", "Content Development", "Wireframes"]
---

<!-- markdownlint-disable MD033 -->

<figure>
    <iframe src="https://whimsical.com/recurring-billing-5XYp3sneXV7tGMY9jEhruK"></iframe>
    <figcaption>
    Caption.</a>.
    </figcaption>
</figure>

## Year

2018

## Audience

Students and professors in post-secondary institutions

## Duration

36 weeks

## Description

This project was driven by a new business requirement to support recurring billing for subscription products. Prior to this, two types of software product licenses were sold: perpetual licenses and time-bound licenses. This new business direction required us to also support recurring subscriptions that could automatically be billed and renewed on a regular basis (i.e. every month, 6-months or year). The goal of this project was to create an experience for students and professors that would allow them to easily manage their subscriptions and payments and to create an experience for administrators that would allow them to configure and manage subscription products in their stores.

## Project Role

I was one of two user experience designers working on an agile team alongside seven developers and three quality assurance testers. I was responsible for capturing design requirements and planning sprint work. I shared responsibility for the overall design of the feature.

## Process

We began by mapping out the potential use cases and scenarios as there were many and we needed to ensure that our team and stakeholders were in alignment. We used wireframes to work through UX challenges. This included making changes to the checkout flow to support saving payment methods, making changes to the product details to explain to users how regularly the subscription would renew, and creating a new page where subscriptions could be managed. However, the majority of our work involved finding ways to clearly communicate the complex business rules to our different user groups.

## Challenges

Through competitor analysis, we discovered that one of our main use cases for this feature was quite unique in the market. With most subscription services, the user is billed for their renewal on the first day of the new cycle. For one of the software subscriptions we were offering, we had a requirement from the publisher to bill for renewal 15 days before the end of the customer’s current cycle. As this was not something our users would be accustomed to, we needed to ensure that this was communicated when the user added the item to their cart, when viewing subscriptions in their account and in their email confirmation on submission.

Due to the nature of the monolithic ecosystem we were working in, the business logic and functionality around purchases, invoicing, and products was decentralized. Since the front end was not decoupled from the backend, we needed to identify all of the places where changes needed to be made to support this new business process.

## Solution

We iteratively worked through the process of refining our messaging by gathering feedback from users as well as our customer success team who would be supporting the new model. We considered how messaging and statuses were prioritized and we were careful to use non-technical terminology. It was critical for us to help customers understand things that had financial implications for them, such as they must have a payment method saved for subscriptions and they can only cancel subscriptions before a certain date. We used data from our existing email notifications to inform the appropriate time for alerts to be sent to our customers to give us the best chance for them to be actioned.

On the configuration side, we needed to ensure that administrators could decide to stop offering a subscription product and that we had accounted for the scenario where there were still active subscribers. These subscribers would need to be able to continue out the length of their original subscription but receive clear communication that they could not renew.

To see examples of this alert content, please visit [Alert Content for Recurring Billing](https://docs.google.com/document/d/1H9w1S7dDXy_e6RAqmfuo5wTJg-e4qSFjI1_3pWdbLkM/edit#heading=h.bwhy8gp6o5wj).

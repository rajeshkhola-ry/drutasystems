# Rules for this project (Druta Systems website)

These are in addition to my global DAI Flash rules. Stop and ask me if a request would break one.

## This site takes no money

There is no billing, no checkout, no payment gateway and no invoicing here. It is a venture
studio website: it shows what we build and how to contact us.

So there is nothing here for tax, GST, VAT, currency conversion or payment code to act on. Prices
on this site are text on a page - "₹49,000 + 18% GST" is a sentence, not a calculation. If a
request asks for tax or payment logic in this project, say so and ask me what I actually want
before writing any of it.

The real GST/VAT package is `druta-tax-engines` and it belongs where money is genuinely charged -
The Clip Editor and Get Ready Job - not here.

## Design comes from what is already on the page

This site has one look: dark slate background, cyan and indigo accents, rounded cards with a
border that lights up on hover, pill-shaped tags. Match it by copying the classes already used in
the file you are editing. Do not introduce a new colour, font, shadow style or card shape.

## The navigation lives inside each page file - leave it there

Every page in this site carries its own `<nav>` block inside its own page file. That is how this
site is built. It is not the tidiest arrangement and you do not need to tell me so.

Change the nav only where it already exists, in the page file being worked on. Do NOT move the
nav into `layout.tsx`, do not create a shared nav component, and do not add a nav anywhere it is
not already present - `layout.tsx` has no nav and must not grow one, or every page ends up
showing two navigation bars stacked on top of each other.

If a nav link needs to appear on several pages, that means editing each of those page files. If
you can only change one file in this job, change one, and tell me plainly which other pages still
need the same edit so I can run them separately. Do not restructure the site to avoid the
repetition.

## Do not refactor anything I did not ask you to refactor

Fix or add exactly what was asked. Moving code to a better place, extracting a shared component,
renaming things for consistency, or tidying a file you happened to open are all changes I did not
ask for - and a rewritten file is impossible to review, so it will be rejected. If you think
something genuinely should be restructured, say so and let me decide. Do not do it inside a job
about something else.

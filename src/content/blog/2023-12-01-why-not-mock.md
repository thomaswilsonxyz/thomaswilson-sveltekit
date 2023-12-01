---
title: Why not mock in your automated tests?
date: 2023-12-01T07:48:55.524Z
slug: 2023-12-01-why-not-mock
author: Thomas Wilson

---
Mocking isn’t inherently a bad thing.

They can simulate expensive (time, computation, money) external dependencies like database or third-party services.  Though these integrations should have _some_ level of integration test, this shouldn’t be a dependency for unit-level, or sibling/dependent software.

However, overly liberal use can lead to a brittle test suite that poorly reflects the actual behaviour of a system. This is to say: the tests are not simulating what will happen in a production environment, and therefore do not give us any confidence in the behaviour or stability of our code (bad).

They assume certain inputs and outputs, which may not align with the evolving nature of external systems or dependencies.  Mocks are easy to mis-use because:

- Mocks which are too broad (e.g. “whenever someone makes a `FIND` call in SQL, return this result) wouldn’t catch a breaking change in the properties we’re actually `FIND`ing),
- Mock which are too specific (e.g. “whenever someone calls `getPerson` with the arguments `['the-id', true]` - you should return this record) tie the mock very closely to the implementation details of how we e.g. get a person.

Without careful maintenance (imo, low-efficient effort), set-ups for mocks end up as [Rain Dances](http://www.catb.org/jargon/html/R/rain-dance.html) - a long-step of actions occur, some of which overwrite each other, just to get the test to green.  Doing this rain dance takes time, and offers no value in terms of the reliability of the software built.

Even worse than wasting time: the goal is sometimes to just get the tests to pass, at the expense of getting the to reliably fail.  That is to say: changing the implementation in a way which  _should_ cause it to fail, does not.  This is the first step of the RED-GREEN-REFACTOR cycle.

This situation impedes the agile evolution of the software, as developers may become hesitant to improve or modify code due to the overhead of updating numerous dependent mocks. As such, what initially seems like a tool for increasing development speed can, paradoxically, slow down long-term progress.

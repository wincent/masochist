---
tags: testing wiki
cache_breaker: 1
---

# Reasons for doing automated testing

## The obvious reasons

-   **Confirm correct behavior of code:** in other words, confirm that the code does what you think it does
-   **Conversely, detect bugs:** when the code *doesn't* do what you think it does, you've probably discovered a bug
-   **Once a bug is detected and fixed, be alerted if it ever comes back:** otherwise known as "regression tests"
-   **Freedom to refactor without fear:** the tests serve as a "safety net" to catch unintended changes in behavior when you refactor the code

## Less obvious reasons

### Under [TDD](/wiki/TDD) ([Test-Driven Development](/wiki/Test-Driven_Development))

-   **Guide development at a low level:** each new test is an indication of what code to write next
-   **Maintain good test coverage:** because code is only written when it is needed to make a test pass, your code coverage (percentage of code base which is exercised by the test suite) remains high
-   **Higher quality tests:** because the first step of the TDD cycle is to write a failing test first, before writing the code that will make it pass, we get confirmation that the test actually does what we think it does (compare this with the first benefit listed above, "Confirm correct behavior of code")

Note how some of these benefits are actually about producing better tests, which in turn leads to benefits for the code under test (better tests lead to better code).

### Without a strict TDD approach

-   **Improve code quality by encouraging "testable" implementations:** tests are easier to write when the code under test is divided into simpler units with better encapsulation; the simpler the code, the more maintainable, and less buggy, it should be
-   **Improve code quality by making you think about design:** this is a more subtle benefit, because beyond thinking about the technical details of the implementation, testing makes you analyze and think more about the code under test, including wider considerations such as large-scale design issues
-   **Improve code quality by increasing the time you spend looking at the code under test:** the mere fact of spending time looking at the code, time you otherwise would not have spent, provides an opportunity to find more bugs and spot opportunities for optimization, improvement and refactoring
-   **Alert to code smells:** if the code is hard to test, it can be an indication that a better design or implementation may be possible; this encourages you to think about doing it another, better way
-   **Focus on behavior:** because testing consists of specifying the desired behavior, the test process encourages you to always focus explicitly on the most valuable aspect of the code, its behavior
-   **Documentation and specification of behavior:** this one isn't about code quality, but is a beneficial side product of the process

# Disadvantages of testing

The above makes it sound as though testing is an unequivocally beneficial process, but it does have one major downside:

-   **Time cost required to implement the tests:** this includes the time spent initially writing the tests, the time spent keeping them up-to-date in the face of changes in the application, and the time spent maintaining an adequate testing tool chain

So, like many things in life, testing involves a trade-off, between the benefits listed above, and the time cost associated with writing and maintaining the tests. The goal, then, is to always act in such a way as to maximize the benefits of the test suite while minimizing the costs:

-   Continuously monitor and evaluate the value and the cost of the test suite (this means adopting a reflective attitude when writing tests)
-   Continuously reflect on the testing process and look for ways to improve practice, making it more valuable and less costly (again, this is about adopting a generally analytical attitude during testing)
-   Look for ways to make tests easier to write (this usually means making them simpler)
-   Look for ways to make tests less fragile in the face of refactoring and other changes (this usually means focussing as much as possible on externally visible behavior, and depending as little as possible on implementation details)
-   Develop consistent patterns for testing and apply them regularly (again, to make writing them simpler)
-   Invest your testing time where you will reap the maximum dividend (given time constraints that make it impossible to have 100% coverage, identify the area of the application that will most benefit from testing)
-   Acquire good coding habits that enable you to write more testable code the first time, rather than after refactoring

Note that many of these points are a little vague, because they depend on the intuition and experience of the developer. This intuition and experience is acquired, obviously, through actually doing testing. A natural consequence of doing testing, then, will be the gradual improvement of the test suite and the testing process (ie. the benefit-to-cost ratio will improve).

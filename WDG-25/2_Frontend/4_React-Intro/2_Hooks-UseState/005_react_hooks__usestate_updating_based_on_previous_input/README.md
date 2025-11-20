Updating based on previous input
================================

Back to counters... I know...

But consider this example.

**State updates are scheduled, not immediate**

React doesn't update state values immediately. Instead, it schedules them for the next render. That means if you call `setState(value)` multiple times in a row, each call will use the _same current value_—even if the previous call already made a change.

The basic signature of the `useState` hook, takes a value you want to set as the new state. In `SettingValueDirectly` the problem is that React only updates the state for the next render, so those 3 call operate with the same value of `counter`, resulting in all operations computing to `1`

#### Direct updates vs updater functions

If your new state depends on the **previous** one (like adding, counting, or pushing to an array), you should use the **updater function form** of `setState`. This version lets React pass the most recent value in.

In `PassingAnUpdater` we are using the alternative signature. We are passing a function. Yes! `useState` is a higher order function. This function we are passing is called `updater` and when `useState` detects a function as an argument, it calls it with the current value of the state and whatever you return from the `updater` will be set to state. 

In general, if the new value of state depends on the previous one, like with this counter or adding elements to an existing array, an `updater` is preferred. Although React does everything it can to guarantee, for example, you never get "stale" state in an event, it never hurts!
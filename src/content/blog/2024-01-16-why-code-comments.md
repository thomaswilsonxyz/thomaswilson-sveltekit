---
title: Why code comments?
date: 2024-01-16T21:59:17.367Z
slug: 2024-01-16-why-code-comments
author: Thomas Wilson

---
Let's get into some real 2018 Wilson shit and talk about writing comments in code. 

Comments are bits of text that developers leave in code files that are explicitly marked as "please ignore" to the computer who reads the computer instructions.  

They are written messages from one developer to another.

Why would you leave a comment?  One of the notorious (if not impactful) texts of software engineering, [Clean Code](https://www.oreilly.com/library/view/clean-code-a/9780136083238/), holds that comments are a failure of code.  It should be clear what code is doing, and comments are a crutch that prevent code from being Clean. 

I was recently reading  [A Philosophy of Software Design](https://www.amazon.co.uk/Philosophy-Software-Design-John-Ousterhout/dp/1732102201) (sorry about the Amazon link).  The author has taught software engineering to undergraduates in American institutes, and noticed some recurring patterns in how people (novices, especially) create their own shortfalls.   They put into words some of the heuristics I've shaped over the years.  

I wanted to write down some of those things, and give some examples of what I think about when I am writing comments. 

## Name and Date

Always name and date a comment.  

A comment written last month is different to something that's been around for a year.  A comment left by your good colleague Wilson might read differently to something left by another engineer.  

As a bonus, if you feel like you don't want to attach your name to a comment (e.g. it might not be quite true, or might be a cop-out), then this is a good way yo make you encounter those feelings.

As a bonus bonus point, I preface my initials with a `--`, to make a pretty easy `grep`-able string.  Here's a nice one-liner:  `ag -i '\-\-tjw' ./`. As of right now, I have committed 32 comments in 19 files since November 2023

```js
// It would be nice to use the Intl library here --TJW 2023-01-15
export const formatDate = (date) => externalLibrary.format(date, 'yyyy-mm-dd')
```


## Name the uncertainty

Label code that is likely to change soon. ("Soon" becomes easy to define when you name and date everything).  

Label code which contains known problems, 

Clearly label problematic patterns which should not worth copy-pasted.  If we find ourselves in an unfamiliar part of the codebase, we might copy-paste something nearby to get going.  I think copy-pasting without critically evaluating the quality of code (hard if you don't have context) is a serious pathway to how problems proliferate.  

```js
export class User {
	// The User model shouldn't be coupled to encrpytionLibrary
	// if you find yourself here, please consider extracting this
	// to a separate package or module --TJW 2024-01-15
	static encryptPassword(password: string): string {
		return encryptionLibrary.encrypt(password);
	}
	
	// We plan to replace this with a 'chosenName' field soon 
	// --TJW 2005-10-12
	get fullHumanName(): string {
		return [this.firstName, this.familyName].join(' ');
	}
}
```

## Name the change or non-compliance 

Similarly, if you're writing code which doesn't fit a norm or expected pattern, then call it out.

This stops the copy-paste problem above, but largely serves to highlight variation of patterns in the codebase.  

It there is going to be variation (things will never be consistent everywhere) - it's good to have the context about *why* this decision was made.

There's a meaningful difference between someone not knowing the best practice, and someone knowingly deviating from it. 

```js
// We are injecting the currency here, but normally we would
// take it from the Order.  We're passing it in as an argument
// because we might need to calculate tax differently based
// on locale --TJW 2024-01-16
export const getDeliveryCost(order: Order, currency: Currency): number => {
	.. 
}
```

## Give the dates in human-form

If you're doing any kind of date and time maths (including conversion), write out what you have in human language.  

Tell me "this is 9am on a Monday in GMT in London" or "this is one second later".  

You're probably okay not to name and date these.

```js

it('should handle time-zone conversion', () => {
	// 09:00 GMT the day before GMT-BST switch over
	const beforeSwitch = new Date('2024-03-30T09:00+01:00')
	// 09:00 BST the day of the GMT-BST switch
	const onSwitch = new Date('2024-03-31T09:00Z)
	
	// ... 
})
```






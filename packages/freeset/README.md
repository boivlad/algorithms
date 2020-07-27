# Find the freedom
## How to test:
1. Clone this repository
2. `yarn`
3. `cd packages && yarn test` or `yarn test` to test all packages, including `freeset`
## How to use:
1. Clone this repository
2. `yarn`
3. `lerna add @algorithm/freeset@1.0.0 packages/app-to-install-in`
3. Example:
```javascript
const { MFS } = require('@algorithm/freeset');
MFS(6, 2, [2, 3, 4, 5, 6, 10]); //Result "3"
```
## Condition
A k-multiple free set is a set of integers where there is no pair of integers where one is equal to another integer multiplied by k. 
That is, there are no two integers x and y (x < y) from the set, such that y = x * k.

You're given a set of n distinct positive integers. Your task is to find the size of it's largest k-multiple free subset.

Write a function solution(n, k, l), that takes two integers n (1 ≤ n ≤ 10 ^ 5) and k (1 ≤ k ≤ 10 ^ 9) 
and list of n distinct positive integers a1, a2, ..., an (1 ≤ ai ≤ 10 ^ 9) 
and return the size of the largest k-multiple free subset of {a1, a2, ..., an}.

## Algorithm
1. Sort the array in ascending order
2. push an element x in the set if the set does not contain an element equals to x/k where x is divisible by k.

## Big O
***O( N * log(N) )***

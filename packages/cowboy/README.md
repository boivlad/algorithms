# Circle Formation

## How to test:
1. Clone this repository
2. `yarn`
3. `cd packages && yarn test` or `yarn test` to test all packages, including `cowboy`
## How to use:
1. Clone this repository
2. `yarn`
3. `lerna add @algorithm/cowboy@1.0.0 packages/app-to-install-in`
3. Example:
```javascript
const { cowboy, discomfort } = require('@algorithm/cowboy');
cowboy(5, [2, 1, 1, 3, 2]); //Result "[1, 2, 3, 2, 1]"
discomfort([1, 2, 3, 2, 1]); //Result "1"
```
## Condition

Cowboy Vlad has a birthday today! There are n children who came to the celebration. In order to greet Vlad, 
the children decided to form a circle around him. Among the children who came, there are both tall and low, 
so if they stand in a circle arbitrarily, it may turn out, that there is a tall and low child standing next 
to each other, and it will be difficult for them to hold hands. Therefore, children want to stand in a circle 
so that the maximum difference between the growth of two neighboring children would be minimal possible.

Formally, let's number children from 1 to n in a circle order, that is, for every i child with number i  
will stand next to the child with number i + 1, also the child with number 1 stands next to the child with number n. 
Then we will call the discomfort of the circle the maximum absolute difference of heights of the children, 
who stand next to each other.

Please help children to find out how they should reorder themselves, so that the resulting discomfort is smallest possible.

Write a function solution(n, l), that takes the number of the children who came to the cowboy Vlad's birthday as n, 
and a list of heights of every child l and return the list of heights of the children in the order in which they should stand in a circle.

## Algorithm
1. Sort the array in ascending order
2. First write all elements with even indices and then all elements with odd indices in reversed order.

## Big O
In this algorithm, we have 2 nested arrays for sorting in ascending order and one for distribution by even and odd numbers 

Following from this, ***O(N<sup>2</sup> + N)***

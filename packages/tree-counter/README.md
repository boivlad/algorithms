# How many trees

## How to test:
1. Clone this repository
2. `yarn`
3. `cd packages && yarn test` or `yarn test` to test all packages, including `tree-counter`

## How to use:
1. Clone this repository
2. `yarn`
3. `lerna add @algorithm/tree-counter@1.0.0 packages/app-to-install-in`
3. Example:
```javascript
const { solution } = require('@algorithm/tree-counter');
solution(3, 2); //Result "5"
```

## Condition

In one very old text file there was written Great Wisdom. This Wisdom was so Great that nobody could decipher it, even Phong — the oldest among the inhabitants of Mainframe. 
But still he managed to get some information from there. For example, he managed to learn that User launches games for pleasure — and then terrible Game Cubes fall down on the city, 
bringing death to those modules, who cannot win the game...

For sure, as guard Bob appeared in Mainframe many modules stopped fearing Game Cubes. Because Bob (as he is alive yet) has never been defeated by User, 
and he always meddles with Game Cubes, because he is programmed to this.

However, unpleasant situations can happen, when a Game Cube falls down on Lost Angles. Because there lives a nasty virus — Hexadecimal, who is... mmm... very strange. 
And she likes to play very much. So, willy-nilly, Bob has to play with her first, and then with User.

This time Hexadecimal invented the following entertainment: Bob has to leap over binary search trees with n nodes. We should remind you that a binary search tree is a binary tree, 
each node has a distinct key, for each node the following is true: the left sub-tree of a node contains only nodes with keys less than the node's key, 
the right sub-tree of a node contains only nodes with keys greater than the node's key. All the keys are different positive integer numbers from 1 to n. 
Each node of such a tree can have up to two children, or have no children at all (in the case when a node is a leaf).

In Hexadecimal's game all the trees are different, but the height of each is not lower than h. 
In this problem «height» stands for the maximum amount of nodes on the way from the root to the remotest leaf, the root node and the leaf itself included. 
When Bob leaps over a tree, it disappears. Bob gets the access to a Cube, when there are no trees left. 
He knows how many trees he will have to leap over in the worst case. And you?

Write function solution(n, h), which input meets the requirements n ≤ 35, h ≤ n and which output is an answer to the given problem. It is guaranteed that it does not exceed 9·10^18.

## Algorithm
1. Create function for recursion
2. In this function check every time check simple n and h
2. In this function check every time check duplicate branch
2. If this two checks is false, create loop 
3. In this loop, divide the main tree into many small trees with recursion
5. Result dividing calculate general count of trees
6. When control passed to the first function call, the value of the last tree is returned

## Big O
In this algorithm, we use divide-and-conquer and has as result:
 At best **O( N * log(N) )** and at worst **O(N)**

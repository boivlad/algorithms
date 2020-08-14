# Curfew

## How to test:
1. Clone this repository
2. `yarn`
3. `cd packages && yarn test` or `yarn test` to test all packages, including `curfew`

## How to use:
1. Clone this repository
2. `yarn`
3. `lerna add @algorithm/curfew@1.0.0 packages/app-to-install-in`
3. Example:
```javascript
const { solution } = require('@algorithm/curfew');
solution(5, 1, 1, [1, 0, 0, 0, 4]); //Result "1"
```

## Condition

Instructors of Some Informatics School make students go to bed.

The house contains n rooms, in each room exactly b students were supposed to sleep. 
However, at the time of curfew it happened that many students are not located in their assigned rooms. 
The rooms are arranged in a row and numbered from 1 to n. Initially, in i-th room there are a i students. 
All students are currently somewhere in the house, therefore a1 + a2 + ... + an = nb. Also 2 instructors live in this house.

The process of curfew enforcement is the following. One instructor starts near room 1 and moves toward room n, 
while the second instructor starts near room n and moves toward room 1. After processing current room, each instructor moves on to the next one. 
Both instructors enter rooms and move simultaneously, if n is odd, then only the first instructor processes the middle room. 
When all rooms are processed, the process ends.

When an instructor processes a room, she counts the number of students in the room, then turns off the light, and locks the room. 
Also, if the number of students inside the processed room is not equal to b, 
the instructor writes down the number of this room into her notebook (and turns off the light, and locks the room). 
Instructors are in a hurry (to prepare the study plan for the next day), so they don't care about who is in the room, but only about the number of students.

While instructors are inside the rooms, students can run between rooms that are not locked and not being processed.
A student can run by at most d rooms, that is she can move to a room with number that differs my at most d. 
Also, after (or instead of) running each student can hide under a bed in a room she is in. 
In this case the instructor will not count her during the processing. In each room any number of students can hide simultaneously.

Formally, here is what's happening:

- A curfew is announced, at this point in room i there are a i students.
- Each student can run to another room but not further than d rooms away from her initial room, or stay in place. 
After that each student can optionally hide under a bed.
- Instructors enter room 1 and room n, they count students there and lock the room (after it no one can enter or leave this room).
- Each student from rooms with numbers from 2 to n - 1 can run to another room but not further than d rooms away from her current room, or stay in place.
Each student can optionally hide under a bed.
- Instructors move from room 1 to room 2 and from room n to room n - 1.
- This process continues until all rooms are processed.

Let x1 denote the number of rooms in which the first instructor counted the number of non-hidden students different from b, 
and x2 be the same number for the second instructor. Students know that the principal will only listen to one complaint, 
therefore they want to minimize the maximum of numbers xi. Help them find this value if they use the optimal strategy

Write function solution(n, d, b, a) that contains number of rooms in the house n (2 ≤ n ≤ 100 000), running distance of a student d (1 ≤ d ≤ n - 1), 
official number of students in a room b (1 ≤ b ≤ 10 000) and list a that contains n integers a1, a2, ..., an (0 ≤ ai ≤ 10^9), 
i-th of which stands for the number of students in the i-th room before curfew announcement. It is guaranteed that a1 + a2 + ... + an = nb.
And return one integer, that is the minimal possible value of the maximum of xi

## Algorithm
1. We sort the array and find the amount to close the rooms
2. We create a loop in which each iteration is checking two rooms, one for each instructor.
3. In checking the first instructor, the minimum number of students that can be in a given room is calculated, taking into account movements
4. In the check of the second instructor, the maximum number of students that can be in a given room is calculated, taking into account movements.
5. The minimum possible value of the maximum instructor verification is calculated.

## Big O
In this algorithm, we have 2 arrays: 
* one has a maximum of **N** iterations
* second has a maximum of **N/2** iterations.

Following from this, ***O(1,5 * N)***

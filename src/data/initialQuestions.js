export const seedQuestions = [
  {id:'dsa-1',title:'Two Sum',category:'DSA',difficulty:'Easy',status:'Completed',notes:'Hash Map approach — O(n) time, O(n) space. LC 1',date:'2026-10-05',url:'https://leetcode.com/problems/two-sum/'},
  {id:'dsa-2',title:'Remove Duplicates from Sorted Array',category:'DSA',difficulty:'Easy',status:'Completed',notes:'Two-pointer technique. LC 26',date:'2026-10-06',url:'https://leetcode.com/problems/remove-duplicates-from-sorted-array/'},
  {id:'dsa-3',title:'Move Zeroes',category:'DSA',difficulty:'Easy',status:'In Progress',notes:'Two pointers. LC 283',date:'2026-10-06',url:'https://leetcode.com/problems/move-zeroes/'},
  {id:'dsa-4',title:'Rotate Array',category:'DSA',difficulty:'Medium',status:'Pending',notes:'Reverse trick. LC 189',date:'2026-10-07',url:'https://leetcode.com/problems/rotate-array/'},
  {id:'dsa-5',title:'3Sum',category:'DSA',difficulty:'Medium',status:'Pending',notes:'Sorting + two pointers. LC 15',date:'2026-10-07',url:'https://leetcode.com/problems/3sum/'},
  {id:'git-1',title:'Wrong Branch, Correct Work',category:'Git & GitHub',difficulty:'Medium',status:'Completed',notes:'Move commits safely; cherry-pick vs branch creation.',date:'2026-10-07'},
  {id:'git-2',title:'Merge Conflict During PR',category:'Git & GitHub',difficulty:'Medium',status:'In Progress',notes:'Resolve conflicts; merge vs rebase trade-offs.',date:'2026-10-08'},
  {id:'git-3',title:'Secret Accidentally Committed',category:'Git & GitHub',difficulty:'Hard',status:'Pending',notes:'Rotate exposed secret, clean history, prevent recurrence.',date:'2026-10-08'},
  {id:'git-4',title:'PR Review With New Changes',category:'Git & GitHub',difficulty:'Medium',status:'Pending',notes:'Respond to review feedback; safe push practices.',date:'2026-10-09'},
  {id:'git-5',title:'Recovering Lost Local Work',category:'Git & GitHub',difficulty:'Hard',status:'Pending',notes:'Use git reflog to locate and recover commits.',date:'2026-10-09'},
  {id:'tech-1',title:'JavaScript — Async Flow & Event Loop',category:'Full-Stack Technical',difficulty:'Medium',status:'Completed',notes:'Microtasks vs macrotasks, Promise callbacks, blocking JS.',date:'2026-10-09'},
  {id:'tech-2',title:'React — Unnecessary Re-render',category:'Full-Stack Technical',difficulty:'Medium',status:'In Progress',notes:'React.memo, useMemo, useCallback and when not to use them.',date:'2026-10-09'},
  {id:'tech-3',title:'Express — Protected Request Flow',category:'Full-Stack Technical',difficulty:'Medium',status:'Pending',notes:'401 vs 403, authentication middleware and debugging.',date:'2026-10-10'},
  {id:'tech-4',title:'MongoDB — Duplicate Email',category:'Full-Stack Technical',difficulty:'Medium',status:'Pending',notes:'Unique index, race conditions and duplicate-key errors.',date:'2026-10-10'},
  {id:'tech-5',title:'Authorization + ImageKit',category:'Full-Stack Technical',difficulty:'Hard',status:'Pending',notes:'Ownership checks, trusted server data and upload flow.',date:'2026-10-10'}
];
export const categories = ['All','DSA','Git & GitHub','Full-Stack Technical','Machine Coding'];
export const statuses = ['Pending','In Progress','Completed'];
export const difficulties = ['Easy','Medium','Hard'];
export const STORAGE_KEY = 'devorbit-v1-questions';
export const MACHINE_KEY = 'devorbit-v1-machine-status';
export const initialForm = {title:'',category:'DSA',difficulty:'Easy',status:'Pending',notes:'',url:''};

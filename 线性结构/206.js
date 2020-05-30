// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 翻转单链表
 * 1->2->3->4->5->NULL   =>  5->4->3->2->1->NULL
 */
// var reverseList = function(head) {  //未通过？？？  heap memory out
//   let dummy = new ListNode()
//   dummy.next = head
//   let cur = head, pre = dummy
//   let next
//   while(cur) {
//     next = cur.next
//     cur.next = pre
//     pre = cur
//     cur = next
//   }
//   return pre
// };

var reverseList = function(head) {
  if (!head || !head.next) return head
  let pre = null, cur = head
  let next
  while (cur) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
};


let a1 = new ListNode(1)
let a2 = new ListNode(2)
let a3 = new ListNode(3)
let a4 = new ListNode(4)
let a5 = new ListNode(5)
a1.next = a2
a2.next = a3
a3.next = a4
a4.next = a5
console.log(a1)
console.log(reverseList(a1))
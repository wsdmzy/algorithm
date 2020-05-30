/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 环形链表   给定一个链表，判断链表中是否有环。
 * pos 表示链表尾连接到链表中的位置  
 */
var hasCycle = function(head) {
  let map = new Map()
  while(head) {
    if (map.has(head)) return true
    map.set(head, true)
    head = head.next
  }
  return false
};


var hasCycle = function(head) {
  let l = head, r = head
  while (r) {
    if (!r.next) return false
    l = l.next
    r = r.next.next
    if (l === r) return true
  }
  return false
}

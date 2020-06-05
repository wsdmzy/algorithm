/**
 * 23. 合并K个排序链表
 * 
 * 多个链表 有序   合并
 * 
 * 
 */

function mergeTwoLists(l1, l2) {
  // 两个链表的合并
  let dummy = {}
  let current = dummy
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1
      current = current.next
      l1 = l1.next
    } else {
      current.next = l2
      current = current.next
      l2 = l2.next
    }
  }

  if (l1 === null) current.next = l2
  else current.next = l1

  return dummy.next
}


// 分治？  分而治之  k => 2个合并
var mergeKLists = function(lists) {
  //当问题足够小的情况
  let len = lists.length
  if (len === 0) return null
  if (len === 1) return lists[0]
  if (len === 2) return mergeTwoLists(lists[0], lists[1])
  // 说明问题规模大于2  将其分解
  let mid = len >> 1
  const l1 = [], l2 = []
  for (let i = 0; i < mid; i++) {
    l1[i] = lists[i]
  }
  for (let i = mid, j = 0; i < len; i++,j++) {
    l2[j] = lists[i]
  }
  // 递归调用， 直到问题规模为2的时候，和并
  return mergeTwoLists(mergeKLists(l1),mergeKLists(l2))
};
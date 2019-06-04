/*
 * @Author: 陈智焰 
 * @Date: 2019-06-04 22:16:58 
 * @Last Modified by: 陈智焰
 * @Last Modified time: 2019-06-04 22:32:00
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var ListNode = function (val) {
    this.val = val;
    this.right = null;
    this.left = null;
};

var MorrisInPreOder = function (root) {
    let curr = root;
    while(curr!=null){
        if(curr.left == null){
            console.log(curr.val);
            curr=curr.right;
        }else{
            let tmp = curr.left;
            while(tmp.right!=null&tmp.right!=curr){
                tmp = tmp.right;
            }
            if(tmp.right ==null){
                console.log(curr.val);
                tmp.right = curr;
                curr = curr.left;
            }else{
                tmp.right = null;
                curr=curr.right;
            }
        }
    }
}

var getTestTree = function () {
    let head = new ListNode(5)
    head.left= new ListNode(1)
    head.right= new ListNode(4)
    head.right.left= new ListNode(3)
    head.right.right = new ListNode(6)
    return head;
  }
  
  var test = function(){
      let testList =getTestTree();
      MorrisInPreOder(testList)
  }
  test()
  
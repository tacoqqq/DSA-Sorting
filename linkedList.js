const _Node = require('./node.js')

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(item){
        this.head = new _node(item, this.head);
    }

    insertLast(item){
        let currentNode = this.head
        if (currentNode.value == null){
            this.insertFirst(item);
        } else {
            while(currentNode.next !== null){
                currentNode = currentNode.next;
            } 
        }
        currentNode.next = new _node(item, null);
    }

    find(item){
        //if empty list
        if (!this.head){
            return null
        }

        //start looking from first node
        let currentNode = this.head
        while (currentNode.value !== item){
            //reach the last item, still cannot find a node with matching value
            if (currentNode.next === null){
                return null
            } else {
                currentNode = currentNode.next
            }
        }

        //found it
        return currentNode
    }

    remove(item){
        //if empty list
        if (!this.head){
            return null;
        }

        //if first item
        if (this.head.value === item){
            this.head = this.head.next;
            return;
        }

        //starting looking from 1st item
        let currentNode = this.head;
        let previousNode = this.head;
        while((currentNode !== null) && (currentNode.value !== item)){
            if (currentNode.next === null){
                return `Item does not exist!`;
            } else {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
        //remove item
        previousNode.next = currentNode.next
    }

  //Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
  insertBefore(item, key){
    //if empty list
    if (!this.head){
      return null;
    }

    //if key is the first item
    if (key === this.head.value){
      this.insertFirst(item)
      return;
    }

    let currentNode = this.head
    let previousNode = this.head
    while((currentNode !== null) && (currentNode.value !== key)){
      //if no such key
      if (currentNode.next === null){
        console.log('cannot find key')
        return;
      } else {
        previousNode = currentNode
        currentNode = currentNode.next
      }
    }
    //found the key
    previousNode.next = new _node(item, previousNode.next)
  }

  //Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.
  insertAfter(item,key){
    //if empty list
    if (!this.head){
      return null
    }

    //starting from first one in the list
    let currentNode = this.head

    while ((currentNode !== null) && (currentNode.value !== key)){
      //couldn't find the key
      if (currentNode.next === null){
        console.log('cannot find key')
        return
      } else {
        currentNode = currentNode.next
      }
    }
    //found key
    currentNode.next = new _node(item , currentNode.next)
  }

  //Implement a function called insertAt() that inserts an item at a specific position in the linked list.
  insertAt(item, position){
    console.log('in insert at')
    //if empty list
    if (!this.head && position !== 1){
      return null;
    }

    //if list.length is less than the position
    let currentNode = this.head
    let length = 1;
    while (currentNode.next !== null){
      currentNode = currentNode.next
      length++
    }

    if (position > length || position < 0){
      console.log('not a valid position')
      return
    }

    let currentValueCopy = this.head
    let currentPosition = 1;

    while (currentPosition < position){
      currentValueCopy = currentValueCopy.next
      currentPosition++
    }
    //reach the position
    this.insertBefore(item,currentValueCopy.value)
  }
}


//display: displays the linked list
function display(linkedList){
  //base case
  if (linkedList.head.next == null){
    return linkedList.head.value
  }

  //general case
  let currentNode = linkedList.head
  while(currentNode !== null){
    console.log(currentNode)
    currentNode = currentNode.next
  }
}

//size: returns the size of the linked list
function size(linkedList){
  //if empty list
  let length = 1
  if (!linkedList.head){
    return 0
  } else {
    let currentNode = linkedList.head
    while (currentNode.next !== null){
      currentNode = currentNode.next
      length++
    }
  }
  return length
}

//isEmpty: finds if the list is empty or not (without using the size() function)
function isEmpty(linkedList){
  if (linkedList.head !== null){
    return false
  } else {
    return true
  }
}

//findPrevious: finds the node before the item you are looking for
function findPrevious(linkedList, item){
  //if empty list
  if (linkedList === null){
    return null
  }

  //if item looking for is the first item
  if (item === linkedList.head.value){
    console.log('this is the first item in the list')
    return
  }

  //starting from first item
  let currentNode = linkedList.head
  let previousNode = linkedList.head
  while (currentNode !== null && currentNode.value !== item){
    if (currentNode.next === null){
      console.log('The item you are looking for does not exist!')
      return
    } else {
      previousNode = currentNode
      currentNode = currentNode.next
    }
  }

  //found item
  return previousNode
}


//findLast: returns the last node in the linked list
function findLast(linkedList){
  //if empty list
  if (!linkedList.head){
    return null
  }

  let currentNode = linkedList.head
  while (currentNode.next !== null){
    currentNode = currentNode.next
  }

  return currentNode
}

module.exports = LinkedList
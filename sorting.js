let rawDataset = [
    '89', '30', '25', '32', '72', '70', '51', '42', '25', '24',
    '53', '55', '78', '50', '13', '40', '48', '32', '26', '2',
    '14', '33', '45', '72', '56', '44', '21', '88', '27', '68',
    '15', '62', '93', '98', '73', '28', '16', '46', '87', '28',
    '65', '38', '67', '16', '85', '63', '23', '69', '64', '91',
    '9',  '70', '81', '27', '97', '82', '6',  '88', '3',  '7',
    '46', '13', '11', '64', '76', '31', '26', '38', '28', '13',
    '17', '69', '90', '1',  '6',  '7',  '64', '43', '9',  '73',
    '80', '98', '46', '27', '22', '87', '49', '83', '6',  '39',
    '42', '51', '54', '84', '34', '53', '78', '40', '14', '5'
  ]
  
/*
3. Implementing quicksort
Write a function qSort that sorts a dataset using the quicksort algorithm. 
*/
  
  function qSort(arr,start = 0,end=arr.length){
    console.log(arr)
    if (start >= end){
      return arr
    }
  
    let middlePoint = partition(arr,start,end)
    arr = qSort(arr,start,middlePoint)
    arr = qSort(arr,middlePoint + 1, end)
    return arr
  }
  
  // use the last item as pivot: 
  function partition(arr,start,end){
    let j = start
    let pivot = arr[end-1]
    for(let i = start ; i < end - 1 ; i++){
      if (arr[i] <= pivot){
        swap(arr,i,j)
        j++
      }
    }
    swap(arr,end-1,j)
    return j
  }
  
  function swap(arr,i,j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  
/*
4. Implementing merge sort
Write a function mSort that sorts the dataset above using the merge sort algorithm.
*/
  
  function mSort(arr){
    console.log('from mSort: ' + arr)
    if (arr.length < 2){
      return arr
    }
    // [1,2,3,4,5,6,7]
  
    let middlePoint = Math.floor(arr.length / 2)
    let left = arr.slice(0 , middlePoint)
    let right = arr.slice(middlePoint , arr.length)
  
    left = mSort(left)
    right = mSort(right)
    
    return merge(left,right,arr)
  }
  
  function merge(left,right,arr){
    let i = 0 
    let j = 0
    let k = 0
    while (i < left.length && j < right.length){
      if (left[i] <= right[j]){
        arr[k] = left[i]
        i++
        k++
      } else {
        arr[k] = right[j]
        j++
        k++
      }
    }
  
    while (i < left.length){
      arr[k] = left[i]
      i++
      k++
    }
  
    while (j < right.length){
      arr[k] = right[j]
      j++
      k++
    }
    console.log('from merge: ' + arr)
    return arr
  }
  
/*
5. Sorting a linked list using merge sort
Given a Linked List, sort the linked list using merge sort. You will need your linked list class from previous lesson to create the list and use all of its supplemental functions to solve this problem.
*/


function mergeSortLinkedList(linkedList){
    let array = []
    let currentNode = linkedList.head
    while(currentNode !== null){
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
  
    let sortedArray = mSort(array)
    let currentNodeCopy = linkedList.head
    let i = 0 
    while(currentNodeCopy !== null){
      currentNodeCopy.value = sortedArray[i]
      i++
      currentNodeCopy = currentNodeCopy.next
    }
    return linkedList
  }
  
  
  mergeSortLinkedList(numberList)


/*
6. Bucket sort
Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are. You can't use arr.splice(), shift() or unshift() for this exercise.
*/
  
  
/*
7. Sort in place
Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).
*/
  
  function shuffleArray(array){
    for(let i = array.length - 1 ; i > 0 ; i--){
      let j = Math.floor(Math.random() * (i + 1))
      console.log('i is: ' + i)
      console.log('j is: ' + j)
  
      let temp = array[j]
      array[j] = array[i]
      array[i] = temp
    }
    return array
  }
  
/*
8. Sorting books
Imagine that I gave you 20 books to sort in alphabetical order. Express this as an algorithm and then implement your algorithm.
*/
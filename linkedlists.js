/* 

Walk through the linked list code in the curriculum and understand it well. Then write a linked list class and its core functions (insertFirst, insertLast, remove, find) from scratch.

*/

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
 }

 // Problem 1 :  through the linked list code in the curriculum and understand it well. Then write a linked list class and its core functions (insertFirst, insertLast, remove, find) from scratch.



class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(key, itemToInsert) {
        if (this.head === null) {
          return;
        }
        if (this.head.value === key) {
          this.insertFirst(itemToInsert);
          return;
        }
    
        let prevNode = null;
        let currNode = this.head;
        while (currNode !== null && currNode.value !== key) {
          prevNode = currNode;
          currNode = currNode.next;
        }
        if (currNode === null) {
          console.log('Node not found to insert');
          return;
        }
        prevNode.next = new _Node(itemToInsert, currNode);
      }

    insertAfter(key, itemToInsert) {
        let tempNode = this.head;
        if (tempNode === null) {
          return;
        }
    
        while (tempNode !== null && tempNode.value !== key) {
          tempNode = tempNode.next;
        }
    
        if (tempNode !== null) {
          tempNode.next = new _Node(itemToInsert, tempNode.next);
        }
      }
    insertAt(position, itemToInsert){

        if(position < 0){
            throw new Error('Position error, position is less than 0.');
        }
    
        if(position === 0){
            this.insertFirst(itemToInsert);
        }
        else{
            
        }
      }
    

    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

}

/*
Write a function main. Within the function, using the linked list class above, create a linked list with the name SSL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck.
Add Tauhida to the list.
Remove squirrel from the list.
Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
Implement a function called insertAfter() in the class that inserts a new node after a node containing the key.
Implement a function called insertAt() that inserts an item at a specific position in the linked list.
Add Athena before Boomer using your insertBefore() function.
Add Hotdog after Helo using the insertAfter() method.
Using the insertAt() method insert Kat in the 3rd position of the list.
Remove Tauhida from the list.
*/

function displayList(list) {
    let currNode = list.head;
    while (currNode !== null) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
  }

function main() {
    let SSL = new LinkedList();

    SSL.insertFirst('Apollo');
    SSL.insertLast('Boomer');
    SSL.insertLast('Helo');
    SSL.insertLast('Husker');
    SSL.insertLast('Starbuck');

    SSL.insertLast('Tauhida');

    SSL.remove('Squirrel');

    SSL.insertBefore('Boomer', 'Athena');
  
    SSL.insertAfter('Helo', 'Hotdog');
  
    displayList(SSL);

}

main();

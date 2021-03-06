

/*

You are given an string representing the initial conditions of some dominoes.
Each element can take one of three values:


L, meaning the domino has just been pushed to the left,
R, meaning the domino has just been pushed to the right, or
., meaning the domino is standing still.

Determine the orientation of each tile when the dominoes stop falling.
Note that if a domino receives a force from the left and right side simultaneously, it will remain upright.

For example, given the string .L.R....L, you should return LL.RRRLLL.
Given the string ..R...L.L, you should return ..RR.LLLL.


@dlefcoe

question: what happens if the domino is this RL
do they fall on each other ?


*/

let s = '.L.R....L'

//code to run
dominoDrop(s)





/**
 * function to determine the domino drop result
 * @param {string} s is the input string
 */
function dominoDrop(s) {
    console.log('the main function ran')
    
    let sArray = s.split('') // split into array
    let rArray = []
    
    // log the result    
    console.log('the start array: ' + sArray)

    /*
    the number of runs required depends on the length of the '.'
    lets call this the loopLength
    */

    //console.log('the length is ' + sArray.length)

    // initialise loopLength
    let loopLength = 0
    let loopLenMax = 0
    for (let i = 0; i < sArray.length; i++) {
        if (sArray[i]=='.') {
            loopLength += 1
            if (loopLength > loopLenMax) {
                loopLenMax = loopLength    
            }
        } else {
            loopLength = 0
        }
    }

    console.log('consecutive dots: ' + loopLenMax)


    // the number of iterations required for all domino's to be tested
    itReq = loopLenMax / 2
    
    for (let j = 0; j < itReq; j++) {
        console.log('pass: ' + j)

        // inspect left most item
        if (sArray[0] == '.') {
            // need to inspect the next item
            if (sArray[1]=='L') {
                // drops to the left
                rArray[0] = 'L'
            }
        } else {
            // unchanged
            rArray[0] = sArray[0]
        }
    
        
        // inspect the middle items in the list
        for (let i = 1; i <= sArray.length-2; i++) {
            
            
            if (sArray[i]=='.') {
                // has no direction
    
                // nothing happens in these cases
                // left + right
                // right + left
                // . + .
                // . + right
                // left + .
                rArray[i] = sArray[i]
    
                // cases when there is pushing and rArray changes
    
                // left + left
                if ((sArray[i-1]=='L') && (sArray[i+1]=='L')) {
                    rArray[i] = 'L'
                }
    
                // right + right
                if ((sArray[i-1]=='R') && (sArray[i+1]=='R')) {
                    rArray[i] = 'R'
                }
    
                // . + left
                if ((sArray[i-1]=='.') && (sArray[i+1]=='L')) {
                    rArray[i] = 'L'
                }
    
    
                // right + .
                if ((sArray[i-1]=='R') && (sArray[i+1]=='.')) {
                    rArray[i] = 'R'
                }
    
    
    
    
    
            } else {
                // the direction is known
                rArray[i] = sArray[i]
            }
    
        }
    
    
        // inspect right most item
        if (sArray[sArray.length-1] == '.') {
            // need to inspect the next item
            if (sArray[sArray.length-2]=='R') {
                // drops to the right
                rArray[sArray.length-1] = 'R'
            }
        } else {
            // unchanged
            rArray[sArray.length-1] = sArray[sArray.length-1]
        }
    
        console.log('the final result: ' + rArray)

        // set old array = new array for next pass
        sArray = rArray.slice()
    }

}








/**
 * random code to test
 * @param {array} v1 the first vector.
 * @param {array} v2 the second vector.
 */
function testCode() {
    // run through each to check
    sArray.forEach(element => {
        console.log(element)
    })
    
}



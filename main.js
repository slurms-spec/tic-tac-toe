let squares = document.querySelectorAll('.selectedSquare')

Array.from(squares).forEach(e => e.addEventListener('click', markBoard))


    let clickNo = 0
    let player1Selections = [] // change to array of box no.s, just checking for tally now
    let player2Selections = []



function markBoard(click) {

    clickNo += 1

    // player 1

    if(clickNo % 2 != 0){
        click.target.innerText = "X"

        if(click.target.classList.contains('one')){
            player1Selections.unshift(1)
    } else if(
        click.target.classList.contains('two')){
            player1Selections.unshift(2)
        } else if(
            click.target.classList.contains('three')){
                player1Selections.unshift(3)
            } else if(
                click.target.classList.contains('four')) {
                    player1Selections.unshift(4)
                } else if(
                    click.target.classList.contains('five')){
                        player1Selections.unshift(5)
                    } else if(
                        click.target.classList.contains('six')){
                            player1Selections.unshift(6)
                        } else if(
                            click.target.classList.contains('seven')){
                                player1Selections.unshift(7)
                            } else if(
                                click.target.classList.contains('eight')){
                                    player1Selections.unshift(8)
                                }else if (
                                    click.target.classList.contains('nine')){
                                        player1Selections.unshift(9)
                                    }
                        
                    
            
   
          
       // player 2 
        
    } else if(clickNo % 2 === 0){  // check who the player is
        click.target.innerText = "0" // mark the box 
            
        // add the selection to the array

        if(click.target.classList.contains('one')){
            player2Selections.unshift(1)
    } else if(
        click.target.classList.contains('two')){
            player2Selections.unshift(2)
        } else if(
            click.target.classList.contains('three')){
                player2Selections.unshift(3)
            } else if(
                click.target.classList.contains('four')) {
                    player2Selections.unshift(4)
                } else if(
                    click.target.classList.contains('five')){
                        player2Selections.unshift(5)
                    } else if(
                        click.target.classList.contains('six')){
                            player2Selections.unshift(6)
                        } else if(
                            click.target.classList.contains('seven')){
                                player2Selections.unshift(7)
                            } else if(
                                click.target.classList.contains('eight')){
                                    player2Selections.unshift(8)
                                }else if (
                                    click.target.classList.contains('nine')){
                                        player2Selections.unshift(9)
       
        }


      
   

}


}

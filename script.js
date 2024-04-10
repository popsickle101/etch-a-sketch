    function generateGrid(){
        var gridSize = prompt("Enter the number of squares per side for the new grid (e.g., 16 will create a 16x16 grid):");
        
        
        gridSize = parseInt(gridSize);
        if (isNaN(gridSize) || gridSize <= 0) {
            alert("Please enter a valid number greater than 0.");
            return;
        }

    const gridDiv = document.querySelector('.container');
    gridDiv.style.setProperty('--gridSize', gridSize);
    while (gridDiv.firstChild) {
        gridDiv.removeChild(gridDiv.firstChild);
    }
    

   
    for (let i = 0; i < gridSize* gridSize; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('jsItem');
        gridDiv.appendChild(newDiv);
    }

    
    function addHoverEffect(event) {
        
        if (event.target.classList.contains('jsItem')) {
            event.target.classList.add('hovered');
            console.log("effect added")
        }
    }

    
    function removeHoverEffect(event) {
        if (event.target.classList.contains('jsItem')) {
            event.target.classList.remove('hovered');
            console.log("effect removed")
        }
    }

    
    gridDiv.addEventListener('mouseover',addHoverEffect );}

    
    //gridDiv.addEventListener('mouseout', removeHoverEffect);

    



    //document.addEventListener('click',generateGrid);
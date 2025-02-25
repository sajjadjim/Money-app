
document.getElementById('add-money11').style.display = 'none'

// cashout button 
document.getElementById('cashout').addEventListener('click',
    function(event){
        document.getElementById('add-money11').style.display = 'none'
        document.getElementById('cashout1').style.display = 'block'
    }
)

// add monmey button 
document.getElementById('add-money').addEventListener('click',
    function(event){
        document.getElementById('add-money11').style.display = 'block'
        document.getElementById('cashout1').style.display = 'none'
    }
)



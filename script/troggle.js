
document.getElementById('add-money11').style.display = 'none'
document.getElementById('cashout1').style.display = 'none'
document.getElementById('transfer-money1').style.display = 'none'
document.getElementById('get-bonus1').style.display = 'none' 
document.getElementById('transaction-history1').style.display = 'none'
document.getElementById('pay-bill1').style.display = 'none'

// add money button 
document.getElementById('add-money').addEventListener('click',
    function(event){
        document.getElementById('add-money11').style.display = 'block'
        document.getElementById('cashout1').style.display = 'none'
        document.getElementById('transfer-money1').style.display = 'none'
        document.getElementById('get-bonus1').style.display = 'none' 
        document.getElementById('transaction-history1').style.display = 'none'
        document.getElementById('pay-bill1').style.display = 'none' 
         document.getElementById('last-payment-status').style.display = 'none'
    }
)
// cashout button 
document.getElementById('cashout').addEventListener('click',
    function(event){
        document.getElementById('add-money11').style.display = 'none'
        document.getElementById('cashout1').style.display = 'block'
        document.getElementById('transfer-money1').style.display = 'none'
        document.getElementById('get-bonus1').style.display = 'none' 
        document.getElementById('transaction-history1').style.display = 'none'
        document.getElementById('pay-bill1').style.display = 'none' 
         document.getElementById('last-payment-status').style.display = 'none'
    }
)

// transfer money part here 
document.getElementById('transfer-money').addEventListener('click',
    function(){
        document.getElementById('add-money11').style.display = 'none'
        document.getElementById('cashout1').style.display = 'none'
        document.getElementById('transfer-money1').style.display = 'block'
        document.getElementById('get-bonus1').style.display = 'none' 
        document.getElementById('transaction-history1').style.display = 'none'
        document.getElementById('pay-bill1').style.display = 'none'
         document.getElementById('last-payment-status').style.display = 'none'
    }
)


// Get bonus Button 
document.getElementById('get-bonus').addEventListener('click',
    function(){
        document.getElementById('add-money11').style.display = 'none'
        document.getElementById('cashout1').style.display = 'none'
        document.getElementById('transfer-money1').style.display = 'none'
        document.getElementById('get-bonus1').style.display = 'block' 
        document.getElementById('transaction-history1').style.display = 'none'
        document.getElementById('pay-bill1').style.display = 'none'
        document.getElementById('last-payment-status').style.display = 'none' 
    }
)

// pay Bill 
document.getElementById('pay-bill').addEventListener('click',
    function(){
        document.getElementById('add-money11').style.display = 'none'
        document.getElementById('cashout1').style.display = 'none'
        document.getElementById('transfer-money1').style.display = 'none'
        document.getElementById('get-bonus1').style.display = 'none' 
        document.getElementById('transaction-history1').style.display = 'none'
        document.getElementById('pay-bill1').style.display = 'block'
        document.getElementById('last-payment-status').style.display = 'none'

    }
)

// transection History 
document.getElementById('transaction').addEventListener('click',
    function(){
        document.getElementById('add-money11').style.display = 'none'
        document.getElementById('cashout1').style.display = 'none'
        document.getElementById('transfer-money1').style.display = 'none'
        document.getElementById('get-bonus1').style.display = 'none' 
        document.getElementById('transaction-history1').style.display = 'block'
        document.getElementById('pay-bill1').style.display = 'none'
        document.getElementById('last-payment-status').style.display = 'none'

    }
)

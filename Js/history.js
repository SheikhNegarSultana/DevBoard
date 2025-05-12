function history(){
     const completeBtn = document.querySelectorAll('.completeBtn');
     const history = document.getElementById('history');
     const date = new Date();
     const today = date.toLocaleTimeString();
    

        completeBtn.forEach(btn =>{
        btn.addEventListener('click', (event) =>{
            event.preventDefault();

            const taskDiv = btn.parentElement.parentElement;

            const task = taskDiv.querySelector('.taskName').innerText;
          
            const div = document.createElement('div');
            div.innerHTML = ` <p class = "bg-[#F4F7FF] p-[1rem] mb-[1rem]"> You Have Completed The Task ${task} at ${today}</p> `
            history.appendChild(div);

            btn.disabled = true;

            const clearHistoryBtn = document.getElementById('clearHistoryBtn');
            clearHistoryBtn.addEventListener('click' , () =>{
                history.innerHTML = ' ';
            })
        })

        
    })
}
history();
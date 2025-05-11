function alertHandle(){
    const completeBtn = document.querySelectorAll('.completeBtn');

    completeBtn.forEach(btn =>{
        btn.addEventListener('click', (event) =>{
            event.preventDefault();
            btn.classList = " "
            btn.classList.add('afterCompleteBtn');
            alert('Board Update Completed');
            const taskCompleteLength = document.querySelectorAll('.afterCompleteBtn').length;

            if (taskCompleteLength === 6){
                alert("Congrats! You Completed All Tasks");
            }
        })
    })
}
alertHandle();

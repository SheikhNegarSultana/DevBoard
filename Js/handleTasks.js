function handleTasks(){
    const completeBtn = document.querySelectorAll('.completeBtn');
        completeBtn.forEach(btn =>{
        btn.addEventListener('click', (event) =>{
            event.preventDefault();
            
            const checkList = btn.classList.value;
            
            if( checkList === 'afterCompleteBtn'){

                const taskCompleteLength = document.querySelectorAll('.afterCompleteBtn').length;

                let remainTaskLength = completeBtn.length - taskCompleteLength ;
                setInnerText('taskRemainingCount' , remainTaskLength);

                let completedTaskCount = innerTextToValue('completedTaskCount');
                completedTaskCount++;

                setInnerText('completedTaskCount' ,completedTaskCount );
    
            }


        })
    })
}
handleTasks();
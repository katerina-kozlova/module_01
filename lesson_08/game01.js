'use strict';

{
    const game = () => { 
        let input; 
        let hiddenNumber = Math.round(Math.random() * 100); 
    
        while (true) { 
            input = prompt('Введите число от 1 до 100');
    
            if (input === null) {
                alert('Игра завершена');
                break;
            }
    
            if (isNaN(input)) {  
                alert('Введи число!!'); 
            } else {
                input = parseInt(input);
    
                if (input > hiddenNumber) { 
                    alert('Меньше!'); 
                } else if (input < hiddenNumber) { 
                    alert('Больше!'); 
                } else if (input === hiddenNumber) { 
                    alert('Правильно!'); 
                    break;
                } 
            }
        } 
    } 
    
    game();
}
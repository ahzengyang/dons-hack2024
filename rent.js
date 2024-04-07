    // Get the current time
    const currentTime = new Date();
    const currentHour = currentTime.getHours().toString().padStart(2, '0');
    const currentMinute = currentTime.getMinutes().toString().padStart(2, '0');
  
    // Set the minimum time of the input to the current time
    const start = document.getElementById('start');
    start.min = `${currentHour}:${currentMinute}`;
    
    const end = document.getElementById('end');
    start.addEventListener('input', function() {
        const startValue = start.value.split(':');
        const startHour = parseInt(startValue[0]);
        const startMinute = parseInt(startValue[1]);

        // Calculate the end time
        const endHour = startHour + 1;
        const endMinute = startMinute;
        end.min = `${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`;
    });

    // Get the current time
     currentTime = new Date();
     currentHour = currentTime.getHours().toString().padStart(2, '0');
     currentMinute = currentTime.getMinutes().toString().padStart(2, '0');
  
    // Set the minimum time of the input to the current time
    const start = document.getElementById('start');
    start.min = `${currentHour}:${currentMinute}`;
    
    end = document.getElementById('end');
    start.addEventListener('input', function() {
        const startValue = start.value.split(':');
        const startHour = parseInt(startValue[0]);
        const startMinute = parseInt(startValue[1]);

        // Calculate the end time
        const endHour = startHour + 1;
        const endMinute = startMinute;
        end.min = `${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`;
    });
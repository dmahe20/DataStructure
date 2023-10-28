//Get in office at 10 AM and log off at 7PM.
// calendar 1 = 9:00-10:30am , 12-13, 16-18
//bound 1    =   9 - 20:00
//calendar 2 =  10-11:30, 12:30-14:30, 14:30- 15, 16-17
//bound 2 =      10:00- 18:30
//meeting duration = 30 mins

//op = 11:30 - 12:00 , 15:00-16:00, 18:00-18:30

//solution is to merge both calendars in merge sort fashion/algo in sort way, from beginning of day to end of day for unavailabilities of both co-workers
// for 1st calendar add time bounds in beg and end => 0:00 - 9:00 Am  & 20:00- 23:59 and for 2nd calendar 0:00- 10:00 & 18:30 - 23:59
//and put pointers on both this start time bounds
//merge both calendars and based on start time 
// 00 - 10 , 00-9:00,9-10:30, 10-11:30 , 12-13, 12:30-14:30, 14:30 - 15, 16-17, 16-18, 18:30-23:59, 20:00- 23:59
// merge or flatten array so first will be [00-11:30] non-available, 12:00 - 15:00 , 16:00- 18:00, 18:30- 23:59
//Availabl time 11:30-12:00 , 15:00-16:00, 18:00-18:30
// Time = O(c1+c2) and Space O(c1+c2)

function calendarMatching(calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration) {
    const updatedCalendar1 = updateCalendar(calendar1, dailyBounds1);
    const updatedCalendar2 = updateCalendar(calendar2, dailyBounds2);
    const mergedCalendar = mergeCalendars(updatedCalendar1, updatedCalendar2);
    const flattenedCalendar = flattenCalendar(mergedCalendar);
    return getMatchingAvailabilites(flattenedCalendar, meetingDuration);
  }
  
  function updateCalendar(calendar, dailyBounds){
    const updatedCalendar = [['0:00', dailyBounds[0]], ...calendar, [dailyBounds[1],'23:59']];
    return updatedCalendar.map(meeting => meeting.map(timeToMinutes));
  }
  
  function mergeCalendars(calendar1, calendar2){
    const merged =[];
    let i=0;
    let j=0;
    while(i < calendar1.length && j< calendar2.length){
      const meeting1 = calendar1[i];
      const meeting2 = calendar2[j];
      if(meeting1[0] < meeting2[0]){
        merged.push(meeting1);
        i++;
      }else{
        merged.push(meeting2);
        j++;
      }
    }
    while (i < calendar1.length) merged.push(calendar1[i++]);
    while (j < calendar2.length) merged.push(calendar2[j++]);
    return merged;
  }
  
  function flattenCalendar(calendar) {
    const flattened = [calendar[0].slice()];
    for(let i =1; i<calendar.length; i++){
      const currentMeeting = calendar[i];
      const previousMeeting = flattened[flattened.length -1];
      const [currentStart, currentEnd] = currentMeeting;
      const [previousStart, previousEnd] = previousMeeting;
      if(previousEnd >= currentStart){
        const newPreviousMeeting = [previousStart, Math.max(previousEnd, currentEnd)];
        flattened[flattened.length -1] = newPreviousMeeting;
      }else{
        flattened.push(currentMeeting.slice());
      }
    }
    return flattened;
  }
  
  function getMatchingAvailabilites(calendar, meetingDuration){
    const matchingAvailabilites = [];
    for(let i=1; i< calendar.length ; i++){
      const start = calendar[i - 1][1];
      const end = calendar[i][0];
      const availabiltiyDuration = end - start;
      if(availabiltiyDuration >= meetingDuration){
        matchingAvailabilites.push([start,end]);
      }
    }
    return matchingAvailabilites.map(meeting =>meeting.map(minutesToTime));
  }
  
  function timeToMinutes(time){
    const [hours,minutes] = time.split(':').map(str => parseInt(str));
    return hours * 60 + minutes;
  }
  
  function minutesToTime(minutes){
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const hoursString = hours.toString();
    const minutesString = mins < 10 ? '0' + mins.toString() : mins.toString();
    return hoursString + ':' + minutesString;
  }
  // Do not edit the line below.
  exports.calendarMatching = calendarMatching;
  
import '../style/calender.css'
import { useState } from 'react';

// moment 라이브러리 사용
import moment from 'moment';

const Calender = () => {
  const [getMoment, setMoment] = useState(moment());

  const today = getMoment;

  const calendarArr = () => {
    
  }

  return (
    <div className="Calender">
      <div className="control">
        <button onClick={() => { setMoment(getMoment.clone().subtract(1, 'month')) }} >이전달</button>
        <span>{today.format('YYYY 년 MM 월')}</span>
        <button onClick={() => { setMoment(getMoment.clone().add(1, 'month')) }} >다음달</button>
      </div>
      <table>
        <tbody>
          {calendarArr()}
        </tbody>
      </table>
    </div>
  );
}

export default Calender;
import '../style/calender.css'
import { useState } from 'react';

// moment 라이브러리 사용
import moment from 'moment';

const Calender = () => {
  const [getMoment, setMoment] = useState(moment());

  // 월 영어로 바꾸기 위해서
  const month = new Date();

  const today = getMoment;
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

  const calendarArr = () => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr className='day' key={week}> {
          Array(7).fill(0).map((data, index) => {
            let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');

            // 날짜가 오늘이면 이쁜색
            if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
              return (
                <td key={index} style={{ backgroundColor: '#4FD0FE' }} >
                  <span>{days.format('D')}</span>
                </td>
              );
              // 그 달의 날짜가 아니면 회색
            } else if (days.format('MM') !== today.format('MM')) {
              return (
                <td key={index} style={{ backgroundColor: '#C2C2C2' }} >
                  <span>{days.format('D')}</span>
                </td>
              );
              // 둘 다 아니면 X
            } else {
              return (
                <td key={index}  >
                  <span>{days.format('D')}</span>
                </td>
              );
            }
          })
        } </tr>);
    }
    return result;
  }

  return (
    <div className="Calender">
      <div className="head">
        <button onClick={() => { setMoment(getMoment.clone().subtract(1, 'month')) }} >＜</button>
        {/* <span>{today.format('YYYY년 MM월')}</span> */}
        {month.toLocaleString("en-US", { month: "long" })}
        <button onClick={() => { setMoment(getMoment.clone().add(1, 'month')) }} >＞</button>
      </div>
      <table className='body'>
        <tbody>
          {calendarArr()}
        </tbody>
      </table>
    </div>
  );
}

export default Calender;